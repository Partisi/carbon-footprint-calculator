import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import Card from "antd/lib/card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { Title } = Typography;

/**
 * The initial simple introduction for the categories to select
 * @returns
 */
const CategoryIntroCard = ({ title, icon, color, onClick }) => {
  return (
    <Col className="custom-intro-card" style={{ borderColor: color }} onClick={() => onClick(title)}>
      <FontAwesomeIcon icon={icon} size="3x" color={color} />
      <Divider orientation="center"></Divider>
      <Title level={4}>{title}</Title>
    </Col>
  );
};

export default CategoryIntroCard;
