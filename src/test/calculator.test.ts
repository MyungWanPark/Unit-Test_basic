import Calculator from '../calculator';

describe('Calculator test', () => {
    let cal: Calculator;
    beforeEach(() => {
        cal = new Calculator();
    });

    it('initialize with zero', () => {
        expect(cal.value).toBe(0);
    });

    it('add', () => {
        expect(cal.add(3)).toBe(3);
    });

    describe('divide', () => {
        it('0 / 0 is NaN', () => {
            expect(cal.divide(0)).toBe(NaN);
        });

        it('1 / 0 is NaN', () => {
            cal.set(1);
            expect(cal.divide(0)).toBe(Infinity);
        });
    });
});
