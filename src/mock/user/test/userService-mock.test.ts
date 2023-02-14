import { UserClientImpl } from '../userClient';
import UserService from '../userService';

jest.mock('../userClient.ts');
describe('User Service', () => {
    const login = jest.fn(async () => 'success');

    (UserClientImpl as jest.Mock).mockImplementation(() => {
        return {
            login,
        };
    });

    let userService: UserService;
    beforeEach(() => {
        userService = new UserService(new UserClientImpl());
    });

    it('call login() in UserClient when tries to login', async () => {
        await userService.login('id', 'pw');
        expect(login).toHaveBeenCalledTimes(1);
    });

    it('should not call login function twice if already loggend in', async () => {
        await userService.login('id', 'pw');
        await userService.login('id', 'pw');
        expect(login).toHaveBeenCalledTimes(1);
        expect(userService.login).toHaveBeenCalledTimes(1);
    });
});
