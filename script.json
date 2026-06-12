// Menyimpan data keranjang belanja
let cart = [];

// Kunci untuk menyimpan cart di localStorage
const CART_KEY = 'maroon_sweets_cart';

// Muat cart dari localStorage saat skrip di-load (jika ada)
(function loadCart() {
    try {
        const saved = localStorage.getItem(CART_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) cart = parsed;
        }
    } catch (e) {
        console.warn('Gagal memuat cart dari localStorage:', e);
    }
})();

// Simpan cart ke localStorage setelah perubahan
function saveCart() {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
        console.warn('Gagal menyimpan cart ke localStorage:', e);
    }
}

// Fungsi untuk membuka/tutup sidebar keranjang
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
}

// Fungsi menambah item ke keranjang
function addToCart(name, price) {
    // Validasi input dan pastikan price adalah number
    const validPrice = Number(price) || 0;

    // Cek apakah produk sudah ada di keranjang
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
    } else {
        cart.push({ name: name, price: validPrice, quantity: 1 });
    }

    updateCartUI();
    saveCart();
}

// Fungsi update tampilan keranjang
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    // Pastikan elemen-elemen ada di DOM sebelum melanjutkan
    if (!cartItemsContainer || !cartCount || !cartTotal) {
        console.warn('Elemen cart tidak ditemukan di DOM.');
        return;
    }

    // Update jumlah icon total barang
    let totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    cartCount.innerText = totalItems;

    // Bersihkan kontainer
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Keranjang masih kosong.</p>';
        cartTotal.innerText = 'Rp 0';
        return;
    }

    // Tampilkan item di keranjang
    let totalPrice = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <small>Rp ${item.price.toLocaleString('id-ID')} x ${item.quantity}</small>
            </div>
            <strong>Rp ${itemTotal.toLocaleString('id-ID')}</strong>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update total harga keseluruhan
    cartTotal.innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}

// Fungsi checkout via WhatsApp
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang kamu masih kosong nih!");
        return;
    }

    let nomorWA = "6281234567890"; // Ganti dengan nomor WhatsApp tokomu (awali dengan 62)
    let pesan = "Halo Maroon Sweets, saya mau order:\n\n";

    let total = 0;
    cart.forEach(item => {
        pesan += `- ${item.name} (${item.quantity}x) = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
        total += item.price * item.quantity;
    });

    pesan += `\n*Total Akhir: Rp ${total.toLocaleString('id-ID')}*`;

    // Encode teks agar aman untuk URL
    let urlWA = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodeURIComponent(pesan)}`;

    // Buka chat WhatsApp di tab baru
    window.open(urlWA, '_blank');
}

// Inisialisasi UI saat file skrip dimuat
updateCartUI();