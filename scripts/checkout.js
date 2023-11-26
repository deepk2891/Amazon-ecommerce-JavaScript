import { cart } from "../data/cart.js";
import { products } from "../data/products.js";



cart.forEach(cartItem => {
    const productId = cartItem.id

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId)
        {
            matchingProduct = product
        }
    })
    console.log(matchingProduct)



});

