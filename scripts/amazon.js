const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
            stars: 4.5,
            count: 87,
        },
        priceCents: 1090,
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "images/products/intermediate-composite-basketball.jpg",
        name: "Intermediate Size Basketball",
        rating: {
            stars: 4,
            count: 127,
        },
        priceCents: 2095,
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
            stars: 4.5,
            count: 56,
        },
        priceCents: 799,
    },{
        id: "id1",
        image: "images/products/backpack.jpg",
        name: "Black Backpack",
        rating: {
            stars: 4,
            count: 323
        },
        priceCents: 1999
    },
    {
        id: "id2",
        image: "images/products/umbrella.jpg",
        name: "Large Green Umbrella",
        rating: {
            stars: 5,
            count: 366
        },
        priceCents: 2699
    }
];

let productsHTML = ''

products.forEach((product) => {
    productsHTML +=
        `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${ product.image }" />
            </div>

            <div class="product-name limit-text-to-2-lines">${ product.name }</div>

            <div class="product-rating-container">
                <img class="product-rating-stars" src="images/ratings/rating-${ product.rating.stars * 10 }.png" />
                <div class="product-rating-count link-primary">${ product.rating.count }</div>
            </div>

            <div class="product-price">$${ (product.priceCents / 100).toFixed(2) }</div>

            <div class="product-quantity-container">
                <select class="js-quantity-selector-${ product.id }">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${ product.id }">
                <img src="images/icons/checkmark.png" />
                Added
            </div>
            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${ product.id }">Add to Cart</button>
        </div >
        `
})

//🟨Syntax for a data attribute
// -is just a HTML attribute
// -have to start with "data-"
// -then give it any name

document.querySelector('.js-products-grid').innerHTML = productsHTML

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click',() => {
        // const productId = button.dataset.productId
        const { productId } = button.dataset

        let matchingItem

        cart.forEach((item) => {
            if (productId === item.productId)
            {
                matchingItem = item
            }
        })

        const quantitySelector = document.querySelector(`.js-quantity-selector-${ productId }`)
        const quantity = Number(quantitySelector.value)

        if (matchingItem)
        {
            matchingItem.quantity += quantity
        }
        else
        {
            cart.push({
                // productId: productId,
                // quantity: quantity
                productId,
                quantity
            })

        }

        let cartQuantity = 0
        cart.forEach((item) => {
            cartQuantity += item.quantity
        })
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
        console.log(cartQuantity)

        console.log(cart)

        const addedMessage = document.querySelector(`.js-added-to-cart-${ productId }`);
        addedMessage.classList.add('added-to-cart-visible')
    })
})