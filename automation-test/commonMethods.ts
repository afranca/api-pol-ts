import request from "supertest";
const expect = require("chai").expect;
import { setUrl } from "./testData/setUrl";
const url = setUrl();

class Common {
	async postRequest(apiBody: string | object | undefined) {
		const response = await request(url.dev.baseUrl)
			.post("/api/users")
			.send(apiBody)
			.set("Accept", "application/json")
			.set("Content-Type", "application/json");
		expect(response.statusCode).to.be.equal(201);
		expect(response.body.message).to.be.equal("Successfully created.");
		//console.log(response.body.entry.id);
		return response;
	}

	async getRequest(type: string) {
		const response = await request(url.dev.baseUrl)
			.get("/api/users" + type)
			.set("Accept", "application/json")
			.set("Content-Type", "application/json");
		expect(response.statusCode).to.be.equal(200);
		return response;
	}

	async deleteRequest(id: string) {
		const response = await request(url.dev.baseUrl)
			.delete("/api/users/" + id)
			.set("Accept", "application/json")
			.set("Content-Type", "application/json");
		expect(response.statusCode).to.be.equal(201);
		expect(response.body.message).to.be.equal("Successfully deleted.");
		return response;
	}
}
export default Common;
