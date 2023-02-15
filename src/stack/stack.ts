type Node<T> = {
    item: T;
    next: Node<T> | null;
};

export default class Stack<T> {
    constructor(
        private _size: number = 0,
        private head: Node<T> | null = null
    ) {}

    size(): number {
        return this._size;
    }

    push(item: T) {
        const node: Node<T> = {
            item,
            next: this.head,
        };
        this.head = node;
        this._size++;
    }

    pop(): T | undefined {
        if (this._size === 0) {
            throw new Error('Stack is empty');
        }
        const node = this.head;
        this.head = node!.next;
        this._size--;
        return node?.item;
    }

    peek(): T {
        if (this._size === 0) {
            throw new Error('Stack is empty');
        }
        return this.head!.item;
    }
}
