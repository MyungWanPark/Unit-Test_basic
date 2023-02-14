import ProductService from './../productService';
import StubProductClient from './stubProductClient';

describe('Product Service - Stub', () => {
    let productService: ProductService;

    beforeEach(() => {
        productService = new ProductService(new StubProductClient());
    });

    it('fetch only available items with stub', async () => {
        const items = await productService.getAvailableProduct();
        expect(items.length).toBe(1);
        expect(items).toEqual([{ name: 'apple', available: true }]);
    });
});
