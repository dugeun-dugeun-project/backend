const UserService = require("../services/users.service");

class UserController {
    constructor() {
        this.userService = new UserService();
    }
}

module.exports = UserController;
