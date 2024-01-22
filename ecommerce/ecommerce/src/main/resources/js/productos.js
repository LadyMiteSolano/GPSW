let cartItems = [];
let total = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');

    // Limpiar el carrito
    cartList.innerHTML = '';

    // Actualizar la lista de productos en el carrito
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Calcular el total
    total = cartItems.reduce((acc, item) => acc + item.price, 0);

    // Actualizar el total en la interfaz
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
