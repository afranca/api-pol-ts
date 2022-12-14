import UserData from "./testData/userData";
const expect = require("chai").expect;
import { setUrl } from "./testData/setUrl";
import Common from "./commonMethods";
const url = setUrl();

describe("Get users", async () => {
	let common = new Common();
	let userData = new UserData();
	it("Get all users ", async () => {
		let response = await common.getRequest("");
		response.body.Users.forEach(function (user: any) {
			expect(user.name).to.be.oneOf(["Test User1", "Test User2", "Test User3", "Test User6"]);
		});
	});

	it("Get user by id ", async () => {
		let postResponse = await common.postRequest(userData.userWithRoleAndWithoutOccupation());
		expect(postResponse.body.entry.type).to.be.equal("admin");
		let getResponse = await common.getRequest("/" + postResponse.body.entry.id);
		expect(getResponse.body.user.id).to.be.equal(postResponse.body.entry.id);
		expect(getResponse.body.user.type).to.be.equal("admin");
		expect(getResponse.body.user.name).to.be.equal("Test User2");
		expect(getResponse.body.user.age).to.be.equal(42);
		expect(getResponse.body.user.role).to.be.equal("Head");
	});

	it("Get users of type admin", async () => {
		let response = await common.getRequest("/?type=admin");
		response.body.Users.forEach(function (user: any) {
			expect(user.type).to.be.equal("admin");
		});
	});
	it("Get users of type poweruser ", async () => {
		let response = await common.getRequest("/?type=poweruser");
		response.body.Users.forEach(function (user: any) {
			expect(user.type).to.be.equal("poweruser");
		});
	});
	it("Get users of type employee ", async () => {
		let response = await common.getRequest("/?type=employee");
		response.body.Users.forEach(function (user: any) {
			expect(user.type).to.be.equal("employee");
		});
	});

	it("Get users whose role is Head ", async () => {
		let response = await common.getRequest("/?role=Head");
		response.body.Users.forEach(function (user: any) {
			expect(user.role).to.be.equal("Head");
		});
	});

	it("Get users whose occupation is IT Professional ", async () => {
		let response = await common.getRequest("/?occupation=IT Professional");
		response.body.Users.forEach(function (user: any) {
			expect(user.occupation).to.be.equal("IT Professional");
		});
	});

	it("Get users whose type is admin and role is head ", async () => {
		let response = await common.getRequest("/?type=admin&role=Head");
		response.body.Users.forEach(function (user: any) {
			expect(user.type).to.be.equal("admin");
			expect(user.role).to.be.equal("Head");
		});
	});
});
