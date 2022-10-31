import React from "react";
import { Col, Typography, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize } from "../utils";
const { Title } = Typography;

/**
 * The initial simple introduction for the categories to select
 * @returns
 */
const CategoryIntroCard = ({ category, icon, color, onClick }) => {
  return (
    <Col className="custom-intro-card" style={{ borderColor: color }} onClick={() => onClick(category)}>
      <FontAwesomeIcon icon={icon} size="3x" color={color} />
      <Divider orientation="center"></Divider>
      <Title level={4}>{capitalize(category)}</Title>
    </Col>
  );
};

export default CategoryIntroCard;
