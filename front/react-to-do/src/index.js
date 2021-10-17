import React from "react";
import ReactDom from "react-dom"; //react-domライブラリからReactDomという名前でモジュールをimport
import { App } from "./App";

ReactDom.render(<App />, document.getElementById("root"));
