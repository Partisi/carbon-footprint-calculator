import React, { useState } from "react";
import { Row, Col, Typography, Divider, Select, InputNumber } from "antd";
import { capitalize } from "../utils";
import { Alert, Spin } from "antd";
import { Button, Form, Input } from "antd";
import { calculatorForms } from "../calculatorForms";
import axios from "axios";

const { Title, Text } = Typography;

const ViewCard = ({ category, goBack }) => {
  // Backend Function Call
  const [calculatorForm] = useState(calculatorForms[category]);
  const [loading, setLoading] = useState(false);
  const [showEmissions, setShowingEmissions] = useState(false);

  async function handleEmissionsCalculations(formValues) {
    try {
      setLoading(true);
      const urlEndpoint = `http://localhost:3001/calculate-emissions`;
      const calculationResponse = await axios.post(urlEndpoint, {
        ...formValues,
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
        <Row align="top">
          {/* Left Side Card w/ General Description */}
          <Col span={10}>
            <Button onClick={() => goBack()}>Go Back</Button>
            <Title>{capitalize(category)}</Title>
            <Text>{calculatorForm.description}</Text>
            <Text>
              Please fill in the details to the form to the right! If you are
              unsure of what your use is, hover over the tooltip in the input's
              label to view more details. If you are still unsure, feel free to
              leave the input blank!
            </Text>
          </Col>

          {/* Right Side Main Form Inputs OR the Emission Results */}
          <Col span={14}>
            {!!showEmissions ? (
              <Results totalEmissions={showEmissions} />
            ) : (
              <>
                <Text>{calculatorForm.period}</Text>
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
    console.log("Success:", formValues);
    handleEmissionsCalculations(formValues);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
                style={{
                  width: "100%",
                }}
              />
            ) : (
              <Input />
            )}
          </Form.Item>
        );
      })}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const Results = ({ totalEmissions }) => {
  return (
    <div>
      <h1>You emit {totalEmissions}</h1>
    </div>
  );
};

export default ViewCard;
