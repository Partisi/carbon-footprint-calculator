import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useEffect } from "react";
import { Row, Col, Typography, Divider } from "antd";
import axios from "axios";
import CategoryIntroCard from "./components/CategoryIntroCard";

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
        <CategoryIntroCard title="Housing" icon={null} />
        <CategoryIntroCard title="Travel" icon={null} />
        <CategoryIntroCard title="Food" icon={null} />
      </Row>
      <Row justify="center">
        <CategoryIntroCard title="Products" icon={null} />
        <CategoryIntroCard title="Services" icon={null} />
      </Row>
    </div>
  );
}

export default App;
