// ==========================================================================
// Café Dé Floraa - Interactive Storefront Application
// WhatsApp Ordering Number: +91 9625244683
// Reservation & Direct Dial: +91 98785 23603
// ==========================================================================

const FLORAA_CONFIG = {
  restaurantName: "Café Dé Floraa",
  location: "66 Feet Road, Phase 2, Urban Estate, Jalandhar, Punjab 144005",
  reservationPhone: "+919878523603",
  reservationPhoneDisplay: "+91 98785 23603",
  whatsAppOrderNumber: "919625244683",
  email: "cafedefloraajalandhar@gmail.com",
  instagramUrl: "https://www.instagram.com/cafedefloraajalandhar?exln=MWZqNzM3MHU0N2ltaw==",
  zomatoUrl: "https://zomato.onelink.me/xqzv/9n7pk4g9"
};

// Application State
const state = {
  cart: {},
  activeCategory: 'all',
  activeDiet: 'all', // 'all', 'veg', 'non-veg', 'chef'
  searchQuery: '',
  selectedDeliveryZone: DELIVERY_ZONES[0],
  activeHeroVideo: 'media/hero-dreamy.mp4'
};

// LocalStorage helpers
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('floraa_cart');
    if (saved) state.cart = JSON.parse(saved);
  } catch (e) {
    console.error('Error loading cart', e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('floraa_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.error('Error saving cart', e);
  }
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  initHeaderScroll();
  renderCategories();
  renderMenuItems();
  renderSignatureBeverages();
  renderDeliveryZonesSelect();
  updateCartUI();
  initHeroVideoControls();
});

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Hero Video Switcher
function initHeroVideoControls() {
  const heroVideo = document.getElementById('heroVideoPlayer');
  const tabs = document.querySelectorAll('.video-tab-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const videoSrc = tab.dataset.video;
      if (videoSrc && heroVideo) {
        heroVideo.src = videoSrc;
        heroVideo.play().catch(() => {});
      }
    });
  });
}

