
const carts =document.querySelectorAll('.add-cart');

const products = [
    {
        name: "Keonigsegg",
        tag:  "keonigsegg",
        price: 12000000,
        inCart: 0
    },
    {
        name: "Mercedes benz gls 600",
        tag:  "Mercedes benz gls 600",
        price: 1200000,
        inCart: 0
    },
    {
        name: "Mercedes benz c class",
        tag:  "Mercedes benz c class",
        price: 1728000,
        inCart: 0
    },
    {
        name: "Porsche suv",
        tag:  "Porsche suv",
        price: 3000000,
        inCart: 0
    },
]

for (let i=0; i <carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[1])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers',  productNumbers + 1);
        document.querySelector('.cart span').textContent  = productNumbers  + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
     setItems(product);
}


function setItems(product) {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);
    

    if(cartItems != null) {
        
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    
    localStorage.setItem("productsIncart", JSON.stringify
    (cartItems));
}
function totalCost(product) {
    //console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("my cartCost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost );
        localStorage.setItem("totalCost", cartCost + product.price);
} else {
    localStorage.setItem("totalCost", product.price);
}
    
}



onLoadCartNumbers();
 
