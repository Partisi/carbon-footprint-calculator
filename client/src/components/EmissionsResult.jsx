import { Row, Col, Typography, InputNumber } from "antd";
import React from "react";
const { Text } = Typography;

const EmissionsResult = ({ totalEmissions }) => {
  const bigMacProductions = (totalEmissions / 2.35).toFixed(0);
  return (
    <>
      <Row>
        <Col>
          <Text>You emit {totalEmissions} kg of CO</Text>
          <Text style={{ fontSize: 10 }}>2 </Text>
          <Text>per year</Text>
        </Col>
      </Row>
      {totalEmissions > 1 && (
        <Row>
          <Text>
            That is equivalent to the emissions released by the production of
            {bigMacProductions} McDonald's Big Macs!
          </Text>
          <Text>
            Citation:
            "https://plantbasednews.org/news/environment/big-mac-carbon-footprint/"
          </Text>
        </Row>
      )}
    </>
  );
};

export default EmissionsResult;
