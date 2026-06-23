const apiClient = require('./apiClient');

class UserApi {

    static async getUsers() {
        return await apiClient.get('/users');
    }
}

module.exports = UserApi;