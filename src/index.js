import React from "react";
import { render } from "react-dom";

import InBrowser from "./InBrowser";
import App from "./App";

const ROOT_NODE = document.getElementById("root");

const mount = ({ fin }) => {
  typeof fin !== "undefined"
    ? render(<App />, ROOT_NODE)
    : render(<InBrowser />, ROOT_NODE);
};

mount(window);
