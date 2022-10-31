import React, { useState } from "react";
import { Row, Col, Typography, InputNumber, Divider } from "antd";
import { capitalize } from "../utils";
import { Spin } from "antd";
import { Button, Form, Input } from "antd";
import { calculatorForms } from "../calculatorForms";
import axios from "axios";
import EmissionsResult from "./EmissionsResult";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Title, Text, Paragraph } = Typography;

const ViewCard = ({ category, goBack }) => {
  // Backend Function Call
  const [calculatorForm] = useState(calculatorForms[category]);
  const [loading, setLoading] = useState(false);
  const [showEmissions, setShowingEmissions] = useState(false);

  async function handleEmissionsCalculations(formValues) {
    try {
      setLoading(true);

      const yearlyAdjustedValues = {};
      for (var key of Object.keys(formValues)) {
        if (formValues[key] === undefined) {
          yearlyAdjustedValues[key] = 0;
        } else {
          yearlyAdjustedValues[key] =
            formValues[key] *
            calculatorForm.inputs.find((o) => o.name == key).factor;
        }
      }

      const urlEndpoint = `http://localhost:3001/calculate-emissions`;
      const calculationResponse = await axios.post(urlEndpoint, {
        ...yearlyAdjustedValues,
        category,
      });
      console.log("Response: ", calculationResponse);
      setShowingEmissions(calculationResponse.data.totalEmissions);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <div className="calculate-category-container">
      <Spin tip="Loading..." spinning={loading}>
        <Row align="top" gutter={48}>
          {/* Left Side Card w/ General Description */}
          <Col span={10}>
            <Button
              onClick={() => goBack()}
              size="large"
              shape="round"
              style={{ background: "#f0f0f0" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="xl" color="#4dc1ff" />
              <Text style={{ color: "#4dc1ff" }}>Go Back</Text>
            </Button>
            <Divider></Divider>
            <Title level={2}>{capitalize(category)}</Title>
            <Paragraph>{calculatorForm.description}</Paragraph>
            <Paragraph>
              Please fill in the details to the form to the right! If you are
              unsure of what your use is, hover over the tooltip in the input's
              label to view more details. If you are still unsure, feel free to
              leave the input blank!
            </Paragraph>
          </Col>

          {/* Right Side Main Form Inputs OR the Emission Results */}
          <Col span={14}>
            {!!showEmissions ? (
              <EmissionsResult totalEmissions={showEmissions} />
            ) : (
              <>
                {!!calculatorForm.period && (
                  <Row justify="end" style={{ width: "100%" }}>
                    <Text style={{ color: "gray" }}>
                      each input is {calculatorForm.period}
                    </Text>
                  </Row>
                )}
                <RenderForm
                  calculatorFormInputs={calculatorForm.inputs}
                  handleEmissionsCalculations={handleEmissionsCalculations}
                />
              </>
            )}
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

// Main Rendering Form
// Abstracts away the category and uses the form inputs from "client/src/calculatorForms.js"
const RenderForm = ({ calculatorFormInputs, handleEmissionsCalculations }) => {
  const onFinish = (formValues) => {
    handleEmissionsCalculations(formValues);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      {calculatorFormInputs.map((eachInput, inputIndex) => {
        return (
          <Form.Item
            name={eachInput.name}
            key={inputIndex}
            label={eachInput.label}
            tooltip={eachInput.tooltip}
            rules={[
              {
                required: eachInput.required,
                message: !!eachInput.error
                  ? eachInput.error
                  : "This input is required!",
              },
            ]}
          >
            {eachInput.type === Number ? (
              <InputNumber
                addonAfter={eachInput.suffix}
                placeholder="0"
                style={{
                  width: "100%",
                  min: 0,
                  max: 10000000,
                }}
              />
            ) : (
              <Input />
            )}
          </Form.Item>
        );
      })}

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", height: "64px" }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ViewCard;
