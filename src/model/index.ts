import { observable } from "mobx";

export class Model {
	@observable text: string = "a";

	constructor() {}
}
