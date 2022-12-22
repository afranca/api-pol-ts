class UserData {
	userWithRoleAndWithoutOccupation() {
		const apiBody = '{ "name": "Test User2", "age": 42,  "role": "Head" }';

		return apiBody;
	}

	user1WithRoleAndWithoutOccupation() {
		const apiBody = '{ "name": "Test User6", "age": 46,  "role": "Supervisor" }';

		return apiBody;
	}
	userWithRoleAndOccupation() {
		const apiBody = '{ "name": "Test User1", "age": 45, "occupation": "IT Professional", "role": "Software Engineer" }';

		return apiBody;
	}

	userWithoutRoleAndWithOccupation() {
		const apiBody = '{ "name": "Test User3", "age": 40, "occupation": "Tester" }';

		return apiBody;
	}

	user1WithoutRoleAndWithOccupation() {
		const apiBody = '{ "name": "Test User8", "age": 40, "occupation": "Game designer" }';

		return apiBody;
	}

	user2WithoutRoleAndWithOccupation() {
		const apiBody = '{ "name": "Test User9", "age": 40, "occupation": "Economist" }';

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

	user2WithRoleAndOccupation() {
		const apiBody = '{ "name": "Test User6", "age": 50, "occupation": "Doctor", "role": "Dentist" }';

		return apiBody;
	}

	user3WithRoleAndOccupation() {
		const apiBody = '{ "name": "Test User7", "age": 52, "occupation": "Doctor", "role": "Surgeon" }';

		return apiBody;
	}
}
export default UserData;
