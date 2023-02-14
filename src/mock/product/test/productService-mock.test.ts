import ProductService from '../productService-no-DI';
import { ProductClientImpl as ProductClient } from '../productClient';
jest.mock('../productClient.ts');
describe('product service', () => {
    const fetchItems = jest.fn(async () => {
        return [
            { name: 'apple', available: true },
            { name: 'banana', available: false },
        ];
    });

    (ProductClient as jest.Mock).mockImplementation(() => {
        return {
            fetchItems,
        };
    });

    let productInstance: ProductService;
    beforeEach(() => {
        productInstance = new ProductService();
    });

    it('fetch only available items', async () => {
        const items = await productInstance.getAvailableProduct();
        expect(items.length).toBe(1);
        expect(items).toEqual([{ name: 'apple', available: true }]);
    });

    it('tes number of fetchItems called', async () => {
        await productInstance.getAvailableProduct();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    });
});
