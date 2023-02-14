import { ProductClientImpl as ProductClient } from './productClient';

export default class ProductService {
    productClient;

    constructor() {
        this.productClient = new ProductClient();
    }

    getAvailableProduct() {
        return this.productClient
            .fetchItems()
            .then((items) => items.filter((item) => item.available === true));
    }
}
