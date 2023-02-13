export default class Calculator {
    constructor(public value = 0) {}

    set(num: number) {
        this.value = num;
    }

    clear() {
        this.value = 0;
    }

    add(num: number): number {
        return this.value + num;
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
