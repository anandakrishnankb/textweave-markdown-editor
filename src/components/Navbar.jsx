import React from "react";
import { Typography } from "antd";

const { Text, Title } = Typography;
const Navbar = () => {
  return (
    <div id="nav-bar-sec">
      <div className="nav-bar">
        <Title level={2} style={{ color: "white", margin: "0px" }}>
          TextWeave
        </Title>
        <div className="nav-sub-text">
          <Text style={{ color: "white", fontStyle: "italic" }}>
            Your Markdown Companion for Effortless Writing{" "}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
