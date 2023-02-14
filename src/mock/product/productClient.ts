export type Product = {
    name: string;
    available: boolean;
};

export interface ProductClient {
    fetchItems(): Promise<Product[]>;
}

export class ProductClientImpl implements ProductClient {
    async fetchItems(): Promise<Product[]> {
        return fetch('https://abcdef.com/products/all').then((res) =>
            res.json()
        );
    }
}
