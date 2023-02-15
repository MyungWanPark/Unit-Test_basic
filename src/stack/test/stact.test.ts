import Stack from '../stack';

describe('Stack', () => {
    let stack: Stack<string>;
    beforeEach(() => {
        stack = new Stack<string>();
    });

    it('size(): get size of empty stack', () => {
        expect(stack.size()).toBe(0);
    });

    it('push(): when pushing item into stack, size should increase by 1', () => {
        stack.push('hello');

        expect(stack.size()).toBe(1);
    });

    describe('pop()', () => {
        it('throw error msg "Stack is empty": throw error when current stack is empty', () => {
            expect(() => stack.pop()).toThrow('Stack is empty');
        });

        it('get last item & remove from stack: return the last item of stack and remove from the stack', () => {
            stack.push('hello');
            stack.push('myName');
            stack.push('is');

            expect(stack.pop()).toBe('is');
            expect(stack.size()).toBe(2);
        });
    });

    describe('peek()', () => {
        it('throw error when stack is empty', () => {
            expect(() => stack.peek()).toThrow('Stack is empty');
        });

        it('get the last item of stack but stack remains the same', () => {
            stack.push('hello');
            stack.push('myName');
            stack.push('is');

            expect(stack.peek()).toBe('is');
            expect(stack.size()).toBe(3);
        });
    });
});
