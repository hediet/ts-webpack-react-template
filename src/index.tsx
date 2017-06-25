import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style.scss";
import Components = require("./Components");
import { Model } from "./Model";

const model = new Model();

function render(target: HTMLDivElement, components: typeof Components) {
	ReactDOM.render(<components.GUI model={model} />, target);
}

const target = document.createElement("div");
render(target, Components);
document.body.appendChild(target);

declare var module: { hot?: { accept: (componentName: string, callback: () => void) => void } };
declare var require: (name: string) => any;

if (module.hot) {
	module.hot.accept("./Components", () => render(target, require("./Components")));
}
