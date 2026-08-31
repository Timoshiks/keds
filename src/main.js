import './index.css';
import { MOCK_PRODUCTS, BRANDS, POPULAR_MODELS } from './data/products.js';

const BELARUS_POST_BRANCHES = [
  // МИНСК
  { id: 'bp-minsk-1', provider: 'belpost', providerName: 'Белпочта', code: '220050', address: 'пр-т Независимости, 10', city: 'Минск', hours: 'Пн-Вс 08:00–21:00', lat: 53.8978, lng: 27.5502 },
  { id: 'bp-minsk-2', provider: 'belpost', providerName: 'Белпочта', code: '220004', address: 'ул. Немига, 8', city: 'Минск', hours: 'Пн-Сб 09:00–20:00', lat: 53.9038, lng: 27.5518 },
  { id: 'ep-minsk-1', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 48', address: 'ул. Немига, 3', city: 'Минск', hours: 'Ежедневно 09:00–21:00', lat: 53.9042, lng: 27.5531 },
  { id: 'ep-minsk-2', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 12', address: 'пр-т Победителей, 9', city: 'Минск', hours: 'Ежедневно 09:00–21:00', lat: 53.9085, lng: 27.5480 },

  // ГОМЕЛЬ
  { id: 'bp-gomel-1', provider: 'belpost', providerName: 'Белпочта', code: '246050', address: 'пр-т Ленина, 1', city: 'Гомель', hours: 'Пн-Сб 08:00–19:00', lat: 52.4251, lng: 31.0143 },
  { id: 'bp-gomel-2', provider: 'belpost', providerName: 'Белпочта', code: '246000', address: 'ул. Советская, 8', city: 'Гомель', hours: 'Пн-Сб 08:00–20:00', lat: 52.4285, lng: 31.0112 },
  { id: 'ep-gomel-1', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 77', address: 'ул. Советская, 60', city: 'Гомель', hours: 'Ежедневно 09:00–21:00', lat: 52.4389, lng: 31.0021 },
  { id: 'ep-gomel-2', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 105', address: 'ул. Барыкина, 80', city: 'Гомель', hours: 'Ежедневно 09:00–21:00', lat: 52.4190, lng: 30.9650 },

  // МОЗЫРЬ
  { id: 'bp-mozyr-1', provider: 'belpost', providerName: 'Белпочта', code: '247760', address: 'ул. Советская, 120', city: 'Мозырь', hours: 'Пн-Сб 08:00–20:00, Вс 09:00–17:00', lat: 52.0496, lng: 29.2543 },
  { id: 'bp-mozyr-2', provider: 'belpost', providerName: 'Белпочта', code: '247762', address: 'б-р Дружбы, 14', city: 'Мозырь', hours: 'Пн-Сб 09:00–19:00', lat: 52.0298, lng: 29.2415 },
  { id: 'ep-mozyr-1', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 112', address: 'б-р Юности, 32', city: 'Мозырь', hours: 'Ежедневно 09:00–21:00', lat: 52.0325, lng: 29.2310 },

  // ГРОДНО
  { id: 'bp-grodno-1', provider: 'belpost', providerName: 'Белпочта', code: '230023', address: 'ул. Карла Маркса, 29', city: 'Гродно', hours: 'Пн-Сб 08:00–20:00', lat: 53.6778, lng: 23.8321 },
  { id: 'ep-grodno-1', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 35', address: 'ул. Советская, 18', city: 'Гродно', hours: 'Ежедневно 09:00–21:00', lat: 53.6812, lng: 23.8315 },

  // БРЕСТ
  { id: 'bp-brest-1', provider: 'belpost', providerName: 'Белпочта', code: '224005', address: 'ул. Ленина, 32', city: 'Брест', hours: 'Пн-Сб 08:00–20:00', lat: 52.0935, lng: 23.6872 },
  { id: 'ep-brest-1', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 54', address: 'ул. Советская, 85', city: 'Брест', hours: 'Ежедневно 09:00–21:00', lat: 52.0901, lng: 23.6948 },

  // ВИТЕБСК
  { id: 'bp-vitebsk-1', provider: 'belpost', providerName: 'Белпочта', code: '210015', address: 'пр-т Черняховского, 6', city: 'Витебск', hours: 'Пн-Сб 08:00–20:00', lat: 55.1823, lng: 30.2031 },
  { id: 'ep-vitebsk-1', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 88', address: 'ул. Замковая, 4', city: 'Витебск', hours: 'Ежедневно 09:00–21:00', lat: 55.1915, lng: 30.2045 },

  // МОГИЛЕВ
  { id: 'bp-mogilev-1', provider: 'belpost', providerName: 'Белпочта', code: '212030', address: 'Первомайская ул., 28', city: 'Могилев', hours: 'Пн-Сб 08:00–20:00', lat: 53.9012, lng: 30.3389 },
  { id: 'ep-mogilev-1', provider: 'evropost', providerName: 'Европочта', code: 'ОПС № 63', address: 'ул. Космонавтов, 27', city: 'Могилев', hours: 'Ежедневно 09:00–21:00', lat: 53.9065, lng: 30.3150 },
];

class KedsApp {
  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    this.products = MOCK_PRODUCTS;
    this.searchQuery = urlParams.get('search') || '';
    this.isLiveSearchOpen = urlParams.get('liveSearch') === 'true';
    this.isFilterSheetOpen = urlParams.get('filterSheet') === 'true';
    this.activeTab = urlParams.get('tab') || 'catalog';
    this.deliveryType = 'post'; // 'post' or 'pickup'
    this.orderId = urlParams.get('orderId') || null;

    // Payment Gateway states
    this.isPaymentModalOpen = urlParams.get('payment') === 'true';
    this.paymentMethod = urlParams.get('paymentMethod') || 'card'; // 'card', 'sbp', 'upon_receipt'
    this.isPaymentProcessing = false;
    this.cardNumber = '';
    this.cardExpiry = '';
    this.cardCvc = '';
    this.cardHolder = '';

    // Filter states
    this.selectedBrands = urlParams.get('brands') ? urlParams.get('brands').split(',') : [];
    if (urlParams.get('brand') && urlParams.get('brand') !== 'Все' && !this.selectedBrands.includes(urlParams.get('brand'))) {
      this.selectedBrands.push(urlParams.get('brand'));
    }

    this.selectedFilterSize = urlParams.get('size') || 'Все';
    this.minPrice = parseInt(urlParams.get('minPrice') || '10000', 10);
    this.maxPrice = parseInt(urlParams.get('maxPrice') || '100000', 10);
    this.selectedSort = urlParams.get('sort') || 'default';

    // Temporary Filter Sheet draft states
    this.draftBrands = [...this.selectedBrands];
    this.draftSize = this.selectedFilterSize;
    this.draftMinPrice = this.minPrice;
    this.draftMaxPrice = this.maxPrice;
    this.draftSort = this.selectedSort;

    // Post Branch Belarus Dataset & Filter States
    this.selectedBranch = BELARUS_POST_BRANCHES[8]; // Default Mozyr Belposhta 247760
    this.highlightedBranch = BELARUS_POST_BRANCHES[8];
    this.isBranchDrawerOpen = urlParams.get('drawer') === 'true';
    this.drawerMode = urlParams.get('mode') || 'map';
    this.providerFilter = urlParams.get('provider') || 'all';
    this.branchSearchQuery = '';

    // Mock initial cart items (empty if ?empty=true)
    this.cartItems = urlParams.get('empty') === 'true' ? [] : [
      {
        product: this.products[0], // Travis Scott Canary
        selectedSize: '42 EU',
        quantity: 1,
      },
      {
        product: this.products[5], // Asics Gel-Kayano 14
        selectedSize: '44 EU',
        quantity: 1,
      }
    ];

    const openId = urlParams.get('open');
    const autoProduct = openId ? this.products.find(p => p.id === openId) : null;

    this.activeProduct = autoProduct || null;
    this.selectedSize = autoProduct ? (autoProduct.sizes.find(s => s.inStock)?.eu || '42 EU') : null;
    this.activeSlide = 0;

    this.appContainer = document.getElementById('app');

    // Splash Screen state
    this.isSplashVisible = urlParams.get('splash') !== 'false';
    this.isSplashFading = false;

    if (this.isSplashVisible) {
      setTimeout(() => {
        this.isSplashFading = true;
        const splashEl = document.getElementById('splash-screen');
        if (splashEl) {
          splashEl.style.opacity = '0';
        }
        setTimeout(() => {
          this.isSplashVisible = false;
          const splashElRem = document.getElementById('splash-screen');
          if (splashElRem) {
            splashElRem.remove();
          }
        }, 500);
      }, 900);
    }

    this.init();
  }

  init() {
    this.render();
  }

  hasActiveFilters() {
    return (
      this.selectedBrands.length > 0 ||
      this.selectedFilterSize !== 'Все' ||
      this.minPrice > 10000 ||
      this.maxPrice < 100000 ||
      this.selectedSort !== 'default'
    );
  }

  getFilteredProducts() {
    let result = [...this.products];

    // Multi-brand filter
    if (this.selectedBrands.length > 0) {
      result = result.filter(p => this.selectedBrands.some(b => b.toLowerCase() === p.brand.toLowerCase()));
    }

    // Size filter
    if (this.selectedFilterSize !== 'Все') {
      result = result.filter(p => p.sizes.some(s => s.eu === this.selectedFilterSize && s.inStock));
    }

    // Dual Range Price filter
    result = result.filter(p => p.price >= this.minPrice && p.price <= this.maxPrice);

    // Search Query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.trim().toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        p.size.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (this.selectedSort === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (this.selectedSort === 'newest') {
      result.sort((a, b) => parseInt(b.dateCategory || '0', 10) - parseInt(a.dateCategory || '0', 10));
    }

    return result;
  }

  openFilterSheet() {
    this.draftBrands = [...this.selectedBrands];
    this.draftSize = this.selectedFilterSize;
    this.draftMinPrice = this.minPrice;
    this.draftMaxPrice = this.maxPrice;
    this.draftSort = this.selectedSort;
    this.isFilterSheetOpen = true;
    this.updateUrl();
    this.render();
  }

  closeFilterSheet() {
    this.isFilterSheetOpen = false;
    this.updateUrl();
    this.render();
  }

  applyFilterSheet() {
    this.selectedBrands = [...this.draftBrands];
    this.selectedFilterSize = this.draftSize;
    this.minPrice = this.draftMinPrice;
    this.maxPrice = this.draftMaxPrice;
    this.selectedSort = this.draftSort;
    this.isFilterSheetOpen = false;
    this.updateUrl();
    this.render();
  }

  resetAllFilters() {
    this.selectedBrands = [];
    this.selectedFilterSize = 'Все';
    this.minPrice = 10000;
    this.maxPrice = 100000;
    this.selectedSort = 'default';
    this.draftBrands = [];
    this.draftSize = 'Все';
    this.draftMinPrice = 10000;
    this.draftMaxPrice = 100000;
    this.draftSort = 'default';
    this.searchQuery = '';
    this.isFilterSheetOpen = false;
    this.updateUrl();
    this.render();
  }

  setSearchQuery(query) {
    this.searchQuery = query;
    this.updateUrl();
    this.render();
  }

  openLiveSearch() {
    this.isLiveSearchOpen = true;
    this.updateUrl();
    this.render();
    const input = document.getElementById('live-search-input');
    if (input) input.focus();
  }

  closeLiveSearch() {
    this.isLiveSearchOpen = false;
    this.updateUrl();
    this.render();
  }

  setTab(tab) {
    this.activeTab = tab;
    this.updateUrl();
    this.render();
  }

  openProductSheet(product) {
    this.activeProduct = product;
    const defaultSizeObj = product.sizes.find(s => s.inStock) || product.sizes[0];
    this.selectedSize = defaultSizeObj ? defaultSizeObj.eu : '42 EU';
    this.activeSlide = 0;
    this.updateUrl();
    this.render();
  }

  closeProductSheet() {
    this.activeProduct = null;
    this.selectedSize = null;
    this.activeSlide = 0;
    this.updateUrl();
    this.render();
  }

  addToCart() {
    if (this.activeProduct) {
      this.cartItems.push({
        product: this.activeProduct,
        selectedSize: this.selectedSize || '42 EU',
        quantity: 1,
      });
    }
    this.closeProductSheet();
  }

  removeFromCart(index) {
    this.cartItems.splice(index, 1);
    this.render();
  }

  openPaymentGateway() {
    this.orderId = `TR-${Math.floor(10000 + Math.random() * 90000)}`;
    this.isPaymentModalOpen = true;
    this.isPaymentProcessing = false;
    this.updateUrl();
    this.render();
  }

  closePaymentGateway() {
    this.isPaymentModalOpen = false;
    this.isPaymentProcessing = false;
    this.updateUrl();
    this.render();
  }

  processPaymentSubmit() {
    if (this.isPaymentProcessing) return;
    this.isPaymentProcessing = true;
    this.render();

    setTimeout(() => {
      this.isPaymentProcessing = false;
      this.isPaymentModalOpen = false;
      this.cartItems = [];
      this.activeTab = 'success';
      this.updateUrl();
      this.render();
    }, 1500);
  }

  getCardBrandLogo(number) {
    const clean = number.replace(/\D/g, '');
    if (clean.startsWith('220')) return 'МИР';
    if (clean.startsWith('4')) return 'VISA';
    if (clean.startsWith('5')) return 'MC';
    return '';
  }

  formatCardNumber(val) {
    const clean = val.replace(/\D/g, '').slice(0, 16);
    const parts = [];
    for (let i = 0; i < clean.length; i += 4) {
      parts.push(clean.substring(i, i + 4));
    }
    return parts.join(' ');
  }

  formatCardExpiry(val) {
    const clean = val.replace(/\D/g, '').slice(0, 4);
    if (clean.length >= 3) {
      return `${clean.slice(0, 2)}/${clean.slice(2)}`;
    }
    return clean;
  }

  updateUrl() {
    const params = new URLSearchParams();
    if (this.activeTab !== 'catalog') params.set('tab', this.activeTab);
    if (this.selectedBrands.length > 0) params.set('brands', this.selectedBrands.join(','));
    if (this.selectedFilterSize !== 'Все') params.set('size', this.selectedFilterSize);
    if (this.selectedSort !== 'default') params.set('sort', this.selectedSort);
    if (this.minPrice > 10000) params.set('minPrice', this.minPrice.toString());
    if (this.maxPrice < 100000) params.set('maxPrice', this.maxPrice.toString());
    if (this.searchQuery) params.set('search', this.searchQuery);
    if (this.isLiveSearchOpen) params.set('liveSearch', 'true');
    if (this.isFilterSheetOpen) params.set('filterSheet', 'true');
    if (this.isPaymentModalOpen) params.set('payment', 'true');
    if (this.paymentMethod !== 'card') params.set('paymentMethod', this.paymentMethod);
    if (this.activeProduct) params.set('open', this.activeProduct.id);
    if (this.orderId) params.set('orderId', this.orderId);
    if (this.isBranchDrawerOpen) params.set('drawer', 'true');
    if (this.drawerMode !== 'map') params.set('mode', this.drawerMode);
    if (this.providerFilter !== 'all') params.set('provider', this.providerFilter);
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }

  renderSplashScreen() {
    if (!this.isSplashVisible) return '';
    return `
      <!-- ULTRA-MINIMALIST TELEGRAM MINI APP SPLASH SCREEN -->
      <div id="splash-screen" class="splash-screen-container font-body" style="position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; background-color: #000000; user-select: none; pointer-events: none; opacity: ${this.isSplashFading ? '0' : '1'}; transition: opacity 500ms ease-out;">
        <!-- CENTER LOGO -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="color: #FF4800; font-size: 20px; font-weight: 700; letter-spacing: -0.05em; font-family: var(--font-display);">///</span>
          <span style="font-family: var(--font-display); font-size: 20px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.1em; text-transform: uppercase;">
            TREAD
          </span>
        </div>
      </div>
    `;
  }

  render() {
    const cartCount = this.cartItems.length;
    const hasFiltersActive = this.hasActiveFilters();

    this.appContainer.innerHTML = `
      ${this.renderSplashScreen()}
      <div class="mobile-container ${this.activeTab === 'cart' || this.activeTab === 'checkout' || this.activeTab === 'success' || this.activeTab === 'about' ? 'cart-mode about-mode' : ''}">
        <!-- HEADER (Only rendered on catalog tab) -->
        ${this.activeTab === 'catalog' ? `
          <header class="app-header">
            <div class="header-top">
              <div class="brand-logo">
                <svg viewBox="0 0 160 32" fill="none" class="logo-svg">
                  <g fill="#FF5500">
                    <rect x="2" y="6" width="5" height="20" rx="1.5" />
                    <rect x="10" y="3" width="5" height="26" rx="1.5" />
                    <rect x="18" y="8" width="5" height="16" rx="1.5" />
                  </g>
                  <text x="34" y="23" fill="#F5F5F5" font-family="Unbounded, sans-serif" font-size="18" font-weight="800" letter-spacing="0.04em">TREAD</text>
                </svg>
              </div>
            </div>

            <!-- SEARCH ROW WITH COMPACT FILTER BUTTON ON RIGHT -->
            <div class="search-row-group">
              <div class="search-box" id="header-search-trigger">
                <svg class="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="8.5" cy="8.5" r="5.5"/>
                  <path d="M12.5 12.5L16.5 16.5" stroke-linecap="round"/>
                </svg>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="Поиск модели или артикула" 
                  value="${this.escapeHtml(this.searchQuery)}"
                  readonly
                />
              </div>

              <!-- COMPACT FILTER BUTTON WITH MICRO ORANGE DOT -->
              <button id="open-filter-sheet-btn" class="compact-filter-trigger-btn font-body" aria-label="Фильтры">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"/>
                  <line x1="4" y1="10" x2="4" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12" y2="3"/>
                  <line x1="20" y1="21" x2="20" y2="16"/>
                  <line x1="20" y1="12" x2="20" y2="3"/>
                  <line x1="1" y1="14" x2="7" y2="14"/>
                  <line x1="9" y1="8" x2="15" y2="8"/>
                  <line x1="17" y1="16" x2="23" y2="16"/>
                </svg>
                ${hasFiltersActive ? `<span class="filter-micro-dot"></span>` : ''}
              </button>
            </div>

            <!-- QUICK BRAND SCROLL TABS -->
            <div class="brand-chips-wrapper font-body">
              <div class="brand-chips">
                ${BRANDS.map(brand => {
                  const isSelected = brand === 'Все' ? this.selectedBrands.length === 0 : this.selectedBrands.includes(brand);
                  return `
                    <button 
                      class="goat-chip ${isSelected ? 'active' : ''}" 
                      data-brand="${brand}"
                    >
                      ${brand}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </header>
        ` : ''}

        <!-- MAIN VIEW CONTENT -->
        <main class="${this.activeTab === 'catalog' ? 'catalog-content' : 'cart-main-content'}">
          ${this.activeTab === 'catalog' ? this.renderCatalogView() : ''}
          ${this.activeTab === 'cart' ? this.renderGoatCartView() : ''}
          ${this.activeTab === 'checkout' ? this.renderGoatOrderReviewView() : ''}
          ${this.activeTab === 'success' ? this.renderSuccessView() : ''}
          ${this.activeTab === 'about' ? this.renderAboutView() : ''}
          ${this.activeTab === 'search' || this.activeTab === 'profile' ? this.renderPlaceholderView() : ''}
        </main>

        <!-- PRODUCT BOTTOM SHEET MODAL -->
        ${this.activeProduct ? this.renderProductSheet() : ''}

        <!-- FULLSCREEN FILTER SHEET DRAWER -->
        ${this.isFilterSheetOpen ? this.renderFilterSheet() : ''}

        <!-- FULLSCREEN LIVE SEARCH OVERLAY -->
        ${this.isLiveSearchOpen ? this.renderLiveSearchOverlay() : ''}

        <!-- PAYMENT GATEWAY MODAL VIEW STRICTLY PER REF_PAYMENT -->
        ${this.isPaymentModalOpen ? this.renderPaymentGatewayView() : ''}

        <!-- CLEANED FLOATING HOTBAR CAPSULE (4 ITEMS: CATALOG, SEARCH, CART, ABOUT) -->
        ${(this.activeTab !== 'cart' && this.activeTab !== 'checkout' && this.activeTab !== 'success') ? `
          <nav class="floating-island-capsule font-body">
            <button class="island-nav-item ${this.activeTab === 'catalog' ? 'active' : ''}" data-tab="catalog" aria-label="Каталог">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5"/>
              </svg>
            </button>
            <button class="island-nav-item" id="hotbar-search-btn" aria-label="Поиск">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="7"/>
                <path d="M16 16L20 20"/>
              </svg>
            </button>
            <button class="island-nav-item ${this.activeTab === 'cart' ? 'active' : ''}" data-tab="cart" aria-label="Корзина">
              <div class="icon-wrapper font-body">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"/>
                  <path d="M3 6H21"/>
                  <path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"/>
                </svg>
                ${cartCount > 0 ? `<span class="micro-badge tabular-nums font-body">${cartCount}</span>` : ''}
              </div>
            </button>
            <button class="island-nav-item ${this.activeTab === 'about' ? 'active' : ''}" data-tab="about" aria-label="О приложении">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </button>
          </nav>
        ` : ''}
      </div>
    `;

    this.rebindEvents();
    if (this.activeTab === 'checkout' && this.isBranchDrawerOpen && this.drawerMode === 'map') {
      this.initYandexMap();
    }
  }

  renderGoatOrderReviewView() {
    const totalCount = this.cartItems.length;
    const totalPrice = this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const totalPriceFormatted = new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';
    const mainItem = this.cartItems[0] || {
      product: this.products[0],
      selectedSize: '42 EU',
    };

    const filteredBranches = BELARUS_POST_BRANCHES.filter(b => {
      const matchesProvider = this.providerFilter === 'all' || b.provider === this.providerFilter;
      const q = this.branchSearchQuery.toLowerCase().trim();
      const matchesQuery = !q || b.code.toLowerCase().includes(q) || b.address.toLowerCase().includes(q) || b.city.toLowerCase().includes(q);
      return matchesProvider && matchesQuery;
    });

    return `
        <!-- ЕДИНАЯ ШАПКА ПОЛНОЭКРАННОЙ СТРАНИЦЫ -->
        <div class="flex items-center gap-3 px-4 pt-4 pb-4 border-b border-white/[0.06]" style="display: flex; align-items: center; gap: 12px; padding: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
          <button id="back-to-cart-btn" class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors" style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: #FFFFFF; background: transparent; cursor: pointer; flex-shrink: 0;" aria-label="Назад">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <h1 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">
            Оформление заказа
          </h1>
        </div>

        <!-- MAIN SCROLLABLE ORDER REVIEW CONTENT LOCALIZED STRICTLY PER USER PROMPT -->
        <form id="checkout-form" class="checkout-form font-body" style="gap: 0; padding-bottom: 220px;">
          
          <!-- TOP PRODUCT SUMMARY CARD (TITLE, SIZE, CONDITION, BOX + RIGHT IMAGE) -->
          <div class="goat-order-product-card font-body">
            <div class="product-card-left font-body">
              <h2 class="product-card-title font-body">${this.escapeHtml(mainItem.product.name)}</h2>
              <div class="product-card-spec font-body">Размер: ${this.escapeHtml(mainItem.selectedSize)}</div>
              <div class="product-card-spec font-body">Состояние: Новые (в коробке)</div>
              <div class="product-card-spec font-body">Коробка: Оригинальная</div>
            </div>

            <div class="product-card-right-photo font-body">
              <img src="${mainItem.product.image}" alt="${this.escapeHtml(mainItem.product.name)}" class="product-card-img" />
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="goat-section-divider"></div>

          <!-- SHIPPING SECTION WITH TABS ('Доставка' / 'Самовывоз') & ACTIVE SHIPPING CARD -->
          <div class="goat-shipping-section font-body">
            <div class="shipping-section-top font-body">
              <div class="shipping-tabs-row font-body">
                <button 
                  type="button" 
                  class="ship-tab-rect ${this.deliveryType === 'post' ? 'active' : ''}" 
                  data-type="post"
                >
                  Доставка
                </button>
                <button 
                  type="button" 
                  class="ship-tab-rect ${this.deliveryType === 'pickup' ? 'active' : ''}" 
                  data-type="pickup"
                >
                  Самовывоз
                </button>
              </div>

              <div id="open-branch-drawer-btn" class="ship-address-link font-body">
                <span>Выбрать адрес доставки</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </div>

            <!-- ACTIVE SHIPPING METHOD CARD -->
            ${this.deliveryType === 'post' ? `
              <div class="goat-active-ship-card font-body">
                <div class="ship-card-label font-body">Стандартная доставка почтой</div>
                <div class="ship-card-price font-display tabular-nums">${totalPriceFormatted}</div>
                <div class="ship-card-sub font-body">+Бесплатная экспресс-доставка</div>
              </div>
            ` : `
              <div class="goat-active-ship-card font-body">
                <div class="ship-card-label font-body">Самовывоз из шоурума</div>
                <div class="ship-card-price font-display tabular-nums">0 ₽</div>
                <div class="ship-card-sub font-body">ул. Ленина, 10</div>
              </div>
            `}

            <!-- SUBTEXT & VERIFICATION DISCLAIMER -->
            <div class="goat-verification-line font-body">
              <span>Пара проходит проверку подлинности перед отправкой.</span>
              <a href="#" class="pricing-details-link font-body">Детали</a>
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="goat-section-divider"></div>

          <!-- PAYMENT METHOD ROW -->
          <div class="goat-payment-row-link font-body" id="payment-method-row-trigger">
            <span class="payment-row-title font-body">Способ оплаты</span>
            <div class="payment-row-right font-body">
              <span class="apple-pay-mock-badge font-display">💳 СБП / Карта</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="goat-section-divider"></div>

          <!-- TOTAL FINANCIAL BREAKDOWN BLOCK -->
          <div class="goat-total-breakdown-block font-body">
            <div class="total-main-row font-body">
              <span class="total-main-label font-body">Итого к оплате</span>
              <span class="total-main-val font-display tabular-nums">${totalPriceFormatted}</span>
            </div>
            <div class="total-sub-row font-body">
              <span class="total-sub-label font-body">Сумма заказа</span>
              <span class="total-sub-val font-body tabular-nums">${totalPriceFormatted}</span>
            </div>
          </div>

          <!-- FIXED CTA & DISCLAIMER FOOTER STRICTLY PER PROMPT -->
          <div class="goat-review-sticky-footer font-body">
            <button type="submit" class="goat-large-white-cta-btn font-body">
              ОПЛАТИТЬ ЧЕРЕЗ TREAD PAY
            </button>

            <p class="goat-disclaimer-text font-body">
              Оформляя заказ, вы соглашаетесь с условиями сервиса и правилами возврата.
            </p>
          </div>

        </form>
      </div>

      <!-- FULLSCREEN GOAT REFERENCE POST BRANCH DRAWER -->
      ${this.isBranchDrawerOpen ? `
        <div class="goat-location-drawer-fullscreen font-body">
          <div class="goat-location-header font-body">
            <div style="display: flex; align-items: center; gap: 12px;">
              <button id="close-branch-drawer-btn" class="checkout-back-btn" aria-label="Назад" style="position: static;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 12H5"/>
                  <path d="M12 19l-7-7 7-7"/>
                </svg>
              </button>

              <h2 class="goat-location-title font-body">Выбор отделения почты</h2>
            </div>

            <button id="toggle-drawer-mode-btn" class="goat-location-mode-btn font-body">
              ${this.drawerMode === 'map' ? 'Список' : 'Карта'}
            </button>
          </div>

          ${this.drawerMode === 'map' ? `
            <div class="map-view-fullscreen-container" style="position: relative; width: 100%; height: 100%; flex: 1;">
              <div class="goat-floating-overlay-group font-body">
                <div class="goat-floating-search-bar font-body">
                  <input 
                    type="text" 
                    id="branch-search-input"
                    class="goat-floating-search-input font-body" 
                    placeholder="Поиск по городу, ул. или индексу..." 
                    value="${this.escapeHtml(this.branchSearchQuery)}"
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="locate-icon">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                </div>

                <div class="service-chips-row font-body">
                  <button type="button" class="service-chip-btn ${this.providerFilter === 'all' ? 'active' : ''}" data-provider="all">Все</button>
                  <button type="button" class="service-chip-btn ${this.providerFilter === 'belpost' ? 'active' : ''}" data-provider="belpost">Белпочта</button>
                  <button type="button" class="service-chip-btn ${this.providerFilter === 'evropost' ? 'active' : ''}" data-provider="evropost">Европочта</button>
                </div>
              </div>

              <div id="ymaps-container" class="ymaps-dark-canvas" style="position: absolute; inset: 0; width: 100%; height: 100%; background-color: #0A0A0A; z-index: 0;"></div>

              ${this.highlightedBranch ? `
                <div class="goat-floating-branch-card font-body">
                  <div class="branch-card-info">
                    <div class="branch-card-header-line">
                      <span class="mono-provider-badge">
                        ${this.escapeHtml(this.highlightedBranch.providerName)}
                      </span>
                      <span class="branch-code-text">${this.escapeHtml(this.highlightedBranch.code)}</span>
                    </div>

                    <div class="branch-card-address font-body">г. ${this.escapeHtml(this.highlightedBranch.city)}, ${this.escapeHtml(this.highlightedBranch.address)}</div>
                    <div class="branch-card-hours font-body">Режим работы: ${this.escapeHtml(this.highlightedBranch.hours)}</div>
                  </div>

                  <button id="confirm-selected-branch-btn" class="goat-checkout-cta-btn font-body">
                    ВЫБРАТЬ ЭТО ОТДЕЛЕНИЕ
                  </button>
                </div>
              ` : ''}
            </div>
          ` : `
            <div class="list-view-container font-body">
              <input 
                type="text" 
                id="branch-search-input"
                class="goat-underline-input font-body" 
                placeholder="Поиск по городу, адресу или коду отделения" 
                value="${this.escapeHtml(this.branchSearchQuery)}"
                style="margin-bottom: 12px;"
              />

              <div class="service-chips-row font-body" style="margin-bottom: 16px;">
                <button type="button" class="service-chip-btn ${this.providerFilter === 'all' ? 'active' : ''}" data-provider="all">Все</button>
                <button type="button" class="service-chip-btn ${this.providerFilter === 'belpost' ? 'active' : ''}" data-provider="belpost">Белпочта</button>
                <button type="button" class="service-chip-btn ${this.providerFilter === 'evropost' ? 'active' : ''}" data-provider="evropost">Европочта</button>
              </div>

              <div class="goat-flat-branches-list font-body">
                ${filteredBranches.length > 0 ? filteredBranches.map(b => {
                  const isSelected = this.selectedBranch && this.selectedBranch.id === b.id;
                  return `
                    <div class="goat-flat-branch-item font-body" data-id="${b.id}">
                      <div class="branch-text-info">
                        <div class="branch-title ${isSelected ? 'active-orange' : ''}">
                          <span class="mono-provider-badge">${this.escapeHtml(b.providerName)}</span>
                          ${this.escapeHtml(b.code)} — г. ${this.escapeHtml(b.city)}, ${this.escapeHtml(b.address)}
                        </div>
                        <div class="branch-hours">${this.escapeHtml(b.hours)}</div>
                      </div>
                      ${isSelected ? `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ` : ''}
                    </div>
                  `;
                }).join('') : `
                  <div class="no-branches-found font-body">Отделений по данному запросу не найдено</div>
                `}
              </div>
            </div>
          `}
        </div>
      ` : ''}
    `;
  }

  renderPaymentGatewayView() {
    const totalPrice = this.cartItems.length > 0
      ? this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      : 81400;
    const totalPriceFormatted = new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';
    const cardBrandLogo = this.getCardBrandLogo(this.cardNumber);

    return `
      <div class="payment-gateway-overlay font-body">
        <div class="payment-gateway-modal font-body">
          <!-- STANDARD BOTTOM SHEET TOP BLOCK -->
          <div class="w-9 h-1 rounded-full bg-white/20 mx-auto mt-2.5 mb-1" style="width: 36px; height: 4px; border-radius: 9999px; background-color: rgba(255,255,255,0.20); margin: 10px auto 4px auto;"></div>

          <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
            <h2 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">Оплата заказа</h2>
            <button id="close-payment-modal-btn" class="sheet-close-btn" style="background: transparent; border: none; color: #737373; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; transition: color 0.15s ease;" aria-label="Закрыть">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div class="payment-bank-summary font-body">
            <div class="payment-amount-val font-display tabular-nums">${totalPriceFormatted}</div>
            <div class="payment-order-subtext font-body">
              Заказ #${this.orderId || 'TR-84920'} • TREAD Store
            </div>
          </div>

          <div class="payment-methods-tabs font-body">
            <button 
              type="button" 
              class="payment-tab-btn font-body ${this.paymentMethod === 'card' ? 'active' : ''}" 
              data-pm="card"
            >
              Банковская карта
            </button>
            <button 
              type="button" 
              class="payment-tab-btn font-body ${this.paymentMethod === 'sbp' ? 'active' : ''}" 
              data-pm="sbp"
            >
              СБП (QR)
            </button>
            <button 
              type="button" 
              class="payment-tab-btn font-body ${this.paymentMethod === 'upon_receipt' ? 'active' : ''}" 
              data-pm="upon_receipt"
            >
              При получении
            </button>
          </div>

          <div class="payment-tab-body font-body">
            ${this.paymentMethod === 'card' ? `
              <form id="payment-card-form" class="payment-card-form font-body">
                <div class="payment-field-group font-body">
                  <div class="payment-input-wrap font-body">
                    <input 
                      type="text" 
                      id="card-number-input"
                      class="goat-underline-input font-body tabular-nums" 
                      placeholder="0000 0000 0000 0000" 
                      value="${this.cardNumber}"
                      maxlength="19"
                      required
                    />
                    ${cardBrandLogo ? `
                      <span class="card-brand-detected-badge font-display">${cardBrandLogo}</span>
                    ` : ''}
                  </div>
                </div>

                <div class="payment-row-2col font-body">
                  <div class="payment-field-group font-body">
                    <input 
                      type="text" 
                      id="card-expiry-input"
                      class="goat-underline-input font-body tabular-nums" 
                      placeholder="Срок (MM/YY)" 
                      value="${this.cardExpiry}"
                      maxlength="5"
                      required
                    />
                  </div>

                  <div class="payment-field-group font-body">
                    <input 
                      type="password" 
                      id="card-cvc-input"
                      class="goat-underline-input font-body tabular-nums" 
                      placeholder="CVC / CVV" 
                      value="${this.cardCvc}"
                      maxlength="3"
                      required
                    />
                  </div>
                </div>

                <div class="payment-field-group font-body">
                  <input 
                    type="text" 
                    id="card-holder-input"
                    class="goat-underline-input font-body" 
                    placeholder="ИМЯ ВЛАДЕЛЬЦА (CARDHOLDER NAME)" 
                    value="${this.cardHolder}"
                    style="text-transform: uppercase;"
                    required
                  />
                </div>

                <div class="payment-footer-bar font-body">
                  <button 
                    type="submit" 
                    id="submit-payment-btn"
                    class="goat-checkout-cta-btn font-body ${this.isPaymentProcessing ? 'loading' : ''}"
                    ${this.isPaymentProcessing ? 'disabled' : ''}
                  >
                    ${this.isPaymentProcessing ? `
                      <div class="payment-spinner-loader font-body">
                        <span class="spinner-circle"></span>
                        Обработка платежа...
                      </div>
                    ` : `
                      ОПЛАТИТЬ ${totalPriceFormatted}
                    `}
                  </button>
                </div>
              </form>
            ` : ''}

            ${this.paymentMethod === 'sbp' ? `
              <div class="sbp-qr-container font-body">
                <div class="sbp-qr-box font-body">
                  <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                    <rect x="5" y="5" width="3" height="3" fill="#FFFFFF"/>
                    <rect x="16" y="5" width="3" height="3" fill="#FFFFFF"/>
                    <rect x="5" y="16" width="3" height="3" fill="#FFFFFF"/>
                    <path d="M14 14h3v3h-3zM17 17h4v4h-4zM14 19h3v2h-3z"/>
                  </svg>
                </div>
                <div class="sbp-instructions-text font-body">
                  Отсканируйте QR-код в приложении вашего банка для мгновенной оплаты без ввода карты СБП
                </div>
                <button 
                  type="button" 
                  id="submit-sbp-payment-btn"
                  class="goat-checkout-cta-btn font-body ${this.isPaymentProcessing ? 'loading' : ''}"
                  style="margin-top: 16px;"
                  ${this.isPaymentProcessing ? 'disabled' : ''}
                >
                  ${this.isPaymentProcessing ? `
                    <div class="payment-spinner-loader font-body">
                      <span class="spinner-circle"></span>
                      Проверка оплаты...
                    </div>
                  ` : `
                    ПОДТВЕРДИТЬ ОПЛАТУ ${totalPriceFormatted}
                  `}
                </button>
              </div>
            ` : ''}

            ${this.paymentMethod === 'upon_receipt' ? `
              <div class="upon-receipt-container font-body">
                <div class="upon-icon-wrap font-body">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                </div>
                <div class="upon-title font-display">Оплата при получении</div>
                <div class="upon-subtext font-body">
                  Вы сможете оплатить заказ наличными или банковской картой курьеру при вручении либо в пункте выдачи почты после проверки пары.
                </div>
                <button 
                  type="button" 
                  id="submit-receipt-payment-btn"
                  class="goat-checkout-cta-btn font-body ${this.isPaymentProcessing ? 'loading' : ''}"
                  style="margin-top: 20px;"
                  ${this.isPaymentProcessing ? 'disabled' : ''}
                >
                  ${this.isPaymentProcessing ? `
                    <div class="payment-spinner-loader font-body">
                      <span class="spinner-circle"></span>
                      Оформление...
                    </div>
                  ` : `
                    ПОДТВЕРДИТЬ ЗАКАЗ НА ${totalPriceFormatted}
                  `}
                </button>
              </div>
            ` : ''}
          </div>

        </div>
      </div>
    `;
  }

  renderAboutView() {
    const aboutItems = [
      { id: 'faq', title: 'Частые вопросы (FAQ)' },
      { id: 'privacy', title: 'Политика конфиденциальности' },
      { id: 'terms', title: 'Пользовательское соглашение' },
      { id: 'telegram', title: 'Telegram-канал' },
      { id: 'support', title: 'Связаться с поддержкой' },
    ];

    return `
      <div class="about-screen-container font-body" style="min-height: 100vh; background-color: #000000; color: #FFFFFF; display: flex; flex-direction: column;">
        <!-- ЕДИНАЯ ШАПКА ПОЛНОЭКРАННОЙ СТРАНИЦЫ -->
        <div class="flex items-center gap-3 px-4 pt-4 pb-4 border-b border-white/[0.06]" style="display: flex; align-items: center; gap: 12px; padding: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
          <button id="about-back-btn" class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors" style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: #FFFFFF; background: transparent; cursor: pointer; flex-shrink: 0;" aria-label="Назад">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <h1 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">
            О приложении
          </h1>
        </div>

        <!-- Список пунктов меню (Navigation List) -->
        <div class="about-nav-list font-body" style="display: flex; flex-direction: column; width: 100%;">
          ${aboutItems.map(item => `
            <div class="about-nav-item" data-id="${item.id}" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); cursor: pointer; transition: background-color 0.15s ease;">
              <span class="text-xs font-normal text-[#E5E5E5]" style="font-size: 12px; font-weight: 400; color: #E5E5E5; font-family: var(--font-body);">
                ${item.title}
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          `).join('')}
        </div>

        <!-- Подвал экрана -->
        <div style="margin-top: auto; padding-bottom: 96px; padding-top: 32px; text-align: center;">
          <span class="text-[10px] font-normal tracking-wider text-[#525252]" style="font-size: 10px; font-weight: 400; letter-spacing: 0.05em; color: #525252; font-family: var(--font-body);">
            Версия 1.0.0
          </span>
        </div>
      </div>
    `;
  }

  renderFilterSheet() {
    const minPercent = ((this.draftMinPrice - 10000) / 90000) * 100;
    const maxPercent = ((this.draftMaxPrice - 10000) / 90000) * 100;

    const brandList = ['Nike', 'Jordan', 'New Balance', 'Adidas', 'ASICS'];
    const sizeList = ['39 EU', '40 EU', '41 EU', '42 EU', '42.5 EU', '43 EU', '44 EU', '45 EU'];
    
    const sortList = [
      { id: 'default', label: 'По популярности' },
      { id: 'newest', label: 'Новинки' },
      { id: 'price_asc', label: 'Сначала дешевле' },
      { id: 'price_desc', label: 'Сначала дороже' }
    ];

    return `
      <div id="filter-sheet-overlay" class="sheet-overlay font-body"></div>
      <div class="filter-sheet-drawer font-body">
        <!-- STANDARD BOTTOM SHEET TOP BLOCK -->
        <div class="w-9 h-1 rounded-full bg-white/20 mx-auto mt-2.5 mb-1" style="width: 36px; height: 4px; border-radius: 9999px; background-color: rgba(255,255,255,0.20); margin: 10px auto 4px auto;"></div>

        <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
          <h2 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">Фильтры</h2>
          <button id="close-filter-sheet-btn" class="sheet-close-btn" style="background: transparent; border: none; color: #737373; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; transition: color 0.15s ease;" aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="filter-sheet-body no-scrollbar font-body">
          <div class="filter-section font-body">
            <h3 class="filter-section-title font-display">Цена</h3>
            
            <div class="price-inputs-row-clean font-body">
              <div class="clean-underline-price-box font-body">
                <span class="clean-price-prefix">от</span>
                <input 
                  type="number" 
                  id="draft-min-price-num"
                  class="clean-underline-price-input font-body tabular-nums" 
                  value="${this.draftMinPrice}" 
                  step="1000"
                />
                <span class="clean-price-suffix">₽</span>
              </div>

              <div class="price-input-separator font-body">—</div>

              <div class="clean-underline-price-box font-body">
                <span class="clean-price-prefix">до</span>
                <input 
                  type="number" 
                  id="draft-max-price-num"
                  class="clean-underline-price-input font-body tabular-nums" 
                  value="${this.draftMaxPrice}" 
                  step="1000"
                />
                <span class="clean-price-suffix">₽</span>
              </div>
            </div>

            <div class="slider-wrapper" style="margin-top: 16px;">
              <div class="slider-track-bg"></div>
              <div class="slider-track-highlight" style="left: ${minPercent}%; right: ${100 - maxPercent}%;"></div>
              <input 
                type="range" 
                id="sheet-range-min"
                min="10000" 
                max="100000" 
                step="1000" 
                value="${this.draftMinPrice}" 
                class="range-slider-input" 
              />
              <input 
                type="range" 
                id="sheet-range-max"
                min="10000" 
                max="100000" 
                step="1000" 
                value="${this.draftMaxPrice}" 
                class="range-slider-input" 
              />
            </div>
          </div>

          <div class="filter-section font-body">
            <div class="filter-section-header-line">
              <h3 class="filter-section-title font-display">Бренд</h3>
              ${this.draftBrands.length > 0 ? `<span class="filter-count-badge">${this.draftBrands.length}</span>` : ''}
            </div>

            <div class="checkboxes-list-group font-body">
              ${brandList.map(brand => {
                const isChecked = this.draftBrands.includes(brand);
                return `
                  <div class="checkbox-item-row font-body" data-brand-toggle="${brand}">
                    <span class="checkbox-brand-label font-body">${brand}</span>
                    <div class="custom-goat-checkbox ${isChecked ? 'checked-white' : ''}">
                      ${isChecked ? `
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="filter-section font-body">
            <h3 class="filter-section-title font-display">Размер (EU)</h3>
            <div class="dropdown-grid-sizes" style="margin-top: 8px;">
              ${['Все', ...sizeList].map(size => {
                const isSelected = this.draftSize === size;
                return `
                  <button 
                    class="size-rect-btn ${isSelected ? 'active' : ''}" 
                    data-sheet-size="${size}"
                  >
                    ${size}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <div class="filter-section font-body" style="border-bottom: none;">
            <h3 class="filter-section-title font-display">Сортировка</h3>
            <div class="sort-grid-2x2" style="margin-top: 8px;">
              ${sortList.map(opt => {
                const isSelected = this.draftSort === opt.id;
                return `
                  <button 
                    class="sort-rect-btn ${isSelected ? 'active' : ''}" 
                    data-sheet-sort="${opt.id}"
                  >
                    ${opt.label}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

        </div>

        <!-- FIXED BOTTOM BAR FOOTER (PREMIUM MONOCHROME CTA "ПРИМЕНИТЬ") -->
        <div class="filter-sheet-footer font-body">
          <button id="reset-filter-sheet-btn" class="filter-sheet-reset-btn font-body">
            Сбросить все
          </button>
          <button id="apply-filter-sheet-btn" class="filter-sheet-apply-btn font-body">
            Применить
          </button>
        </div>
      </div>
    `;
  }

  renderLiveSearchOverlay() {
    const liveFiltered = this.getFilteredProducts();

    return `
      <div class="goat-live-search-overlay font-body">
        <div class="live-search-header font-body">
          <div class="live-search-input-wrap font-body">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="7"/>
              <path d="M16 16L20 20"/>
            </svg>
            <input 
              type="text" 
              id="live-search-input" 
              class="live-search-input-field font-body" 
              placeholder="Поиск модели, бренда или артикула..." 
              value="${this.escapeHtml(this.searchQuery)}"
            />
            ${this.searchQuery ? `
              <button id="clear-live-search-btn" class="clear-btn font-body" aria-label="Очистить">✕</button>
            ` : ''}
          </div>

          <button id="close-live-search-btn" class="live-search-close-btn font-body">
            Отмена
          </button>
        </div>

        <div class="live-search-results-list font-body" style="padding: 0;">
          ${liveFiltered.length > 0 ? liveFiltered.map(p => {
            const priceVal = new Intl.NumberFormat('ru-RU').format(p.price);
            const brandTitle = this.formatBrandName(p.brand);
            return `
              <div class="live-search-item-row font-body" data-id="${p.id}">
                <div class="live-item-thumb-bg">
                  <img src="${p.image}" alt="${this.escapeHtml(p.name)}" class="live-item-thumb-img" />
                </div>
                <div class="live-item-info font-body">
                  <div class="live-item-title font-body" title="${this.escapeHtml(p.name)}">${this.escapeHtml(p.name)}</div>
                  <div class="live-item-brand font-body">${this.escapeHtml(brandTitle)} / ${this.escapeHtml(p.size)}</div>
                </div>
                <div class="live-item-price-monolith font-display tabular-nums">
                  ${priceVal} ₽
                </div>
              </div>
            `;
          }).join('') : `
            <div class="no-branches-found font-body" style="padding: 40px 16px;">
              По запросу "${this.escapeHtml(this.searchQuery)}" ничего не найдено
            </div>
          `}
        </div>
      </div>
    `;
  }

  initYandexMap() {
    const mapDiv = document.getElementById('ymaps-container');
    if (!mapDiv) return;

    const loadYmaps = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => this.setupMap(mapDiv));
        return;
      }
      const existingScript = document.getElementById('ymaps-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'ymaps-script';
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        script.onload = () => {
          if (window.ymaps) {
            window.ymaps.ready(() => this.setupMap(mapDiv));
          }
        };
        document.head.appendChild(script);
      }
    };

    loadYmaps();
  }

  setupMap(mapDiv) {
    if (this.ymapsMap) {
      this.ymapsMap.destroy();
      this.ymapsMap = null;
    }

    const ymaps = window.ymaps;
    const initialCenter = this.highlightedBranch ? [this.highlightedBranch.lat, this.highlightedBranch.lng] : [53.9006, 27.5590];

    this.ymapsMap = new ymaps.Map(mapDiv, {
      center: initialCenter,
      zoom: this.highlightedBranch ? 13 : 11,
      controls: [],
    });

    const filteredBranches = BELARUS_POST_BRANCHES.filter(b => {
      const matchesProvider = this.providerFilter === 'all' || b.provider === this.providerFilter;
      const q = this.branchSearchQuery.toLowerCase().trim();
      const matchesQuery = !q || b.code.toLowerCase().includes(q) || b.address.toLowerCase().includes(q) || b.city.toLowerCase().includes(q);
      return matchesProvider && matchesQuery;
    });

    filteredBranches.forEach(branch => {
      const isSelected = this.highlightedBranch && this.highlightedBranch.id === branch.id;
      const textLabel = branch.provider === 'belpost' ? 'БП' : 'EP';

      const customLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="goat-map-marker ${branch.provider} ${isSelected ? 'selected' : ''}">${textLabel}</div>`
      );

      const placemark = new ymaps.Placemark(
        [branch.lat, branch.lng],
        {
          hintContent: `${branch.providerName}: ${branch.code}`,
        },
        {
          iconLayout: customLayout,
          iconShape: {
            type: 'Rectangle',
            coordinates: [[-14, -14], [14, 14]],
          },
        }
      );

      placemark.events.add('click', () => {
        this.highlightedBranch = branch;
        if (this.ymapsMap) {
          this.ymapsMap.panTo([branch.lat, branch.lng], { flying: true });
        }
        this.render();
      });

      this.ymapsMap.geoObjects.add(placemark);
    });
  }

  renderCatalogView() {
    const filteredProducts = this.getFilteredProducts();
    if (filteredProducts.length === 0) {
      return this.renderEmptyState();
    }
    return `
      <div class="product-grid">
        ${filteredProducts.map(product => this.renderGoatCard(product)).join('')}
      </div>
    `;
  }

  renderGoatCartView() {
    const totalCount = this.cartItems.length;
    const totalPrice = this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const totalPriceFormatted = new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';

    return `
      <div class="goat-cart-container font-body">
        <!-- STANDARD CARTSHEET / BOTTOM SHEET HEADER -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
          <h1 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">
            Корзина
          </h1>
          <button id="cart-close-btn" class="sheet-close-btn" style="background: transparent; border: none; color: #737373; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; transition: color 0.15s ease;" aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="goat-cart-body">
          ${totalCount > 0 ? `
            <div class="goat-cart-list">
              ${this.cartItems.map((item, idx) => `
                <div class="goat-cart-item-row">
                  <div class="goat-item-left">
                    <div class="goat-item-title font-body" title="${this.escapeHtml(item.product.name)}">
                      ${this.escapeHtml(item.product.name)}
                    </div>
                    <div class="goat-item-sub font-body">
                      Размер: ${this.escapeHtml(item.selectedSize)}
                    </div>
                    <div class="goat-item-sub font-body">
                      Состояние: ${this.escapeHtml(item.product.condition)} (в коробке)
                    </div>
                    <div class="goat-item-price font-display tabular-nums">
                      ${item.product.priceFormatted}
                    </div>
                  </div>

                  <div class="goat-item-right">
                    <div class="goat-photo-bg">
                      <img src="${item.product.image}" alt="${this.escapeHtml(item.product.name)}" class="goat-item-photo" />
                    </div>
                    <button class="goat-item-delete-btn font-body" data-index="${idx}">
                      Удалить
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="redesigned-empty-cart font-body" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0 24px; min-height: 60vh;">
              <!-- SHOPPING BAG ICON (36px, strokeWidth 1.2, text-[#525252], mb-4) -->
              <div style="margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#525252" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"/>
                  <path d="M3 6H21"/>
                  <path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"/>
                </svg>
              </div>

              <!-- TITLE "Корзина пуста" -->
              <h2 class="empty-cart-title font-display" style="font-size: 18px; font-weight: 700; color: #FFFFFF; margin: 0 0 8px 0; font-family: var(--font-display);">
                Корзина пуста
              </h2>

              <!-- DESCRIPTION TEXT -->
              <p class="empty-cart-sub font-body" style="font-size: 12px; color: #737373; line-height: 1.5; max-width: 240px; margin: 0 0 24px 0; font-family: var(--font-body);">
                Выберите пару в каталоге, чтобы оформить заказ.
              </p>

              <!-- RETURN BUTTON "В КАТАЛОГ" -->
              <button id="go-to-catalog-btn" class="empty-cart-cta-btn font-body" style="width: 100%; max-width: 260px; height: 44px;">
                В КАТАЛОГ
              </button>
            </div>
          `}
        </div>

        ${totalCount > 0 ? `
          <div class="goat-cart-sticky-bar">
            <div class="mini-estimate-box">
              <div class="mini-estimate-row font-body">
                <span class="mini-estimate-label">Товары (${totalCount} шт.)</span>
                <span class="mini-estimate-val">${totalPriceFormatted}</span>
              </div>
              <div class="mini-estimate-row font-body">
                <span class="mini-estimate-label">Доставка</span>
                <span class="mini-estimate-val">Бесплатно</span>
              </div>
              <div class="mini-estimate-total-row font-body">
                <span class="mini-estimate-total-label">Итого к оплате</span>
                <span class="mini-estimate-total-val font-display tabular-nums">${totalPriceFormatted}</span>
              </div>
            </div>

            <!-- MONOCHROME PRIMARY CTA BUTTON IN CART VIEW -->
            <button id="proceed-to-checkout-btn" class="goat-checkout-cta-btn font-body">
              ПЕРЕЙТИ К ОФОРМЛЕНИЮ
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderSuccessView() {
    return `
      <div class="success-screen-container font-body" style="min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 0 24px 100px 24px; position: relative;">
        <!-- CENTRAL CONTENT BLOCK -->
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 280px;">
          <!-- WHITE CIRCLE WITH BLACK CHECK ICON -->
          <div class="success-icon-badge" style="width: 56px; height: 56px; border-radius: 50%; background-color: #FFFFFF; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <!-- TITLE "Заказ оформлен" -->
          <h1 class="success-title font-display" style="font-size: 20px; font-weight: 700; color: #FFFFFF; margin: 0 0 8px 0; font-family: var(--font-display);">
            Заказ оформлен
          </h1>

          <!-- ORDER NUMBER "#TR-87421" -->
          <div class="success-order-id font-body tabular-nums" style="font-size: 14px; font-weight: 500; color: #A3A3A3; margin-bottom: 16px; font-family: var(--font-body);">
            #${this.orderId || 'TR-87421'}
          </div>

          <!-- DESCRIPTION TEXT -->
          <p class="success-message font-body" style="font-size: 12px; color: #737373; line-height: 1.5; margin: 0; max-width: 280px; font-family: var(--font-body);">
            Оплата подтверждена. Менеджер свяжется с вами в Telegram для отправки трек-номера посылки.
          </p>
        </div>

        <!-- FIXED BOTTOM PANEL WITH FULL-WIDTH WHITE CTA -->
        <div style="position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 390px; background-color: #0A0A0A; border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 16px; z-index: 50;">
          <button id="back-to-catalog-after-success" class="goat-checkout-cta-btn font-body" style="width: 100%; height: 48px;">
            ВЕРНУТЬСЯ В КАТАЛОГ
          </button>
        </div>
      </div>
    `;
  }

  renderPlaceholderView() {
    return `
      <div style="padding: 40px 16px; text-align: center;">
        <h2 class="font-display text-h2" style="color: #F5F5F5; margin-bottom: 8px;">Раздел в разработке</h2>
        <p class="text-body" style="color: #737373;">Используйте каталог или корзину для оформления заказов.</p>
      </div>
    `;
  }

  formatBrandName(brand) {
    if (!brand) return '';
    const brandMap = {
      'JORDAN': 'Jordan',
      'NIKE': 'Nike',
      'NEW BALANCE': 'New Balance',
      'ADIDAS': 'Adidas',
      'ASICS': 'Asics',
    };
    return brandMap[brand.toUpperCase()] || (brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase());
  }

  renderGoatCard(product) {
    let euSizeStr = '42 EU';
    if (product.size) {
      if (product.size.includes('/')) {
        const parts = product.size.split('/');
        const eu = parts.find(p => p.toLowerCase().includes('eu'));
        if (eu) euSizeStr = eu.trim();
        else euSizeStr = product.size;
      } else {
        euSizeStr = product.size.includes('EU') ? product.size : `${product.size} EU`;
      }
    }

    const year = product.releaseYear || '2024';
    const brandTitle = this.formatBrandName(product.brand);
    const priceVal = new Intl.NumberFormat('ru-RU').format(product.price);

    return `
      <article class="goat-card font-body" data-id="${product.id}">
        <!-- Шапка карточки -->
        <div class="goat-card-header font-body">
          <span class="goat-card-size font-body">${this.escapeHtml(euSizeStr)}</span>
          <span class="goat-card-condition font-body">Новые</span>
        </div>

        <!-- Фотография -->
        <div class="goat-card-photo-box font-body">
          <img src="${product.image}" alt="${this.escapeHtml(product.name)}" class="goat-card-img" loading="lazy" />
        </div>

        <!-- Мета, Название и Ценник (обычный естественный регистр) -->
        <div class="goat-card-details font-body">
          <span class="goat-card-meta font-body">${year} / ${this.escapeHtml(brandTitle)}</span>
          <h3 class="goat-card-name font-body" title="${this.escapeHtml(product.name)}">
            ${this.escapeHtml(product.name)}
          </h3>
          <div class="goat-card-price-row font-display tabular-nums">
            ${priceVal} ₽
          </div>
        </div>

        <!-- Монолитная кнопка низа карточки ("В корзину" в обычном регистре) -->
        <button class="goat-card-bottom-btn font-body" data-action="open-sheet" data-id="${product.id}">
          В корзину
        </button>
      </article>
    `;
  }

  renderProductSheet() {
    const product = this.activeProduct;
    if (!product) return '';

    const images = product.images && product.images.length > 0 ? product.images : [product.image];
    const specs = product.specs || {
      fit: 'True to size (в размер)',
      upper: 'Дышащая сетка, синтетическая кожа',
      cushioning: 'ASICS GEL Technology',
      kit: 'Оригинальный бокс',
    };

    return `
      <div id="sheet-overlay" class="sheet-overlay"></div>
      <div class="product-bottom-sheet">
        <!-- STANDARD BOTTOM SHEET TOP BLOCK -->
        <div class="w-9 h-1 rounded-full bg-white/20 mx-auto mt-2.5 mb-1" style="width: 36px; height: 4px; border-radius: 9999px; background-color: rgba(255,255,255,0.20); margin: 10px auto 4px auto;"></div>

        <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
          <h2 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">О товаре</h2>
          <button id="close-product-sheet-btn" class="sheet-close-btn" style="background: transparent; border: none; color: #737373; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; transition: color 0.15s ease;" aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="sheet-body">
          <div class="sheet-gallery-container">
            <div id="carousel-track" class="carousel-track">
              ${images.map((imgSrc, idx) => `
                <div class="carousel-slide">
                  <img src="${imgSrc}" alt="${this.escapeHtml(product.name)} angle ${idx + 1}" class="sheet-photo" />
                </div>
              `).join('')}
            </div>

            <div class="carousel-pagination">
              ${images.map((_, idx) => `
                <div class="page-indicator ${idx === this.activeSlide ? 'active' : ''}"></div>
              `).join('')}
            </div>
          </div>

          <h2 class="sheet-title">${this.escapeHtml(product.name)}</h2>

          <div class="sheet-meta-inline">
            <span>SKU: ${this.escapeHtml(product.sku)}</span>
            <span>Box: Original / ${this.escapeHtml(product.condition)}</span>
          </div>

          <div class="sheet-size-section">
            <div class="sheet-section-heading">Выберите размер (EU):</div>
            <div class="sheet-size-row">
              ${product.sizes.map(s => {
                const isSelected = this.selectedSize === s.eu;
                const isOutOfStock = !s.inStock;
                return `
                  <button 
                    class="size-chip ${isSelected ? 'selected' : ''} ${isOutOfStock ? 'out-of-stock' : ''}" 
                    data-size="${s.eu}"
                    ${isOutOfStock ? 'disabled' : ''}
                  >
                    ${s.eu}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <div class="sheet-section">
            <div class="sheet-section-heading">Характеристики и детали:</div>
            <div class="spec-list">
              <div class="spec-row">
                <span class="spec-name">Посадка</span>
                <span class="spec-val">${this.escapeHtml(specs.fit)}</span>
              </div>
              <div class="spec-row">
                <span class="spec-name">Материал верха</span>
                <span class="spec-val">${this.escapeHtml(specs.upper)}</span>
              </div>
              <div class="spec-row">
                <span class="spec-name">Амортизация</span>
                <span class="spec-val">${this.escapeHtml(specs.cushioning || specs.sole || 'ASICS GEL Technology')}</span>
              </div>
              <div class="spec-row">
                <span class="spec-name">Комплектация</span>
                <span class="spec-val">${this.escapeHtml(specs.kit)}</span>
              </div>
            </div>
          </div>

          <div class="sheet-section">
            <div class="sheet-section-heading">Сервис и условия:</div>
            <div class="spec-list">
              <div class="spec-row">
                <span class="spec-name">Доставка</span>
                <span class="spec-val">Экспресс СДЭК (2–4 дня)</span>
              </div>
              <div class="spec-row">
                <span class="spec-name">Примерка</span>
                <span class="spec-val">Доступна перед выкупом</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PRODUCT SHEET FIXED FOOTER WITH MONOCHROME WHITE PRIMARY CTA BUTTON -->
        <div class="sheet-footer">
          <div class="sheet-price-only font-display tabular-nums">${product.priceFormatted}</div>
          <button id="add-to-cart-btn" class="sheet-cta-button font-body">
            В КОРЗИНУ
          </button>
        </div>
      </div>
    `;
  }

  renderEmptyState() {
    return `
      <div class="empty-state">
        <div class="empty-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 10C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-linecap="round"/>
            <path d="M8 8L12 8L8 12" stroke-linecap="round"/>
          </svg>
        </div>
        
        <h2 class="empty-title font-display text-h2">Ничего не найдено</h2>
        <p class="empty-description text-body">
          По вашему запросу пар не найдено. Попробуйте сбросить фильтр или выберите другую модель.
        </p>

        <button id="reset-filter-btn" class="cta-button font-body">
          Сбросить фильтр
        </button>

        <div class="popular-suggestions">
          <span class="suggestion-label text-caption">Популярные запросы:</span>
          <div class="suggestion-chips">
            ${POPULAR_MODELS.map(model => `
              <button class="suggestion-chip text-caption" data-query="${model}">
                ${model}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  rebindEvents() {
    // Payment row trigger on Order Review screen
    const paymentRowTrigger = document.getElementById('payment-method-row-trigger');
    if (paymentRowTrigger) {
      paymentRowTrigger.addEventListener('click', () => this.openPaymentGateway());
    }

    // Payment Modal events
    const closePaymentBtn = document.getElementById('close-payment-modal-btn');
    if (closePaymentBtn) {
      closePaymentBtn.addEventListener('click', () => this.closePaymentGateway());
    }

    const pmTabs = document.querySelectorAll('.payment-tab-btn[data-pm]');
    pmTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        this.paymentMethod = e.currentTarget.getAttribute('data-pm');
        this.render();
      });
    });

    const cardNumInput = document.getElementById('card-number-input');
    if (cardNumInput) {
      cardNumInput.addEventListener('input', (e) => {
        this.cardNumber = this.formatCardNumber(e.target.value);
        this.render();
        const updatedInput = document.getElementById('card-number-input');
        if (updatedInput) {
          updatedInput.focus();
          updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
        }
      });
    }

    const cardExpiryInput = document.getElementById('card-expiry-input');
    if (cardExpiryInput) {
      cardExpiryInput.addEventListener('input', (e) => {
        this.cardExpiry = this.formatCardExpiry(e.target.value);
        this.render();
        const updatedInput = document.getElementById('card-expiry-input');
        if (updatedInput) {
          updatedInput.focus();
          updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
        }
      });
    }

    const cardCvcInput = document.getElementById('card-cvc-input');
    if (cardCvcInput) {
      cardCvcInput.addEventListener('input', (e) => {
        this.cardCvc = e.target.value.replace(/\D/g, '').slice(0, 3);
        this.render();
        const updatedInput = document.getElementById('card-cvc-input');
        if (updatedInput) {
          updatedInput.focus();
          updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
        }
      });
    }

    const cardHolderInput = document.getElementById('card-holder-input');
    if (cardHolderInput) {
      cardHolderInput.addEventListener('input', (e) => {
        this.cardHolder = e.target.value.toUpperCase();
      });
    }

    const cardForm = document.getElementById('payment-card-form');
    if (cardForm) {
      cardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.processPaymentSubmit();
      });
    }

    const submitSbpBtn = document.getElementById('submit-sbp-payment-btn');
    if (submitSbpBtn) {
      submitSbpBtn.addEventListener('click', () => this.processPaymentSubmit());
    }

    const submitReceiptBtn = document.getElementById('submit-receipt-payment-btn');
    if (submitReceiptBtn) {
      submitReceiptBtn.addEventListener('click', () => this.processPaymentSubmit());
    }

    // Header Search box click trigger -> Live Search Overlay
    const headerSearchTrigger = document.getElementById('header-search-trigger');
    if (headerSearchTrigger) {
      headerSearchTrigger.addEventListener('click', () => {
        this.openLiveSearch();
      });
    }

    // Open Filter Sheet button
    const openFilterBtn = document.getElementById('open-filter-sheet-btn');
    if (openFilterBtn) {
      openFilterBtn.addEventListener('click', () => {
        this.openFilterSheet();
      });
    }

    // Close Filter Sheet button & overlay
    const closeFilterBtn = document.getElementById('close-filter-sheet-btn');
    if (closeFilterBtn) {
      closeFilterBtn.addEventListener('click', () => this.closeFilterSheet());
    }

    const filterOverlay = document.getElementById('filter-sheet-overlay');
    if (filterOverlay) {
      filterOverlay.addEventListener('click', () => this.closeFilterSheet());
    }

    // Filter Sheet price inputs
    const draftMinNumInput = document.getElementById('draft-min-price-num');
    const draftMaxNumInput = document.getElementById('draft-max-price-num');
    const sheetMinRange = document.getElementById('sheet-range-min');
    const sheetMaxRange = document.getElementById('sheet-range-max');

    if (sheetMinRange && sheetMaxRange) {
      const syncRange = () => {
        let v1 = parseInt(sheetMinRange.value, 10);
        let v2 = parseInt(sheetMaxRange.value, 10);
        if (v1 > v2 - 3000) {
          v1 = v2 - 3000;
          sheetMinRange.value = v1;
        }
        this.draftMinPrice = v1;
        this.draftMaxPrice = v2;
        if (draftMinNumInput) draftMinNumInput.value = v1;
        if (draftMaxNumInput) draftMaxNumInput.value = v2;

        const trackHighlight = document.querySelector('.filter-sheet-drawer .slider-track-highlight');
        if (trackHighlight) {
          const minPercent = ((v1 - 10000) / 90000) * 100;
          const maxPercent = ((v2 - 10000) / 90000) * 100;
          trackHighlight.style.left = `${minPercent}%`;
          trackHighlight.style.right = `${100 - maxPercent}%`;
        }
      };

      sheetMinRange.addEventListener('input', syncRange);
      sheetMaxRange.addEventListener('input', syncRange);
    }

    if (draftMinNumInput) {
      draftMinNumInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value, 10) || 10000;
        if (val < 10000) val = 10000;
        if (val > this.draftMaxPrice - 3000) val = this.draftMaxPrice - 3000;
        this.draftMinPrice = val;
        if (sheetMinRange) sheetMinRange.value = val;
        this.render();
      });
    }

    if (draftMaxNumInput) {
      draftMaxNumInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value, 10) || 100000;
        if (val > 100000) val = 100000;
        if (val < this.draftMinPrice + 3000) val = this.draftMinPrice + 3000;
        this.draftMaxPrice = val;
        if (sheetMaxRange) sheetMaxRange.value = val;
        this.render();
      });
    }

    // Brand Checkboxes in Filter Sheet
    const brandCheckboxes = document.querySelectorAll('[data-brand-toggle]');
    brandCheckboxes.forEach(row => {
      row.addEventListener('click', (e) => {
        const brand = e.currentTarget.getAttribute('data-brand-toggle');
        if (this.draftBrands.includes(brand)) {
          this.draftBrands = this.draftBrands.filter(b => b !== brand);
        } else {
          this.draftBrands.push(brand);
        }
        this.render();
      });
    });

    // Size Rectangular Buttons in Filter Sheet
    const sheetSizeBtns = document.querySelectorAll('[data-sheet-size]');
    sheetSizeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const size = e.currentTarget.getAttribute('data-sheet-size');
        this.draftSize = size;
        this.render();
      });
    });

    // Sort Buttons in Filter Sheet
    const sheetSortBtns = document.querySelectorAll('[data-sheet-sort]');
    sheetSortBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const sort = e.currentTarget.getAttribute('data-sheet-sort');
        this.draftSort = sort;
        this.render();
      });
    });

    // Apply Filter Sheet CTA button
    const applySheetBtn = document.getElementById('apply-filter-sheet-btn');
    if (applySheetBtn) {
      applySheetBtn.addEventListener('click', () => {
        this.applyFilterSheet();
      });
    }

    // Reset Filter Sheet button
    const resetSheetBtn = document.getElementById('reset-filter-sheet-btn');
    if (resetSheetBtn) {
      resetSheetBtn.addEventListener('click', () => {
        this.resetAllFilters();
      });
    }

    // Brand chips on quick header scroll bar
    const chipBtns = document.querySelectorAll('.goat-chip');
    chipBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const brand = e.currentTarget.getAttribute('data-brand');
        if (brand === 'Все') {
          this.selectedBrands = [];
        } else {
          this.selectedBrands = [brand];
        }
        this.updateUrl();
        this.render();
      });
    });

    // Live search input live query
    const liveInput = document.getElementById('live-search-input');
    if (liveInput) {
      liveInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.render();
        const updatedLiveInput = document.getElementById('live-search-input');
        if (updatedLiveInput) {
          updatedLiveInput.focus();
          updatedLiveInput.setSelectionRange(updatedLiveInput.value.length, updatedLiveInput.value.length);
        }
      });
    }

    // Clear live search query button
    const clearLiveBtn = document.getElementById('clear-live-search-btn');
    if (clearLiveBtn) {
      clearLiveBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
        const updatedLiveInput = document.getElementById('live-search-input');
        if (updatedLiveInput) updatedLiveInput.focus();
      });
    }

    // Close live search overlay
    const closeLiveBtn = document.getElementById('close-live-search-btn');
    if (closeLiveBtn) {
      closeLiveBtn.addEventListener('click', () => {
        this.closeLiveSearch();
      });
    }

    // Live search result item row click -> Product Sheet
    const liveItemRows = document.querySelectorAll('.live-search-item-row');
    liveItemRows.forEach(row => {
      row.addEventListener('click', () => {
        const id = row.getAttribute('data-id');
        const p = this.products.find(x => x.id === id);
        if (p) {
          this.closeLiveSearch();
          this.openProductSheet(p);
        }
      });
    });

    // Hotbar search glass button
    const hotbarSearchBtn = document.getElementById('hotbar-search-btn');
    if (hotbarSearchBtn) {
      hotbarSearchBtn.addEventListener('click', () => {
        this.openLiveSearch();
      });
    }

    // Product card click to open sheet
    const cards = document.querySelectorAll('.goat-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const product = this.products.find(p => p.id === id);
        if (product) {
          this.openProductSheet(product);
        }
      });
    });

    // Delete item in GOAT cart view
    const goatDeleteBtns = document.querySelectorAll('.goat-item-delete-btn');
    goatDeleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        this.removeFromCart(idx);
      });
    });

    // Close cart button in header
    const closeCartBtn = document.getElementById('close-cart-btn');
    if (closeCartBtn) {
      closeCartBtn.addEventListener('click', () => {
        this.setTab('catalog');
      });
    }

    // Proceed to checkout button in cart view
    const proceedCheckoutBtn = document.getElementById('proceed-to-checkout-btn');
    if (proceedCheckoutBtn) {
      proceedCheckoutBtn.addEventListener('click', () => {
        this.setTab('checkout');
      });
    }

    // Back to cart button in checkout header
    const backToCartBtn = document.getElementById('back-to-cart-btn');
    if (backToCartBtn) {
      backToCartBtn.addEventListener('click', () => {
        this.setTab('cart');
      });
    }

    // Open post branch drawer button in checkout
    const openBranchBtn = document.getElementById('open-branch-drawer-btn');
    if (openBranchBtn) {
      openBranchBtn.addEventListener('click', () => {
        this.isBranchDrawerOpen = true;
        this.updateUrl();
        this.render();
      });
    }

    // Close branch drawer button
    const closeBranchBtn = document.getElementById('close-branch-drawer-btn');
    if (closeBranchBtn) {
      closeBranchBtn.addEventListener('click', () => {
        this.isBranchDrawerOpen = false;
        this.updateUrl();
        this.render();
      });
    }

    // Mode toggle button 'Список' / 'Карта'
    const toggleModeBtn = document.getElementById('toggle-drawer-mode-btn');
    if (toggleModeBtn) {
      toggleModeBtn.addEventListener('click', () => {
        this.drawerMode = this.drawerMode === 'map' ? 'list' : 'map';
        this.updateUrl();
        this.render();
      });
    }

    // Service Filter Chips ('Все', 'Белпочта', 'Европочта')
    const serviceChips = document.querySelectorAll('.service-chip-btn');
    serviceChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        this.providerFilter = e.currentTarget.getAttribute('data-provider');
        this.updateUrl();
        this.render();
      });
    });

    // Confirm selected branch button in floating card
    const confirmBranchBtn = document.getElementById('confirm-selected-branch-btn');
    if (confirmBranchBtn) {
      confirmBranchBtn.addEventListener('click', () => {
        this.selectedBranch = this.highlightedBranch;
        this.isBranchDrawerOpen = false;
        this.updateUrl();
        this.render();
      });
    }

    // Flat branch items in list mode
    const flatItems = document.querySelectorAll('.goat-flat-branch-item');
    flatItems.forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const b = BELARUS_POST_BRANCHES.find(x => x.id === id);
        if (b) {
          this.selectedBranch = b;
          this.highlightedBranch = b;
          this.isBranchDrawerOpen = false;
          this.updateUrl();
          this.render();
        }
      });
    });

    // Branch search input
    const branchSearchInput = document.getElementById('branch-search-input');
    if (branchSearchInput) {
      branchSearchInput.addEventListener('input', (e) => {
        this.branchSearchQuery = e.target.value;
        this.render();
        const updatedBranchInput = document.getElementById('branch-search-input');
        if (updatedBranchInput) {
          updatedBranchInput.focus();
          updatedBranchInput.setSelectionRange(updatedBranchInput.value.length, updatedBranchInput.value.length);
        }
      });
    }

    // Delivery text tabs in GOAT checkout ('post' / 'pickup')
    const shipTabBtns = document.querySelectorAll('.ship-tab-rect');
    shipTabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.deliveryType = e.currentTarget.getAttribute('data-type');
        this.render();
      });
    });

    // Checkout form submit -> TRIGGER PAYMENT GATEWAY
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.openPaymentGateway();
      });
    }

    // About back button
    const aboutBackBtn = document.getElementById('about-back-btn');
    if (aboutBackBtn) {
      aboutBackBtn.addEventListener('click', () => {
        this.setTab('catalog');
      });
    }

    // Back to catalog after order success
    const backCatalogSuccessBtn = document.getElementById('back-to-catalog-after-success');
    if (backCatalogSuccessBtn) {
      backCatalogSuccessBtn.addEventListener('click', () => {
        this.cartItems = [];
        this.orderId = null;
        this.isPaymentModalOpen = false;
        this.isPaymentProcessing = false;
        this.setTab('catalog');
      });
    }

    // Go to catalog button in empty cart state
    const goToCatalogBtn = document.getElementById('go-to-catalog-btn');
    if (goToCatalogBtn) {
      goToCatalogBtn.addEventListener('click', () => {
        this.setTab('catalog');
      });
    }

    // Section pills in empty cart
    const sectionPills = document.querySelectorAll('.section-pill[data-brand]');
    sectionPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const brand = pill.getAttribute('data-brand');
        this.selectedBrands = [brand];
        this.setTab('catalog');
      });
    });

    // Carousel track scroll
    const carouselTrack = document.getElementById('carousel-track');
    if (carouselTrack) {
      carouselTrack.addEventListener('scroll', () => {
        const scrollPosition = carouselTrack.scrollLeft;
        const width = carouselTrack.clientWidth;
        if (width > 0) {
          const newIndex = Math.round(scrollPosition / width);
          if (newIndex !== this.activeSlide) {
            this.activeSlide = newIndex;
            const indicators = document.querySelectorAll('.page-indicator');
            indicators.forEach((ind, idx) => {
              if (idx === newIndex) {
                ind.classList.add('active');
              } else {
                ind.classList.remove('active');
              }
            });
          }
        }
      });
    }

    // Product sheet close button
    const closeProductSheetBtn = document.getElementById('close-product-sheet-btn');
    if (closeProductSheetBtn) {
      closeProductSheetBtn.addEventListener('click', () => this.closeProductSheet());
    }

    // Cart close button
    const cartCloseBtn = document.getElementById('cart-close-btn') || document.getElementById('close-cart-btn');
    if (cartCloseBtn) {
      cartCloseBtn.addEventListener('click', () => this.setTab('catalog'));
    }

    // Sheet close overlay
    const overlay = document.getElementById('sheet-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => this.closeProductSheet());
    }

    // Size chips in sheet
    const sizeChips = document.querySelectorAll('.size-chip');
    sizeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (!chip.hasAttribute('disabled')) {
          this.selectedSize = chip.getAttribute('data-size');
          this.render();
        }
      });
    });

    // Add to cart CTA button in sheet
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => this.addToCart());
    }

    // Reset filter button
    const resetBtn = document.getElementById('reset-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.resetAllFilters();
      });
    }

    // Nav items
    const navItems = document.querySelectorAll('.island-nav-item[data-tab]');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.setTab(tab);
      });
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new KedsApp();
});
