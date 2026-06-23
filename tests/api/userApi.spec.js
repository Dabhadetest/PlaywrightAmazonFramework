const { test, expect } = require('@playwright/test');
const UserApi = require('../../utils/api/userApi')

test('API Test - Get Users', async () => {

    const response = await UserApi.getUsers();

    // 👉 Check status code
    expect(response.status).toBe(200);

    // 👉 Check response body exists
    expect(response.data).toBeDefined();

    console.log("API Response:", response.data);
});