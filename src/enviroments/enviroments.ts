const $BASE_REST = "http://localhost:3000";

export const environment = {
    baseRest: $BASE_REST,
     auth: {
        login: `${$BASE_REST}/api/auth/login`,
        register: `${$BASE_REST}/api/auth/register`
    },
     products: {
        allProducts: `${$BASE_REST}/api/products`,
        getProductByID: `${$BASE_REST}/api/products`,
        createProducts: `${$BASE_REST}/api/products`,
        updateProduct:`${$BASE_REST}/api/products`,
        deleteProduct:`${$BASE_REST}/api/products`
    },
    carts: {
        allCarts: `${$BASE_REST}/api/carts`,
        getCartByID: `${$BASE_REST}/api/carts`,
        getCartByUserID: `${$BASE_REST}/api/carts/userCarts`,
        getCartByUserToken: `${$BASE_REST}/api/carts/userCartsToken`,
        createCarts: `${$BASE_REST}/api/carts`,
        updateCart:`${$BASE_REST}/api/carts`,
        deleteCart:`${$BASE_REST}/api/carts`,
        purchaseCart:`${$BASE_REST}/api/carts/buyCart`
    },
    orders: {
        allOrders: `${$BASE_REST}/api/orders`,
        getOrderByID: `${$BASE_REST}/api/orders`,
        getOrderByUserID: `${$BASE_REST}/api/orders/user/token`,
    }
}