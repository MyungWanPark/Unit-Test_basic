import { Product, ProductClient } from '../productClient';

export default class StubProductClient implements ProductClient {
    async fetchItems(): Promise<Product[]> {
        return Promise.resolve([
            { name: 'apple', available: true },
            { name: 'banana', available: false },
        ]);
    }
}
