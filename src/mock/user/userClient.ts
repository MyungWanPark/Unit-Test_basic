export interface UserClient {
    login(id: string, pw: string): Promise<Response>;
}

export class UserClientImpl implements UserClient {
    async login(id: string, pw: string) {
        return fetch(`https://login/id=${id}&pw=${pw}`).then((res) =>
            res.json()
        );
    }
}
