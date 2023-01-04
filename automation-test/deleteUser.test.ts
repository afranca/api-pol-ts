const expect = require("chai").expect;
import { setUrl } from "./testData/setUrl";
import Common from "./commonMethods";
import UserData from "./testData/userData";
const url = setUrl();

describe("Delete user", async () => {
	let usersId: string[] = [];
	let common = new Common();
	let userData = new UserData();
	it("Delete  a user by id ", async () => {
		let postResponse = await common.postRequest(userData.user1WithRoleAndOccupation());
		expect(postResponse.body.entry.type).to.be.equal("poweruser");
		let getResponse = await common.getRequest("/" + postResponse.body.entry.id);
		expect(getResponse.body.user.id).to.be.equal(postResponse.body.entry.id);
		expect(getResponse.body.user.type).to.be.equal("poweruser");
		expect(getResponse.body.user.name).to.be.equal("Test User5");
		expect(getResponse.body.user.age).to.be.equal(38);
		expect(getResponse.body.user.role).to.be.equal("Account manager");
		const response = await common.deleteRequest(postResponse.body.entry.id);
		response.body.users.forEach((user: { id: string }) => {
			usersId.push(user.id);
		});
		expect(usersId).to.be.an("array").that.does.not.include(postResponse.body.entry.id);
	});

	it("Delete all users ", async () => {
		usersId.forEach(async function (id) {
			const response = await common.deleteRequest(id);
			response.body.users.forEach((user: { id: string }) => {
				usersId.push(user.id);
			});
			expect(usersId).to.be.an("array").that.does.not.include(id);
		});

		it("", async () => {
			let responsePostDeleteAllUsers = await common.getRequest("");
			expect(responsePostDeleteAllUsers.body.Users.length).to.be.equal(0);
		});
	});
});
