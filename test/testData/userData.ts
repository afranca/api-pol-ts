class UserData{

    userWithRoleAndOccupation()
    {
        const apiBody='{ "name": "Test User1", "age": 45, "occupation": "IT Professional", "role": "Software Engineer" }';

        return apiBody;
    }

    userWithRoleAndWithoutOccupation()
    {
        const apiBody='{ "name": "Test User2", "age": 42,  "role": "Head" }';

        return apiBody;
    }

    userWithoutRoleAndWithOccupation()
    {
        const apiBody='{ "name": "Test User3", "age": 40, "occupation": "Tester" }';

        return apiBody;
    }

    userWithoutRoleAndOccupation()
    {
        const apiBody='{ "name": "Test User4", "age": 40 }';

        return apiBody;
    }
}
export default UserData;