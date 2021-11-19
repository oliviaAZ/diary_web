// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterMap from "./Router";
import "@babel/polyfill";
import "antd-mobile/dist/antd-mobile.css";

ReactDOM.render(<RouterMap />, document.getElementById("app"));
