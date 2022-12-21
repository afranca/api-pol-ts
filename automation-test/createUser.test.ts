import request from "supertest";
const expect = require("chai").expect;
import { setUrl } from "./testData/setUrl";
import UserData from "./testData/userData";
import Common from "./commonMethods";
const url = setUrl();

describe("Create users", async () => {
	let userData = new UserData();
	let common = new Common();

	it("Create admin type user ", async () => {
		let response = await common.postRequest(userData.userWithRoleAndWithoutOccupation());
		expect(response.body.entry.name).to.be.equal("Test User2");
		expect(response.body.entry.age).to.be.equal(42);
		expect(response.body.entry.role).to.be.equal("Head");
		expect(response.body.entry.type).to.be.equal("admin");
		response = await common.postRequest(userData.user1WithRoleAndWithoutOccupation());
		expect(response.body.entry.name).to.be.equal("Test User6");
		expect(response.body.entry.age).to.be.equal(46);
		expect(response.body.entry.role).to.be.equal("Supervisor");
		expect(response.body.entry.type).to.be.equal("admin");
	});

	it("Create employee type user ", async () => {
		let response = await common.postRequest(userData.userWithoutRoleAndWithOccupation());
		expect(response.body.entry.type).to.be.equal("employee");
		expect(response.body.entry.name).to.be.equal("Test User3");
		expect(response.body.entry.age).to.be.equal(40);
		expect(response.body.entry.occupation).to.be.equal("Tester");
	});

	it.only("Create poweruser type user", async () => {
		let response = await common.postRequest(userData.userWithRoleAndOccupation());
		expect(response.body.entry.type).to.be.equal("poweruser");
		expect(response.body.entry.name).to.be.equal("Test User1");
		expect(response.body.entry.age).to.be.equal(45);
		expect(response.body.entry.role).to.be.equal("Software Engineer");
		expect(response.body.entry.occupation).to.be.equal("IT Professional");
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
