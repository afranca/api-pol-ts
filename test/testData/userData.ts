class UserData {
	userWithRoleAndOccupation() {
		const apiBody = '{ "name": "Test User1", "age": 45, "occupation": "IT Professional", "role": "Software Engineer" }';

		return apiBody;
	}

	userWithRoleAndWithoutOccupation() {
		const apiBody = '{ "name": "Test User2", "age": 42,  "role": "Head" }';

		return apiBody;
	}

	user1WithRoleAndWithoutOccupation() {
		const apiBody = '{ "name": "Test User6", "age": 41,  "role": "Head" }';

		return apiBody;
	}

	userWithoutRoleAndWithOccupation() {
		const apiBody = '{ "name": "Test User3", "age": 40, "occupation": "Tester" }';

		return apiBody;
	}

	userWithoutRoleAndOccupation() {
		const apiBody = '{ "name": "Test User4", "age": 40 }';

		return apiBody;
	}

	user1WithRoleAndOccupation() {
		const apiBody = '{ "name": "Test User5", "age": 38, "occupation": "Accountant", "role": "Account manager" }';

		return apiBody;
	}
}
export default UserData;
