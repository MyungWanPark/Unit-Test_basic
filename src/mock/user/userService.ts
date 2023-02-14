import { UserClient } from './userClient';

export default class UserService {
    constructor(public userClient: UserClient, private isLoggedIn = false) {}

    login(id: string, pw: string) {
        if (!this.isLoggedIn) {
            return this.userClient
                .login(id, pw)
                .then((_data) => (this.isLoggedIn = true));
        }
    }
}
