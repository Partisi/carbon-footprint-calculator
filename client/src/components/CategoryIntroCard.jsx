import React from "react";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;

/**
 * The initial simple introduction for the categories to select
 * @returns
 */
const CategoryIntroCard = ({ title, icon }) => {
  return (
    <Col>
      <Row>
        <Col>
          <Title level={2}>{title}</Title>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Col>
  );
};

export default CategoryIntroCard;
