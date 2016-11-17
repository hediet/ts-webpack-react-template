import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from "classnames";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import DevTools from 'mobx-react-devtools'; 
import "./style.scss";

class Model {
	constructor() {
		this.time = new Date();
		setInterval(() => this.time = new Date(), 1000);
	}

	@observable time: Date;
	@computed get seconds(): number {
		return this.time.getSeconds();
	}
}

var model = new Model();

@observer
class GUI extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<DevTools />
				{model.time.toDateString()},
				second: {model.seconds}
			</div>
		);
	}
}

var target = document.createElement("div");
ReactDOM.render(<GUI />, target);
document.body.appendChild(target);
