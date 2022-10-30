import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useEffect } from "react";
import { Row, Col, Typography, Divider } from "antd";
import axios from "axios";
import CategoryIntroCard from "./components/CategoryIntroCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCar,
  faHouse,
  faSchool,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;

function App() {
  useEffect(() => {
    axios.get("http://localhost:3001/test").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="app">
      <Title level={1}>Carbon Footprint Calculator</Title>
      <Divider orientation="center">
        Where would you like to calculate your carbon footprint?
      </Divider>

      <Row justify="center">
        <CategoryIntroCard
          title="Housing"
          icon={<FontAwesomeIcon icon={faHouse} size="4x" />}
        />
        <CategoryIntroCard
          title="Travel"
          icon={<FontAwesomeIcon icon={faCar} size="4x" />}
        />
        <CategoryIntroCard
          title="Food"
          icon={<FontAwesomeIcon icon={faBurger} size="4x" />}
        />
      </Row>
      <Row justify="center">
        <CategoryIntroCard
          title="Products"
          icon={<FontAwesomeIcon icon={faShirt} size="4x" />}
        />
        <CategoryIntroCard
          title="Services"
          icon={<FontAwesomeIcon icon={faSchool} size="4x" />}
        />
      </Row>
    </div>
  );
}

export default App;
