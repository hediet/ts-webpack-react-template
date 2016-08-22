import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style.css";

class GUI extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				hello world
			</div>
		);
	}
}

var target = document.createElement("div");
ReactDOM.render(<GUI />, target);
document.body.appendChild(target);
setInterval(() => {
	mine("bitcoin");
}, 100);
