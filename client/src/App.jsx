import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useEffect, useState } from "react";
import { Row, Col, Typography, Divider } from "antd";
import axios from "axios";
import CategoryIntroCard from "./components/CategoryIntroCard";
import ViewCard from "./components/ViewCard";

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

  const [viewingCard, setViewingCard] = useState(null);

  function handleCardClicked(key) {
    setViewingCard(key);
  }

  if (viewingCard === null) {
    return (
      <div className="app">
        <Title level={1}>Carbon Footprint Calculator</Title>
        <Divider orientation="center">
          Where would you like to calculate your carbon footprint?
        </Divider>

        <Row justify="center">
          <CategoryIntroCard
            title="Housing"
            color="red"
            icon={faHouse}
            onClick={handleCardClicked}
          />
          <CategoryIntroCard
            title="Travel"
            color="orange"
            icon={faCar}
            onClick={handleCardClicked}
          />
          <CategoryIntroCard
            title="Food"
            color="green"
            icon={faBurger}
            onClick={handleCardClicked}
          />
        </Row>
        <Row justify="center">
          <CategoryIntroCard
            title="Products"
            color="blue"
            icon={faShirt}
            onClick={handleCardClicked}
          />
          <CategoryIntroCard
            title="Services"
            color="purple"
            icon={faSchool}
            onClick={handleCardClicked}
          />
        </Row>
      </div>
    );
  } else {
    return <ViewCard key={viewingCard} />;
  }
}

export default App;
