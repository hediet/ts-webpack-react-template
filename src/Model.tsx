import { observable, computed } from "mobx";

export class Model {
	constructor() {
		this.time = new Date();
		setInterval(() => 
			this.time = new Date(), 1000);
	}

	@observable value: string;

	@observable time: Date;
	@computed get seconds(): number {
		return this.time.getSeconds();
	}
}