import React from "react";
import { Row, Col, Typography } from "antd";
import Card from "antd/lib/card/Card";
const { Title } = Typography;

/**
 * The initial simple introduction for the categories to select
 * @returns
 */
const CategoryIntroCard = ({ title, icon }) => {
  return (
    <Col className="custom-intro-card">
      <Row justify="center">
        <Title>{title}</Title>
      </Row>
      <Row justify="center" align="middle">{icon}</Row>
    </Col>
  );
};

export default CategoryIntroCard;
