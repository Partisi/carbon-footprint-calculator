import { Row, Col, Typography, InputNumber, Space } from "antd";
import React from "react";
const { Title, Paragraph, Text, Link } = Typography;

const EmissionsResult = ({ totalEmissions }) => {
  const bigMacProductions = (totalEmissions / 2.35).toFixed(0);
  return (
    <Space
      direction="vertical"
      size={10}
      style={{
        marginTop: 120,
        display: "flex",
        background: "#f0f0f0",
        borderRadius: 12,
        padding: 24,
      }}
    >
      <Row align="middle" justify="center">
        <Paragraph style={{ fontSize: 32 }}>
          <Text style={{ color: "blue" }}>
            You emit {totalEmissions} kg of CO
          </Text>
          <Text style={{ fontSize: 16, color: "blue" }}>2 </Text>
          <Text style={{ color: "blue" }}>per year</Text>
        </Paragraph>
        <Paragraph style={{ color: "black" }}>
          Please note, that this estimation is NOT precise and is only a general
          estimate.
        </Paragraph>
      </Row>
      {totalEmissions > 1 && (
        <Row align="bottom" justify="center">
          <Paragraph style={{ color: "black" }}>
            That is equivalent to the emissions released by the production of{" "}
            {bigMacProductions} McDonald's Big Macs!
          </Paragraph>
          <Link href="https://plantbasednews.org/news/environment/big-mac-carbon-footprint/">
            https://plantbasednews.org/news/environment/big-mac-carbon-footprint/
          </Link>
        </Row>
      )}
    </Space>
  );
};

export default EmissionsResult;
