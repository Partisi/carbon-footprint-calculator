import { Row, Col, Typography, InputNumber } from "antd";
import React from "react";
const { Title, Paragraph, Text, Link } = Typography;

const EmissionsResult = ({ totalEmissions }) => {
  const bigMacProductions = (totalEmissions / 2.35).toFixed(0);
  return (
    <>
      <Row>
        <Col>
          <Paragraph>
            <Text>You emit {totalEmissions} kg of CO</Text>
            <Text style={{ fontSize: 10 }}>2 </Text>
            <Text>per year</Text>
          </Paragraph>
          <Paragraph>Please note, that this estimation is NOT precise and is only a general estimate.</Paragraph>
        </Col>
      </Row>
      {totalEmissions > 1 && (
        <Row>
          <Paragraph>
            That is equivalent to the emissions released by the production of{" "}
            {bigMacProductions} McDonald's Big Macs!
          </Paragraph>
          <Link href="https://plantbasednews.org/news/environment/big-mac-carbon-footprint/">
            https://plantbasednews.org/news/environment/big-mac-carbon-footprint/
          </Link>
        </Row>
      )}
    </>
  );
};

export default EmissionsResult;
