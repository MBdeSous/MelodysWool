        let cart = [];
        function addToCart(itemName, price) {
            cart.push({ name: itemName, price: price });
            updateCart();
        }
        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            cartItems.textContent = `${cart.length} items`;
            console.log('Cart:', cart); // For debugging
        }
