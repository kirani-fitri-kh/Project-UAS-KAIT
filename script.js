// ── DATA PRODUK (25 produk) ──
const products = [
  { id:1,  name:"Tas Kulit Premium",      cat:"Tas",        price:285000, oldPrice:350000, emoji:"👜", desc:"Tas kulit sintetis berkualitas tinggi dengan jahitan rapi. Cocok untuk sehari-hari maupun acara formal. Tersedia dalam 3 warna.", stock:15, badge:"Best Seller" },
  { id:2,  name:"Dompet Pria Minimalis",  cat:"Aksesori",   price:125000, oldPrice:null,   emoji:"👝", desc:"Dompet slim dari bahan kulit PU. Muat 8 kartu dan uang kertas. Desain minimalis yang elegan.", stock:22, badge:null },
  { id:3,  name:"Jam Tangan Kasual",      cat:"Jam",        price:320000, oldPrice:400000, emoji:"⌚", desc:"Jam tangan dengan dial minimalis dan tali kanvas yang nyaman. Water resistant 3ATM. Baterai tahan hingga 2 tahun.", stock:8, badge:"Sale" },
  { id:4,  name:"Kacamata Hitam UV400",   cat:"Aksesori",   price:185000, oldPrice:null,   emoji:"🕶️", desc:"Kacamata hitam dengan lensa UV400 untuk perlindungan maksimal. Frame ringan dan kuat, cocok untuk aktivitas outdoor.", stock:30, badge:null },
  { id:5,  name:"Topi Bucket Kasual",     cat:"Topi",       price:95000,  oldPrice:null,   emoji:"🧢", desc:"Topi bucket dari bahan canvas berkualitas. Tersedia dalam berbagai warna cerah dan pastel. One size fits all.", stock:45, badge:"New" },
  { id:6,  name:"Sepatu Sneakers Putih",  cat:"Sepatu",     price:450000, oldPrice:520000, emoji:"👟", desc:"Sneakers kasual dengan sol karet anti-slip. Bahan canvas yang breathable dan nyaman untuk pemakaian seharian.", stock:12, badge:"Sale" },
  { id:7,  name:"Kaos Polos Premium",     cat:"Pakaian",    price:85000,  oldPrice:null,   emoji:"👕", desc:"Kaos polos dari bahan cotton combed 30s. Soft dan nyaman dipakai. Tersedia S, M, L, XL dalam berbagai warna.", stock:100, badge:null },
  { id:8,  name:"Celana Chino Pria",      cat:"Pakaian",    price:235000, oldPrice:280000, emoji:"👖", desc:"Celana chino slim fit dari bahan stretch yang nyaman. Cocok untuk casual maupun semi-formal. Tersedia warna beige, navy, olive.", stock:18, badge:"Sale" },
  { id:9,  name:"Kemeja Flannel Kotak",   cat:"Pakaian",    price:175000, oldPrice:null,   emoji:"🎽", desc:"Kemeja flannel motif kotak klasik. Bahan tebal dan hangat, cocok untuk musim hujan. Tersedia ukuran M, L, XL.", stock:25, badge:null },
  { id:10, name:"Sabuk Kulit Formal",     cat:"Aksesori",   price:110000, oldPrice:null,   emoji:"🪢", desc:"Sabuk kulit dengan gesper silver klasik. Cocok untuk celana formal maupun casual. Ukuran adjustable 110-130cm.", stock:35, badge:null },
  { id:11, name:"Parfum Unisex 50ml",     cat:"Perawatan",  price:210000, oldPrice:260000, emoji:"🧴", desc:"Parfum dengan aroma segar dan tahan lama hingga 8 jam. Cocok untuk pria dan wanita. Botol kaca elegan.", stock:20, badge:"Sale" },
  { id:12, name:"Skincare Day Cream",     cat:"Perawatan",  price:165000, oldPrice:null,   emoji:"🫙", desc:"Krim siang dengan SPF 30 untuk melindungi kulit dari paparan sinar UV. Formula ringan, tidak berminyak.", stock:28, badge:"New" },
  { id:13, name:"Lip Balm Madu Alami",    cat:"Perawatan",  price:45000,  oldPrice:null,   emoji:"💋", desc:"Lip balm dengan kandungan madu dan vitamin E. Melembapkan bibir kering dalam 3 menit. No paraben.", stock:60, badge:null },
  { id:14, name:"Sarung Tangan Kulit",    cat:"Aksesori",   price:145000, oldPrice:180000, emoji:"🧤", desc:"Sarung tangan kulit sintetis hangat dengan lapisan fleece di dalam. Layar sentuh compatible. Ukuran S/M/L.", stock:14, badge:"Sale" },
  { id:15, name:"Kaos Kaki Set 5 pasang", cat:"Pakaian",    price:75000,  oldPrice:null,   emoji:"🧦", desc:"Set kaos kaki cotton 5 pasang dengan berbagai motif lucu. Bahan breathable, anti bau. Ukuran 38-43.", stock:50, badge:"Best Seller" },
  { id:16, name:"Tote Bag Kanvas",        cat:"Tas",        price:120000, oldPrice:null,   emoji:"🎒", desc:"Tote bag kanvas tebal dengan printing custom. Kapasitas besar 15L, tahan beban hingga 5kg.", stock:32, badge:"New" },
  { id:17, name:"Dompet Wanita Kecil",    cat:"Tas",        price:155000, oldPrice:190000, emoji:"👛", desc:"Dompet wanita kecil dengan berbagai slot kartu dan zipper coin. Material PU leather berkualitas.", stock:16, badge:"Sale" },
  { id:18, name:"Celana Jogger Sport",    cat:"Pakaian",    price:195000, oldPrice:null,   emoji:"🩳", desc:"Celana jogger dari bahan fleece ringan. Cocok untuk olahraga maupun bersantai. Tersedia M, L, XL.", stock:22, badge:null },
  { id:19, name:"Ikat Pinggang Anyam",    cat:"Aksesori",   price:85000,  oldPrice:null,   emoji:"🪡", desc:"Ikat pinggang anyaman kain dengan gesper kuningan vintage. Cocok untuk gaya boho dan casual.", stock:18, badge:"New" },
  { id:20, name:"Sepatu Sandal Gunung",   cat:"Sepatu",     price:265000, oldPrice:320000, emoji:"🥾", desc:"Sandal gunung dengan sol Vibram anti-slip. Cocok untuk tracking ringan hingga sedang. Tali adjustable.", stock:9, badge:"Sale" },
  { id:21, name:"Mug Keramik Custom",     cat:"Rumah",      price:85000,  oldPrice:null,   emoji:"☕", desc:"Mug keramik 350ml dengan printing heat-resistant. Cocok untuk kopi, teh, atau minuman hangat lainnya.", stock:40, badge:null },
  { id:22, name:"Bantal Ergonomis",       cat:"Rumah",      price:225000, oldPrice:270000, emoji:"🛏️", desc:"Bantal memory foam dengan cover katun yang lembut. Mendukung postur tidur yang lebih baik.", stock:11, badge:"Sale" },
  { id:23, name:"Tumbler Stainless 500ml",cat:"Rumah",      price:175000, oldPrice:null,   emoji:"🧃", desc:"Tumbler stainless double-wall vacuum insulated. Menjaga minuman panas/dingin hingga 12 jam.", stock:27, badge:"Best Seller" },
  { id:24, name:"Notebook Hard Cover",    cat:"Alat Tulis", price:65000,  oldPrice:null,   emoji:"📓", desc:"Buku catatan A5 dengan cover hard. 200 halaman kertas dot grid. Cocok untuk journaling dan sketsa.", stock:55, badge:null },
  { id:25, name:"Gelang Macrame",         cat:"Aksesori",   price:55000,  oldPrice:null,   emoji:"📿", desc:"Gelang macrame handmade dengan manik-manik. Tersedia berbagai warna. Adjustable size untuk semua ukuran.", stock:70, badge:"New" },
];

