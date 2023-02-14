import { ProductClient } from './productClient';

export default class ProductService {
    constructor(public productClient: ProductClient) {}

    async getAvailableProduct() {
        return this.productClient
            .fetchItems()
            .then((items) => items.filter((item) => item.available === true));
    }
}
