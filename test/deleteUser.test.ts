import request from "supertest";
const expect = require("chai").expect;
import { setUrl } from "../test/testData/set-url";
const url = setUrl();

describe("Delete user", async () => {
	it.skip("Delete  a user by id ", async () => {
		const response = await request(url.dev.baseUrl)
			.delete("/api/users")
			.set("Accept", "application/json")
			.set("Content-Type", "application/json");
		expect(response.statusCode).to.be.equal(201);
		console.log(response.body);
	});

	it.skip("Delete all users ", async () => {
		const response = await request(url.dev.baseUrl)
			.delete("/api/users/0.7641061353106924")
			.set("Accept", "application/json")
			.set("Content-Type", "application/json");
		expect(response.statusCode).to.be.equal(201);
		console.log(response.body);
	});
});
