let cart = [];
let total = 0;

function showCategory(category) {
    document.getElementById('books').style.display = (category === 'books') ? 'grid' : 'none';
    document.getElementById('manga').style.display = (category === 'manga') ? 'grid' : 'none';
    document.getElementById('category-title').innerText = (category === 'books') ? 'Книги' : 'Манґа';
    
    document.getElementById('btn-books').classList.toggle('active', category === 'books');
    document.getElementById('btn-manga').classList.toggle('active', category === 'manga');
}

// Функція відкриття/закриття кошика
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// Додавання товару
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    // Оновлюємо лічильник
    document.getElementById('cart-count').innerText = cart.length;
    
    // Оновлюємо список товарів у вікні
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartItems.innerHTML = "Кошик порожній";
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price} грн</span>
            </div>
        `).join('');
    }
    
    totalPrice.innerText = total;
}

// Закриття вікна при кліку поза ним
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) modal.style.display = "none";
}