// ── STATE ──
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let currentFilter = 'Semua';
let currentProduct = null;
let modalQty = 1;
let selectedPayment = 'cod';

// ── NOMOR WA TOKO (ganti dengan nomor asli) ──
const TOKO_WA = '6281220505562';

// ── INIT ──
function init() {
  renderFeatured();
  renderCategories();
  renderProducts('Semua');
  updateCartCount();
  renderCheckoutItems();
}

// ── VIEW NAVIGATION ──
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  const nb = document.getElementById('nav-' + name);
  if (nb) nb.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'keranjang') renderCart();
  if (name === 'checkout') renderCheckoutItems();
}

// ── TOAST ──
function showToast(msg) {
  const wrap = document.getElementById('toast-wrap');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

// ── PROMO POPUP ──
function closePromo() {
  document.getElementById('promo-overlay').classList.remove('open');
}
function copyPromo() {
  navigator.clipboard.writeText('GRATIS-ONGKIR').catch(() => {});
  showToast('✅ Kode promo disalin!');
  closePromo();
}

// ── PRODUCT RENDERING ──
function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function productCard(p) {
  return `<div class="product-card" onclick="openModal(${p.id})">
    ${p.badge ? `<span class="product-badge ${p.badge === 'Sale' ? 'sale' : ''}">${p.badge}</span>` : ''}
    <div class="product-img">${p.emoji}</div>
    <div class="product-info">
      <div class="product-cat">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div>
        ${p.oldPrice ? `<span class="product-price-old">${formatRp(p.oldPrice)}</span>` : ''}
        <span class="product-price">${formatRp(p.price)}</span>
      </div>
      <button class="product-add" id="btn-${p.id}" onclick="event.stopPropagation();quickAdd(${p.id})">+ Tambah</button>
    </div>
  </div>`;
}

function renderFeatured() {
  const featured = products.filter(p => p.badge).slice(0, 4);
  document.getElementById('featured-grid').innerHTML = featured.map(productCard).join('');
}

function renderCategories() {
  const cats = ['Semua', ...new Set(products.map(p => p.cat))];
  document.getElementById('categories-wrap').innerHTML = cats.map(c =>
    `<button class="cat-pill ${c === currentFilter ? 'active' : ''}" onclick="filterCat('${c}')">${c}</button>`
  ).join('');
}

function renderProducts(cat) {
  const q = document.getElementById('search-input')?.value.toLowerCase() || '';
  let filtered = products;
  if (cat !== 'Semua') filtered = filtered.filter(p => p.cat === cat);
  if (q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
  const grid = document.getElementById('product-grid');
  const empty = document.getElementById('empty-search');
  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.add('show');
  } else {
    grid.innerHTML = filtered.map(productCard).join('');
    empty.classList.remove('show');
  }
  const sub = document.getElementById('katalog-sub');
  if (sub) sub.textContent = `Menampilkan ${filtered.length} produk${cat !== 'Semua' ? ' · ' + cat : ''}`;
}

function filterCat(cat) {
  currentFilter = cat;
  renderCategories();
  renderProducts(cat);
}

function filterProducts() {
  renderProducts(currentFilter);
}

// ── QUICK ADD ──
function quickAdd(id) {
  const p = products.find(x => x.id === id);
  addToCart(p, 1);
  const btn = document.getElementById('btn-' + id);
  if (btn) {
    btn.textContent = '✓ Ditambahkan!';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = '+ Tambah'; btn.classList.remove('added'); }, 1800);
  }
}

