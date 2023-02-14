import async from '../async';

describe('Async', () => {
    it('with out return', () => {
        async().then((item) => expect(item).toEqual({ id: 1, quantity: 2 }));
    });

    it('with return', async () => {
        return async().then((item) =>
            expect(item).toEqual({ id: 1, quantity: 2 })
        );
    });

    it('with resolve', () => {
        return expect(async()).resolves.toEqual({ id: 1, quantity: 2 });
    });

    it('with reject', () => {
        return expect(async('error')).rejects.toEqual('something went wrong');
    });
});
