import React from "react";
import { Typography } from "antd";

const { Text, Title } = Typography;
const Navbar = () => {
  return (
    <div id="nav-bar-sec">
      <div className="nav-bar">
        <h1 className="logo">TextWeave</h1>
        <div className="nav-sub-text">
          <p className="sub-title">Your Markdown Companion for Effortless Writing </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
