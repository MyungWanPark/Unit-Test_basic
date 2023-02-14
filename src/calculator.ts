export default class Calculator {
    constructor(public value = 0) {}

    set(num: number) {
        this.value = num;
    }

    clear() {
        this.value = 0;
    }

    add(num: number): number {
        const result = this.value + num;
        if (result > 100) {
            throw new Error('value cannot be greater than 100');
        }
        return result;
    }

    subtract(num: number): number {
        return this.value - num;
    }

    mulitiply(num: number): number {
        return this.value * num;
    }

    divide(num: number): number {
        return this.value / num;
    }
}
