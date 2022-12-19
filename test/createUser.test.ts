import request from "supertest";
const expect = require("chai").expect;
import { setUrl } from "../test/testData/set-url";
import UserData from "./testData/userData";
import Common from "./commonMethods";
const url = setUrl();

describe("Create users", async () => {
	let userData = new UserData();
	let common = new Common();

	it("Create admin type user ", async () => {
		let response = await common.postRequest(userData.userWithRoleAndWithoutOccupation());
		expect(response.body.entry.type).to.be.equal("admin");
		await common.postRequest(userData.user1WithRoleAndWithoutOccupation());
		expect(response.body.entry.type).to.be.equal("admin");
	});

	it("Create employee type user ", async () => {
		let response = await common.postRequest(userData.userWithoutRoleAndWithOccupation());
		expect(response.body.entry.type).to.be.equal("employee");
	});

	it("Create poweruser type user", async () => {
		let response = await common.postRequest(userData.userWithRoleAndOccupation());
		expect(response.body.entry.type).to.be.equal("poweruser");
	});

	it("Create user without role and occupation ", async () => {
		const response = await request(url.dev.baseUrl)
			.post("/api/users")
			.send(userData.userWithoutRoleAndOccupation())
			.set("Accept", "application/json")
			.set("Content-Type", "application/json");
		expect(response.statusCode).to.be.equal(500);
		expect(response.body.message).to.be.equal("Missing both, role and occupation fields");
	});
});
