import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useState } from "react";
import { Row, Col, Typography, Divider } from "antd";
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

/**
 * Main App Component to Render the Categories the user can choose to calculate from
 * @returns
 */
function App() {
  const [viewingCard, setViewingCard] = useState(null); // which category (form) is being displayed

  if (viewingCard === null) {
    // (initial state) showing the list of categories to choose from
    return (
      <div className="app">
        {/* Top Introduction to Calculator */}
        <Title level={1}>Carbon Footprint Calculator</Title>
        <Divider orientation="center">
          Where would you like to calculate your carbon footprint?
        </Divider>

        <Row justify="center">
          {/* First Row of Categories (3 items) */}
          <CategoryIntroCard
            category="housing"
            color="red"
            icon={faHouse}
            onClick={(category) => setViewingCard(category)}
          />
          <CategoryIntroCard
            category="travel"
            color="orange"
            icon={faCar}
            onClick={(category) => setViewingCard(category)}
          />
          <CategoryIntroCard
            category="food"
            color="green"
            icon={faBurger}
            onClick={(category) => setViewingCard(category)}
          />
        </Row>
        <Row justify="center">
          {/* Second Row of Categories (2 items) */}
          <CategoryIntroCard
            category="products"
            color="blue"
            icon={faShirt}
            onClick={(category) => setViewingCard(category)}
          />
          <CategoryIntroCard
            category="services"
            color="purple"
            icon={faSchool}
            onClick={(category) => setViewingCard(category)}
          />
        </Row>
      </div>
    );
  } else {
    // rendering the specific calculator for the selected category
    return (
      <ViewCard category={viewingCard} goBack={() => setViewingCard(null)} />
    );
  }
}

export default App;
