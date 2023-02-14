export type Product = {
    name: string;
    available: boolean;
};

export class ProductClient {
    async fetchItems(): Promise<Product[]> {
        return fetch('https://abcdef.com/products/all').then((res) =>
            res.json()
        );
    }
}