// Render Menu Category Filter Pills
function renderCategories() {
  const scrollContainer = document.getElementById('categoryScrollContainer');
  if (!scrollContainer) return;

  scrollContainer.innerHTML = MENU_CATEGORIES.map(cat => `
    <button class="cat-pill-btn ${cat.id === state.activeCategory ? 'active' : ''}" 
            onclick="setCategory('${cat.id}')">
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

function setCategory(catId) {
  state.activeCategory = catId;
  renderCategories();
  renderMenuItems();
  
  // Smooth scroll into menu view if triggered from elsewhere
  const menuSec = document.getElementById('menu-section');
  if (menuSec && window.scrollY < menuSec.offsetTop - 120) {
    menuSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function setDietFilter(diet) {
  state.activeDiet = diet;
  document.querySelectorAll('.diet-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.diet === diet);
  });
  renderMenuItems();
}

function handleSearchInput(e) {
  state.searchQuery = e.target.value.toLowerCase().trim();
  renderMenuItems();
}

// Filter menu items based on state
function getFilteredItems() {
  return MENU_ITEMS.filter(item => {
    // Category match
    if (state.activeCategory === 'bestsellers') {
      if (!item.isSignature) return false;
    } else if (state.activeCategory !== 'all') {
      if (item.category !== state.activeCategory) return false;
    }

    // Diet match
    if (state.activeDiet === 'veg' && item.type !== 'veg') return false;
    if (state.activeDiet === 'non-veg' && item.type !== 'non-veg') return false;
    if (state.activeDiet === 'chef' && !item.isSignature) return false;

    // Search query match
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTags = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchTags) return false;
    }

    return true;
  });
}

// Render Menu Items Grid
function renderMenuItems() {
  const grid = document.getElementById('menuItemsGrid');
  if (!grid) return;

  const items = getFilteredItems();

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 0.8rem;">🌸</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-botanical);">No delicate flavors found</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-top: 0.4rem;">Try searching for something else like "pizza", "coffee", "momos" or "cheesecake".</p>
        <button onclick="setCategory('all'); setDietFilter('all'); document.getElementById('menuSearchInput').value='';" 
                class="btn-reservation" style="margin-top: 1.25rem;">
          View All Garden Delights
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => {
    const inCartQty = state.cart[item.id] ? state.cart[item.id].qty : 0;
    const tagLabel = item.tags && item.tags.length > 0 ? item.tags[0] : (item.isSignature ? 'Signature' : '');

    return `
      <article class="menu-card" data-id="${item.id}">
        <div class="menu-card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="diet-dot-badge ${item.type}" title="${item.type === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'}"></div>
          ${tagLabel ? `<div class="menu-card-badge">${tagLabel}</div>` : ''}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h4 class="menu-card-name">${item.name}</h4>
            <div class="menu-card-price">${item.priceStr}</div>
          </div>
          <p class="menu-card-desc">${item.description}</p>
          <div class="menu-card-footer">
            ${inCartQty > 0 ? `
              <div class="card-qty-controller">
                <button class="card-qty-btn" onclick="updateItemQuantity('${item.id}', -1)" title="Decrease">−</button>
                <span class="card-qty-number">${inCartQty} in cart</span>
                <button class="card-qty-btn" onclick="updateItemQuantity('${item.id}', 1)" title="Increase">+</button>
              </div>
            ` : `
              <button class="btn-add-cart" onclick="addItemToCart('${item.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                <span>Add to Order</span>
              </button>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Render "Something Lovely is Brewing" Showcase
function renderSignatureBeverages() {
  const container = document.getElementById('signatureDrinksGrid');
  if (!container) return;

  const drinks = [
    {
      id: 'f-3',
      name: 'Signature Lotus Biscoff Shake',
      price: '₹388.70',
      tag: 'Viral Specialty',
      desc: 'Thick creamy speculoos blend garnished with real imported Lotus Biscoff biscuit and rich caramel drizzle.',
      image: 'media/biscoff-shake-glass.jpg'
    },
    {
      id: 'c-1',
      name: 'Handcrafted Cappuccino',
      price: '₹279.50',
      tag: 'House Espresso',
      desc: 'Rich 9-bar espresso extraction harmonized with velvety microfoam and artisanal rosetta latte art.',
      image: 'media/cappuccino-cookie.jpg'
    },
    {
      id: 'f-6',
      name: 'Fresh Watermelon Mojito',
      price: '₹344.50',
      tag: 'Cooler Favorite',
      desc: 'Fresh crimson watermelon muddled with cool garden mint, sparkling soda and sweet citrus.',
      image: 'media/strawberry-mocktail.jpg'
    },
    {
      id: 'f-9',
      name: 'Perfect Green Apple Cooler',
      price: '₹344.50',
      tag: 'Botanical Sip',
      desc: '100% fresh fruit zest, crisp green apple, fresh mint leaves, lime and refreshing bubbles.',
      image: 'media/green-apple-cooler.jpg'
    }
  ];

  container.innerHTML = drinks.map(d => `
    <div class="drink-card">
      <div class="drink-card-media">
        <img src="${d.image}" alt="${d.name}" loading="lazy" />
        <span class="drink-badge-tag">${d.tag}</span>
      </div>
      <div class="drink-card-body">
        <div class="drink-card-top">
          <h4 class="drink-card-title">${d.name}</h4>
          <span class="drink-card-price">${d.price}</span>
        </div>
        <p class="drink-card-desc">${d.desc}</p>
        <div class="drink-card-action">
          <button class="btn-add-cart" onclick="addItemToCart('${d.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            <span>Add to Order</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Cart Mechanics
function addItemToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (state.cart[itemId]) {
    state.cart[itemId].qty += 1;
  } else {
    state.cart[itemId] = { item, qty: 1 };
  }

  saveCartToStorage();
  updateCartUI();
  renderMenuItems();
  animateCartBump();
}

function updateItemQuantity(itemId, delta) {
  if (!state.cart[itemId]) return;

  state.cart[itemId].qty += delta;
  if (state.cart[itemId].qty <= 0) {
    delete state.cart[itemId];
  }

  saveCartToStorage();
  updateCartUI();
  renderMenuItems();
}

function animateCartBump() {
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.classList.add('bump');
    setTimeout(() => b.classList.remove('bump'), 300);
  });
}

function updateCartUI() {
  const cartKeys = Object.keys(state.cart);
  const totalCount = cartKeys.reduce((acc, k) => acc + state.cart[k].qty, 0);

  // Update badges
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  // Render items inside drawer
  const container = document.getElementById('cartItemsContainer');
  const footerSummary = document.getElementById('cartFooterSummary');
  if (!container || !footerSummary) return;

  if (totalCount === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">☕</div>
        <h4>Your basket is empty</h4>
        <p>Explore our handcrafted menu and add your favorite garden dishes & drinks.</p>
        <button onclick="closeCartDrawer(); setCategory('all');" class="btn-reservation">
          Browse Menu
        </button>
      </div>
    `;
    footerSummary.style.display = 'none';
    return;
  }

  footerSummary.style.display = 'block';

  let subtotal = 0;
  container.innerHTML = cartKeys.map(k => {
    const entry = state.cart[k];
    const itemTotal = entry.item.price * entry.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item-row">
        <img src="${entry.item.image}" alt="${entry.item.name}" class="cart-item-thumb" />
        <div class="cart-item-info">
          <div class="cart-item-name">${entry.item.name}</div>
          <div class="cart-item-price">₹${entry.item.price.toFixed(2)} × ${entry.qty} = ₹${itemTotal.toFixed(2)}</div>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn-sm" onclick="updateItemQuantity('${k}', -1)">−</button>
          <span class="cart-item-qty">${entry.qty}</span>
          <button class="cart-qty-btn-sm" onclick="updateItemQuantity('${k}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  // Calculate delivery fee based on active zone
  const deliveryFee = state.selectedDeliveryZone ? state.selectedDeliveryZone.fee : 0;
  const grandTotal = subtotal + deliveryFee;

  document.getElementById('cartSubtotalAmount').textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById('cartDeliveryFeeAmount').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`;
  document.getElementById('cartGrandTotalAmount').textContent = `₹${grandTotal.toFixed(2)}`;
}

// Drawer Controls
function openCartDrawer() {
  document.getElementById('cartDrawerOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawerOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Delivery Zones
function renderDeliveryZonesSelect() {
  const select = document.getElementById('checkoutDeliveryZone');
  if (!select) return;

  select.innerHTML = DELIVERY_ZONES.map(z => `
    <option value="${z.id}">${z.name} ${z.fee === 0 ? '(Free Delivery)' : `(+₹${z.fee})`}</option>
  `).join('');

  select.addEventListener('change', (e) => {
    const zone = DELIVERY_ZONES.find(z => z.id === e.target.value);
    if (zone) {
      state.selectedDeliveryZone = zone;
      updateCartUI();
    }
  });
}

// Checkout Modal
function openCheckoutModal() {
  const cartKeys = Object.keys(state.cart);
  if (cartKeys.length === 0) {
    alert("Please add at least one delicious item to your cart before checkout.");
    return;
  }

  closeCartDrawer();
  document.getElementById('checkoutModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Update order brief in modal
  let subtotal = 0;
  cartKeys.forEach(k => {
    subtotal += state.cart[k].item.price * state.cart[k].qty;
  });
  const deliveryFee = state.selectedDeliveryZone ? state.selectedDeliveryZone.fee : 0;
  const total = subtotal + deliveryFee;

  const briefEl = document.getElementById('checkoutOrderSummaryBrief');
  if (briefEl) {
    briefEl.innerHTML = `
      <strong>Order Total: ₹${total.toFixed(2)}</strong> (${cartKeys.length} items to ${state.selectedDeliveryZone.name})
    `;
  }
}

function closeCheckoutModal() {
  document.getElementById('checkoutModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// User Requirement:
// "after adding food to cart when customer clicks on checkout they are asked there name phone no mode of payment and adress obviously only to places where they can deliver and after licking ok they are directly sent to whatsapp no>:+91 9625244683 and there entire order summary is given and sent"
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const zoneId = document.getElementById('checkoutDeliveryZone').value;
  const address = document.getElementById('custAddress').value.trim();
  const notes = document.getElementById('custNotes').value.trim();
  const paymentMode = document.querySelector('input[name="paymentMode"]:checked').value;

  if (!name || !phone || !address) {
    alert("Please fill in your Name, Phone Number, and Complete Address.");
    return;
  }

  // Validate phone format (Indian 10-digit)
  const phoneClean = phone.replace(/[^0-9]/g, '');
  if (phoneClean.length < 10) {
    alert("Please enter a valid 10-digit phone number so we can confirm your order.");
    return;
  }

  const zone = DELIVERY_ZONES.find(z => z.id === zoneId) || state.selectedDeliveryZone;

  // Compute Order Items & Totals
  const cartKeys = Object.keys(state.cart);
  let subtotal = 0;
  let itemsListText = '';

  cartKeys.forEach(k => {
    const entry = state.cart[k];
    const itemTotal = entry.item.price * entry.qty;
    subtotal += itemTotal;
    itemsListText += `▫️ ${entry.qty}x ${entry.item.name} - ₹${itemTotal.toFixed(2)}\n`;
  });

  const deliveryFee = zone.fee;
  const grandTotal = subtotal + deliveryFee;
  const orderId = 'FLR-' + Math.floor(100000 + Math.random() * 900000);

  // Format WhatsApp message with floral garden warmth
  const message = `🌸 *NEW ORDER - CAFÉ DÉ FLORAA* 🌸
*Order ID:* #${orderId}
----------------------------------------
👤 *Customer Name:* ${name}
📞 *Phone Number:* ${phone}
📍 *Delivery Zone:* ${zone.name}
🏠 *Full Address:* ${address}
💳 *Payment Mode:* ${paymentMode}
${notes ? `📝 *Special Instructions:* ${notes}\n` : ''}----------------------------------------
📋 *ITEMS ORDERED:*
${itemsListText}
----------------------------------------
💵 *Subtotal:* ₹${subtotal.toFixed(2)}
🛵 *Delivery Charges:* ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`}
🌟 *Grand Total:* ₹${grandTotal.toFixed(2)}
----------------------------------------
🌿 *Restaurant Contact:* +91 98785 23603
📍 *Café Dé Floraa:* 66 Feet Rd, Phase 2, Urban Estate, Jalandhar

_Please confirm my order and share the expected delivery time!_`;

  // Encode message and open WhatsApp to +91 9625244683
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${FLORAA_CONFIG.whatsAppOrderNumber}?text=${encodedMsg}`;

  // Clear cart & close modal
  state.cart = {};
  saveCartToStorage();
  updateCartUI();
  renderMenuItems();
  closeCheckoutModal();

  // Show friendly notification and redirect
  alert(`Thank you, ${name}! Your order #${orderId} is prepared. Opening WhatsApp now to deliver your order summary to Café Dé Floraa...`);
  window.open(whatsappUrl, '_blank');
}

// Mobile Menu Toggle
function toggleMobileNav() {
  const links = document.querySelector('.nav-links');
  if (links) {
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '80px';
      links.style.left = '0';
      links.style.width = '100%';
      links.style.background = '#FFFFFF';
      links.style.padding = '1.5rem';
      links.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      links.style.zIndex = '105';
    }
  }
}
