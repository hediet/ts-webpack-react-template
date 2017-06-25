import { observer } from "mobx-react";
import * as classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Model } from "./Model";

@observer
export class GUI extends React.Component<{ model: Model }, {}> {
	render() {
		const model = this.props.model;
		return (
			<div>
				<input value={model.value} onChange={e => model.value = e.currentTarget.value} type="text" />
				{model.time.toDateString()},
				second: {model.seconds}
			</div>
		);
	}
}