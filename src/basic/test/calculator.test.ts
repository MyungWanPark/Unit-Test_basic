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

    it('throw new error if result in add Fn is greater then 100', () => {
        expect(() => {
            cal.add(101);
        }).toThrowError('value cannot be greater than 100');
    });

    describe('divide', () => {
        it('0 / 0 is NaN', () => {
            expect(cal.divide(0)).toBe(NaN);
        });

        it('1 / 0 is Infinity', () => {
            cal.set(1);
            expect(cal.divide(0)).toBe(Infinity);
        });
    });
});
