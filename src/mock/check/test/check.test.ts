import { check, OnFailFn, OnSuccessFn } from '../check';

describe('check', () => {
    let onSuccess: OnSuccessFn;
    let onFail: OnFailFn;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('OnSuccess should call only once when true', () => {
        check(() => true, onSuccess, onFail);
        expect(onSuccess).toHaveBeenCalledTimes(1);
        expect(onFail).toHaveBeenCalledTimes(0);
    });

    it('OnFail should call only once when false', () => {
        check(() => false, onSuccess, onFail);
        expect(onSuccess).toHaveBeenCalledTimes(0);
        expect(onFail).toHaveBeenCalledTimes(1);
    });
});
