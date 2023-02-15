export default class Stack<T> {
    constructor(public item: Array<T> = []) {}

    size(): number {
        return this.item.length;
    }

    push(item: T) {
        this.item.push(item);
    }

    pop(): T | undefined {
        if (this.item.length === 0) {
            throw new Error('Stack is empty');
        }
        return this.item.pop();
    }

    peek(): T {
        if (this.item.length === 0) {
            throw new Error('Stack is empty');
        }
        return this.item[this.size() - 1];
    }
}
