export default function fetchProduct(errMsg?: string) {
    if (errMsg === 'error') {
        return Promise.reject('something went wrong');
    }
    return Promise.resolve({ id: 1, quantity: 2 });
}