// ── MODAL ──
function openModal(id) {
  currentProduct = products.find(p => p.id === id);
  modalQty = 1;
  document.getElementById('modal-img').textContent = currentProduct.emoji;
  document.getElementById('modal-cat').textContent = currentProduct.cat;
  document.getElementById('modal-name').textContent = currentProduct.name;
  document.getElementById('modal-price').textContent = formatRp(currentProduct.price);
  document.getElementById('modal-desc').textContent = currentProduct.desc;
  document.getElementById('modal-qty').textContent = 1;
  document.getElementById('modal-stock').textContent = `Stok: ${currentProduct.stock}`;
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('product-modal')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function changeQty(d) {
  modalQty = Math.max(1, Math.min(currentProduct.stock, modalQty + d));
  document.getElementById('modal-qty').textContent = modalQty;
}

function addToCartFromModal() {
  addToCart(currentProduct, modalQty);
  closeModalDirect();
}

// ── CART ──
function addToCart(p, qty) {
  const ex = cart.find(x => x.id === p.id);
  if (ex) ex.qty = Math.min(p.stock, ex.qty + qty);
  else cart.push({ id: p.id, qty });
  saveCart();
  updateCartCount();
  showToast(`🛒 ${p.name} ditambahkan ke keranjang!`);
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const total = cart.reduce((a, x) => a + x.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function renderCart() {
  const el = document.getElementById('cart-view-content');
  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty">
      <div class="emoji">🛒</div>
      <p>Keranjangmu masih kosong.<br>Yuk mulai belanja!</p>
      <button class="btn-primary" style="margin-top:20px;background:var(--navy);color:var(--white)" onclick="showView('katalog')">Lihat Produk</button>
    </div>`;
    return;
  }
  const subtotal = cart.reduce((a, x) => {
    const p = products.find(pp => pp.id === x.id);
    return a + (p ? p.price * x.qty : 0);
  }, 0);

  el.innerHTML = `
    <div class="cart-list">
      ${cart.map(x => {
        const p = products.find(pp => pp.id === x.id);
        if (!p) return '';
        return `<div class="cart-item">
          <div class="cart-item-img">${p.emoji}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${formatRp(p.price)} × ${x.qty} = ${formatRp(p.price * x.qty)}</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty(${p.id}, -1)">−</button>
            <span class="qty-num">${x.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${p.id}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})">Hapus</button>
        </div>`;
      }).join('')}
    </div>
    <div class="cart-summary">
      <div class="cart-row"><span>Subtotal (${cart.reduce((a, x) => a + x.qty, 0)} item)</span><span>${formatRp(subtotal)}</span></div>
      <div class="cart-row"><span>Ongkos Kirim</span><span style="color:var(--txt-lite)">Ditentukan admin</span></div>
      <div class="cart-row total"><span>Total</span><span>${formatRp(subtotal)}</span></div>
      <button class="btn-checkout" onclick="showView('checkout')">Lanjut Checkout →</button>
    </div>`;
}

function updateCartQty(id, d) {
  const p = products.find(pp => pp.id === id);
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, Math.min(p.stock, item.qty + d));
  saveCart();
  updateCartCount();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
}

// ── CHECKOUT ──
function selectPayment(el, val) {
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = val;
}

function renderCheckoutItems() {
  const list = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('co-subtotal');
  const totalEl = document.getElementById('co-total');
  if (!list) return;
  let subtotal = 0;
  list.innerHTML = cart.map(x => {
    const p = products.find(pp => pp.id === x.id);
    if (!p) return '';
    subtotal += p.price * x.qty;
    return `<div class="order-preview-item"><span>${p.name} ×${x.qty}</span><span>${formatRp(p.price * x.qty)}</span></div>`;
  }).join('') || '<div style="color:var(--txt-lite);font-size:.88rem">Keranjang kosong</div>';
  if (subtotalEl) subtotalEl.textContent = formatRp(subtotal);
  if (totalEl) totalEl.textContent = formatRp(subtotal);
}

// ── WHATSAPP ──
function sendToWhatsApp() {
  const nama    = document.getElementById('co-nama').value.trim();
  const wa      = document.getElementById('co-wa').value.trim();
  const alamat  = document.getElementById('co-alamat').value.trim();
  const catatan = document.getElementById('co-catatan').value.trim();

  if (!nama || !wa || !alamat) {
    showToast('⚠️ Lengkapi nama, nomor WA, dan alamat terlebih dahulu!');
    return;
  }
  if (cart.length === 0) {
    showToast('⚠️ Keranjang masih kosong!');
    return;
  }

  const paymentLabel = {
    cod: 'COD (Bayar di Tempat)',
    bca: 'Transfer BCA',
    mandiri: 'Transfer Mandiri'
  }[selectedPayment];

  let itemsText = '';
  let subtotal = 0;
  cart.forEach(x => {
    const p = products.find(pp => pp.id === x.id);
    if (p) {
      itemsText += `  • ${p.name} ×${x.qty} = ${formatRp(p.price * x.qty)}\n`;
      subtotal += p.price * x.qty;
    }
  });

  const msg =
`🛍️ *PESANAN BARU — TokoKu*

👤 *Data Pembeli:*
Nama    : ${nama}
No. WA  : ${wa}
Alamat  : ${alamat}${catatan ? '\nCatatan : ' + catatan : ''}

📦 *Daftar Pesanan:*
${itemsText}
💰 *Subtotal:* ${formatRp(subtotal)}
💳 *Pembayaran:* ${paymentLabel}

Mohon dikonfirmasi ketersediaan produk dan total ongkos kirim. Terima kasih! 🙏`;

  const url = `https://wa.me/${TOKO_WA}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ── START ──
init();
