import * as React from "react";
import { Model } from "../model";
import classnames = require("classnames");
import { observer } from "mobx-react";
import { hotComponent } from "../utils/hotComponent";

@hotComponent(module)
@observer
export class MainView extends React.Component<{ model: Model }, {}> {
	render() {
		const model = this.props.model;

		return (
			<div>
				<input
					value={model.text}
					onChange={(e) => (model.text = e.target.value)}
				/>
			</div>
		);
	}
}
