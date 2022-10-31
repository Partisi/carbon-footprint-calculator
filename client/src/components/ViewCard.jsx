import React, { useState } from "react";
import { Row, Col, Typography, Divider, Select, InputNumber } from "antd";
import { capitalize } from "../utils";

import { Button, Form, Input, Radio, Checkbox } from "antd";
import { Option } from "antd/lib/mentions";
import { calculatorForms } from "../calculatorForms";

const { Title } = Typography;

const ViewCard = ({ category, goBack }) => {
  const [calculatorForm] = useState(calculatorForms[category]);

  return (
    <div className="calculate-category-container">
      <Row type="flex" align="middle">
        {/* Left Side Card w/ General Description */}
        <Col>
          <Button onClick={() => goBack()}>Go Back</Button>
          <Title>{capitalize(category)}</Title>
        </Col>

        {/* Right Side Main Form Inputs */}
        <Col>
          <RenderForm calculatorForm={calculatorForm} />
        </Col>
      </Row>
    </div>
  );
};

const RenderForm = ({ calculatorForm }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
      {calculatorForm.map((eachInput, inputIndex) => {
        if (eachInput.type === Number) {
          return (
            <Form.Item
              name={eachInput.label}
              key={inputIndex}
              label={eachInput.label}
              rules={[
                {
                  required: true,
                  message: eachInput.error,
                },
              ]}
            >
              <InputNumber
                addonAfter={eachInput.suffix}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          );
        } else if (eachInput.type === String) {
          return (
            <Form.Item
              name={eachInput.label}
              key={inputIndex}
              label={eachInput.label}
              rules={[
                {
                  required: true,
                  message: eachInput.error,
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        }
      })}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ViewCard;
