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

    // Info Sheet Modal state (faq, privacy, terms)
    this.activeInfoSheet = null; // 'faq', 'privacy', 'terms'

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

    // Customer profile & Telegram WebApp states
    this.telegramUser = null;
    this.customerName = '';
    this.customerPhone = '';

    // Empty cart items by default
    this.cartItems = [];

    // Load saved cart and profile state from localStorage / TMA CloudStorage
    this.loadStateFromLocalStorage();

    // Initialize Telegram WebApp SDK & auto-fill profile data
    this.initTelegramWebApp();

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

    window.kedsAppInstance = this;
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
    this.activeProduct = null;
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
    this.activeProduct = null;
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

  initTelegramWebApp() {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();

      // Enable Telegram native vertical swipe gesture for standard sheet (шторка) behavior
      if (typeof tg.enableVerticalSwipes === 'function') {
        try {
          tg.enableVerticalSwipes();
        } catch (e) {}
      }

      try {
        tg.enableClosingConfirmation();
      } catch (e) {}

      const tgUser = tg.initDataUnsafe?.user;
      if (tgUser) {
        this.telegramUser = tgUser;
        if (!this.customerName) {
          const fullName = [tgUser.first_name, tgUser.last_name].filter(Boolean).join(' ');
          this.customerName = fullName || tgUser.username || '';
        }
        if (!this.customerPhone && tgUser.phone_number) {
          this.customerPhone = tgUser.phone_number;
        }
      }
    }
  }

  saveStateToLocalStorage() {
    try {
      const state = {
        cartItems: this.cartItems,
        customerName: this.customerName,
        customerPhone: this.customerPhone,
        deliveryType: this.deliveryType,
        paymentMethod: this.paymentMethod,
        selectedBranch: this.selectedBranch,
      };
      localStorage.setItem('tread_app_state', JSON.stringify(state));

      if (window.Telegram?.WebApp?.CloudStorage) {
        window.Telegram.WebApp.CloudStorage.setItem('tread_cart', JSON.stringify(this.cartItems));
      }
    } catch (err) {
      console.warn('Error saving state to localStorage:', err);
    }
  }

  loadStateFromLocalStorage() {
    try {
      const saved = localStorage.getItem('tread_app_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.cartItems)) this.cartItems = parsed.cartItems;
        if (parsed.customerName) this.customerName = parsed.customerName;
        if (parsed.customerPhone) this.customerPhone = parsed.customerPhone;
        if (parsed.deliveryType) this.deliveryType = parsed.deliveryType;
        if (parsed.paymentMethod) this.paymentMethod = parsed.paymentMethod;
        if (parsed.selectedBranch) this.selectedBranch = parsed.selectedBranch;
      }
    } catch (err) {
      console.warn('Error loading state from localStorage:', err);
    }
  }

  async sendCartEvent(action, extraPayload = {}) {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user || this.telegramUser;
    const payload = {
      event: action, // 'cart_item_added', 'cart_item_removed', 'checkout_initiated', 'order_submitted'
      telegram_id: tgUser?.id || null,
      username: tgUser?.username || null,
      first_name: tgUser?.first_name || null,
      last_name: tgUser?.last_name || null,
      customer_name: this.customerName || null,
      customer_phone: this.customerPhone || null,
      cart_items: this.cartItems.map(i => ({
        id: i.product.id,
        name: i.product.name,
        size: i.selectedSize,
        price: i.product.price,
        quantity: i.quantity
      })),
      total_items: this.cartItems.reduce((sum, i) => sum + i.quantity, 0),
      total_amount: this.cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
      timestamp: new Date().toISOString(),
      ...extraPayload
    };

    console.log(`[TMA Event Hook: ${action}]`, payload);

    if (window.TREAD_BOT_WEBHOOK_URL) {
      try {
        await fetch(window.TREAD_BOT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('Failed to send TMA event hook:', err);
      }
    }
  }

  setTab(tab) {
    this.activeTab = tab;
    this.activeProduct = null;
    if (tab === 'checkout') {
      this.sendCartEvent('checkout_initiated');
    }
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.selectionChanged();
    }
    this.updateUrl();
    this.render();
  }

  openProductSheetById(id) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      this.openProductSheet(product);
    }
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
      const addedProduct = this.activeProduct;
      const size = this.selectedSize || '42 EU';
      this.cartItems.push({
        product: addedProduct,
        selectedSize: size,
        quantity: 1,
      });
      this.saveStateToLocalStorage();
      this.sendCartEvent('cart_item_added', { product_id: addedProduct.id, name: addedProduct.name, size });
      if (window.Telegram?.WebApp?.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
      }
    }
    this.activeProduct = null;
    this.selectedSize = null;
    this.activeSlide = 0;
    this.updateUrl();
    this.render();
  }

  removeFromCart(index) {
    const removedItem = this.cartItems[index];
    this.cartItems.splice(index, 1);
    this.saveStateToLocalStorage();
    this.sendCartEvent('cart_item_removed', { removed_item: removedItem });
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    this.render();
  }

  openPaymentGateway(mode = 'pay') {
    this.paymentModalMode = mode;
    if (!this.orderId) {
      this.orderId = `TR-${Math.floor(10000 + Math.random() * 90000)}`;
    }
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
    try {
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
    } catch (err) {
      console.warn('URL update suppressed:', err);
    }
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

  renderFloatingHotbar() {
    if (
      this.activeTab === 'cart' ||
      this.activeTab === 'checkout' || 
      this.activeTab === 'success' ||
      this.isPaymentModalOpen || 
      this.isBranchDrawerOpen || 
      this.activeProduct || 
      this.isFilterSheetOpen || 
      this.isLiveSearchOpen || 
      this.activeInfoSheet
    ) {
      return '';
    }

    const cartCount = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const tabs = [
      { id: 'catalog', label: 'Каталог' },
      { id: 'search', label: 'Поиск' },
      { id: 'cart', label: 'Корзина', count: cartCount },
      { id: 'about', label: 'О приложении' },
    ];

    return `
      <!-- UNIFIED FLOATING TAB BAR COMPONENT WITH POSITIONING WRAPPER -->
      <div class="floating-island-wrapper font-body">
        <nav class="floating-island-capsule font-body" aria-label="Панель навигации">
          ${tabs.map(tab => {
            const isActive = this.activeTab === tab.id;
            return `
              <button 
                class="island-nav-item ${isActive ? 'active' : ''}" 
                data-tab="${tab.id}" 
                aria-label="${tab.label}"
                onclick="window.kedsAppInstance && window.kedsAppInstance.setTab('${tab.id}')"
              >
                <span class="nav-tab-content font-body">
                  <span class="hotbar-tab-label font-body">${tab.label}</span>
                  ${(tab.id === 'cart' && tab.count > 0) ? `
                    <span class="micro-badge tabular-nums font-body">${tab.count}</span>
                  ` : ''}
                </span>
              </button>
            `;
          }).join('')}
        </nav>
      </div>
    `;
  }

  render() {
    const hasFiltersActive = this.hasActiveFilters();

    this.appContainer.innerHTML = `
      ${this.renderSplashScreen()}
      <div class="mobile-container ${this.activeTab === 'cart' || this.activeTab === 'checkout' || this.activeTab === 'success' || this.activeTab === 'about' ? 'cart-mode about-mode' : ''}">
        <!-- HEADER (Only rendered on catalog tab) -->
        ${this.activeTab === 'catalog' ? `
          <header class="app-header">
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

        <!-- MAIN VIEWPORT ROUTER (Catalog | Cart | Checkout | Success | About | Search) -->
        <main class="${this.activeTab === 'catalog' ? 'catalog-content' : 'cart-main-content'}">
          ${this.activeTab === 'catalog' ? this.renderCatalogView() : ''}
          ${this.activeTab === 'cart' ? this.renderGoatCartView() : ''}
          ${this.activeTab === 'checkout' ? this.renderGoatOrderReviewView() : ''}
          ${this.activeTab === 'success' ? this.renderSuccessView() : ''}
          ${this.activeTab === 'about' ? this.renderAboutView() : ''}
          ${this.activeTab === 'search' ? this.renderSearchView() : ''}
          ${this.activeTab === 'profile' ? this.renderPlaceholderView() : ''}
        </main>

        <!-- PRODUCT BOTTOM SHEET MODAL -->
        ${this.activeProduct ? this.renderProductSheet() : ''}

        <!-- FULLSCREEN FILTER SHEET DRAWER -->
        ${this.isFilterSheetOpen ? this.renderFilterSheet() : ''}

        <!-- FULLSCREEN LIVE SEARCH OVERLAY -->
        ${this.isLiveSearchOpen ? this.renderLiveSearchOverlay() : ''}

        <!-- PAYMENT GATEWAY MODAL VIEW STRICTLY PER REF_PAYMENT -->
        ${this.isPaymentModalOpen ? this.renderPaymentGatewayView() : ''}

        <!-- INFO SHEET MODAL VIEW (FAQ, PRIVACY, TERMS) -->
        ${this.activeInfoSheet ? this.renderInfoModal() : ''}

        <!-- UNIFIED FLOATING TAB BAR COMPONENT -->
        ${this.renderFloatingHotbar()}
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
        <!-- ЕДИНАЯ ШАПКА ПОЛНОЭКРАННОЙ СТРАНИЦЫ (УНИФИЦИРОВАННАЯ ТИПОГРАФИКА) -->
        <div class="checkout-header-sticky font-body">
          <button id="back-to-cart-btn" class="checkout-back-btn font-body" style="position: static; width: 36px; height: 36px; border-radius: 4px; border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-primary); background: transparent; cursor: pointer; flex-shrink: 0;" aria-label="Назад">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <h1 class="screen-header-title font-body">
            Оформление заказа
          </h1>
        </div>

        <!-- MAIN SCROLLABLE ORDER REVIEW CONTENT LOCALIZED STRICTLY PER USER PROMPT -->
        <form id="checkout-form" class="checkout-form font-body" style="gap: 0;">
          
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

          <!-- RECIPIENT PROFILE & TELEGRAM CONTACT AUTO-FILL BLOCK -->
          <div class="checkout-section font-body" style="padding: 16px 0;">
            <div class="shipping-section-title font-body" style="font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
              <span>Данные получателя</span>
              ${(window.Telegram?.WebApp?.initDataUnsafe?.user?.username || this.telegramUser?.username) ? `<span class="mono-provider-badge font-body" style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); color: var(--text-secondary); text-transform: none; font-weight: 500;">@${this.escapeHtml(window.Telegram?.WebApp?.initDataUnsafe?.user?.username || this.telegramUser?.username)}</span>` : ''}
            </div>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              <!-- NAME INPUT -->
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <label style="font-size: 11px; color: var(--text-secondary); text-align: left;">Имя и фамилия</label>
                <input 
                  type="text" 
                  id="checkout-customer-name" 
                  class="goat-underline-input font-body" 
                  placeholder="Иван Иванов" 
                  value="${this.escapeHtml(this.customerName || '')}" 
                />
              </div>

              <!-- PHONE INPUT + TELEGRAM REQUEST CONTACT BUTTON -->
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <label style="font-size: 11px; color: var(--text-secondary); text-align: left;">Телефон для связи</label>
                  <button 
                    type="button" 
                    id="tg-request-contact-btn" 
                    class="font-body"
                    style="background: transparent; border: none; color: var(--accent); font-size: 11px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 4px; padding: 0;"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.42.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.46 3.82-1.6 4.62-1.88 5.14-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.2-.04.34z"/>
                    </svg>
                    Поделиться контактом Telegram
                  </button>
                </div>
                <input 
                  type="tel" 
                  id="checkout-customer-phone" 
                  class="goat-underline-input font-body" 
                  placeholder="+375 (29) 000-00-00" 
                  value="${this.escapeHtml(this.customerPhone || '')}" 
                />
              </div>
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="goat-section-divider"></div>

          <!-- SHIPPING SECTION WITH FULL-WIDTH SEGMENTED CONTROL & ADDRESS ROW -->
          <div class="goat-shipping-section font-body" style="padding: 16px 0;">
            <div class="shipping-section-title font-body" style="font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">
              Способ получения
            </div>

            <!-- FULL-WIDTH SEGMENTED TOGGLE -->
            <div class="shipping-segmented-wrap font-body">
              <button 
                type="button" 
                class="ship-segment-btn font-body ${this.deliveryType === 'post' ? 'active' : ''}" 
                data-type="post"
                onclick="if(window.kedsAppInstance){window.kedsAppInstance.deliveryType='post';window.kedsAppInstance.render();}"
              >
                Доставка
              </button>
              <button 
                type="button" 
                class="ship-segment-btn font-body ${this.deliveryType === 'pickup' ? 'active' : ''}" 
                data-type="pickup"
                onclick="if(window.kedsAppInstance){window.kedsAppInstance.deliveryType='pickup';window.kedsAppInstance.render();}"
              >
                Самовывоз
              </button>
            </div>

            <!-- SEPARATE ADDRESS PICKER LINK ROW -->
            <div id="open-branch-drawer-btn" class="address-select-row font-body">
              <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                <span class="address-label">Адрес получения / Пункт выдачи</span>
                <span class="address-value">
                  ${this.selectedBranch ? `${this.selectedBranch.city}, ${this.selectedBranch.address}` : (this.deliveryType === 'pickup' ? 'г. Минск, ул. Ленина, 10 (Шоурум TREAD)' : 'Выберите пункт выдачи или отделение почты')}
                </span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" stroke-width="2" style="flex-shrink: 0;">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>

            <!-- VERIFICATION DISCLAIMER -->
            <div class="goat-verification-line font-body" style="margin-top: 8px; color: var(--text-secondary);">
              <span>Пара проходит аутентификацию TREAD Verification.</span>
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="goat-section-divider"></div>

          <!-- PAYMENT METHOD VERTICAL RADIO CARDS LIST -->
          <div class="checkout-section font-body" style="padding: 16px 0;">
            <div class="checkout-section-title font-body" style="font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">
              Способ оплаты
            </div>

            <div class="tread-radio-list font-body" style="display: flex; flex-direction: column; gap: 8px;">
              ${[
                { id: 'card', title: 'Банковская карта', subtitle: 'МИР, Visa, Mastercard' },
                { id: 'sbp', title: 'СБП', subtitle: 'Система быстрых платежей' },
                { id: 'cash', title: 'Оплата при получении', subtitle: 'Наличными или картой курьеру' }
              ].map(opt => {
                const isSelected = this.paymentMethod === opt.id;
                return `
                  <div 
                    class="tread-radio-card font-body ${isSelected ? 'selected' : ''}" 
                    data-payment-id="${opt.id}"
                  >
                    <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                      <span class="radio-title">
                        ${opt.title}
                      </span>
                      ${opt.subtitle ? `<span class="radio-subtitle">${opt.subtitle}</span>` : ''}
                    </div>

                    <!-- MONOCHROME RADIO INDICATOR -->
                    <div class="tread-radio-circle">
                      ${isSelected ? `<div class="tread-radio-dot"></div>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="goat-section-divider"></div>

          <!-- SUMMARY FINANCIAL BREAKDOWN BLOCK -->
          <div class="checkout-financial-summary font-body">
            <div class="checkout-summary-row">
              <span>Товары (${totalCount} шт.)</span>
              <span class="val tabular-nums">${totalPriceFormatted}</span>
            </div>
            <div class="checkout-summary-row">
              <span>Доставка</span>
              <span class="val">Бесплатно</span>
            </div>
            <div class="checkout-summary-divider"></div>
            <div class="checkout-summary-total">
              <span>Итого к оплате</span>
              <span class="font-display tabular-nums" style="font-size: 16px; font-weight: 700; color: var(--text-primary);">${totalPriceFormatted}</span>
            </div>
          </div>

          <!-- FIXED CTA & DISCLAIMER FOOTER STRICTLY PER PROMPT -->
          <div class="goat-review-sticky-footer font-body">
            <button type="submit" class="goat-large-white-cta-btn font-body">
              ${this.paymentMethod === 'card' ? 'ОПЛАТИТЬ КАРТОЙ' : this.paymentMethod === 'sbp' ? 'ОПЛАТИТЬ ЧЕРЕЗ СБП' : 'ПОДТВЕРДИТЬ ЗАКАЗ'}
            </button>

            <p class="goat-disclaimer-text font-body" style="color: var(--text-secondary); font-size: 11px; text-align: center; margin: 0;">
              Оформляя заказ, вы соглашаетесь с условиями сервиса и правилами возврата.
            </p>
          </div>

        </form>
      </div>

      <!-- FULLSCREEN GOAT REFERENCE POST BRANCH DRAWER -->
      ${this.isBranchDrawerOpen ? `
        <div class="goat-location-drawer-fullscreen font-body">
          <div class="goat-location-header font-body">
            <div class="goat-location-header-left font-body">
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

  bindPaymentInnerEvents() {
    const cardNumInput = document.getElementById('card-number-input');
    if (cardNumInput) {
      cardNumInput.addEventListener('input', (e) => {
        this.cardNumber = this.formatCardNumber(e.target.value);
        e.target.value = this.cardNumber;
        const brandLogo = this.getCardBrandLogo(this.cardNumber);
        const wrap = e.target.parentElement;
        if (wrap) {
          let badge = wrap.querySelector('.card-brand-detected-badge');
          if (brandLogo) {
            if (!badge) {
              badge = document.createElement('span');
              badge.className = 'card-brand-detected-badge font-display';
              wrap.appendChild(badge);
            }
            badge.textContent = brandLogo;
          } else if (badge) {
            badge.remove();
          }
        }
      });
    }

    const cardExpiryInput = document.getElementById('card-expiry-input');
    if (cardExpiryInput) {
      cardExpiryInput.addEventListener('input', (e) => {
        this.cardExpiry = this.formatCardExpiry(e.target.value);
        e.target.value = this.cardExpiry;
      });
    }

    const cardCvcInput = document.getElementById('card-cvc-input');
    if (cardCvcInput) {
      cardCvcInput.addEventListener('input', (e) => {
        this.cardCvc = e.target.value.replace(/\D/g, '').slice(0, 3);
        e.target.value = this.cardCvc;
      });
    }

    const cardHolderInput = document.getElementById('card-holder-input');
    if (cardHolderInput) {
      cardHolderInput.addEventListener('input', (e) => {
        this.cardHolder = e.target.value.toUpperCase();
      });
    }

    const handlePaymentSubmit = () => {
      if (this.paymentModalMode === 'select') {
        this.closePaymentGateway();
      } else {
        this.processPaymentSubmit();
      }
    };

    const cardForm = document.getElementById('payment-card-form');
    if (cardForm) {
      cardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handlePaymentSubmit();
      });
    }

    const submitSbpBtn = document.getElementById('submit-sbp-payment-btn');
    if (submitSbpBtn) {
      submitSbpBtn.addEventListener('click', () => handlePaymentSubmit());
    }

    const submitReceiptBtn = document.getElementById('submit-receipt-payment-btn');
    if (submitReceiptBtn) {
      submitReceiptBtn.addEventListener('click', () => handlePaymentSubmit());
    }
  }

  updatePaymentTabContent() {
    const pmTabs = document.querySelectorAll('.payment-tab-btn[data-pm]');
    pmTabs.forEach(tab => {
      if (tab.getAttribute('data-pm') === this.paymentMethod) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    const tabBody = document.querySelector('.payment-tab-body');
    if (tabBody) {
      tabBody.innerHTML = this.renderPaymentTabBodyContent();
      this.bindPaymentInnerEvents();
    }
  }

  renderPaymentTabBodyContent() {
    const totalPrice = this.cartItems.length > 0
      ? this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      : 81400;
    const totalPriceFormatted = new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';
    const cardBrandLogo = this.getCardBrandLogo(this.cardNumber);

    const isSelect = this.paymentModalMode === 'select';

    if (this.paymentMethod === 'card') {
      const badgeHtml = cardBrandLogo ? '<span class="card-brand-detected-badge font-display">' + cardBrandLogo + '</span>' : '';
      const submitText = this.isPaymentProcessing
        ? '<div class="payment-spinner-loader font-body"><span class="spinner-circle"></span>Обработка...</div>'
        : (isSelect ? 'СОХРАНИТЬ ВЫБОР' : 'ОПЛАТИТЬ ' + totalPriceFormatted);
      const disabledAttr = this.isPaymentProcessing ? 'disabled' : '';
      const loadingClass = this.isPaymentProcessing ? 'loading' : '';

      return `
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
              ${badgeHtml}
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
              class="goat-checkout-cta-btn font-body ${loadingClass}"
              ${disabledAttr}
            >
              ${submitText}
            </button>
          </div>
        </form>
      `;
    }

    if (this.paymentMethod === 'sbp') {
      const submitText = this.isPaymentProcessing
        ? '<div class="payment-spinner-loader font-body"><span class="spinner-circle"></span>Проверка оплаты...</div>'
        : (isSelect ? 'СОХРАНИТЬ ВЫБОР' : 'ПОДТВЕРДИТЬ ОПЛАТУ ' + totalPriceFormatted);
      const disabledAttr = this.isPaymentProcessing ? 'disabled' : '';
      const loadingClass = this.isPaymentProcessing ? 'loading' : '';

      return `
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
            class="goat-checkout-cta-btn font-body ${loadingClass}"
            style="margin-top: 16px;"
            ${disabledAttr}
          >
            ${submitText}
          </button>
        </div>
      `;
    }

    if (this.paymentMethod === 'upon_receipt') {
      const submitText = this.isPaymentProcessing
        ? '<div class="payment-spinner-loader font-body"><span class="spinner-circle"></span>Оформление...</div>'
        : (isSelect ? 'СОХРАНИТЬ ВЫБОР' : 'ПОДТВЕРДИТЬ ЗАКАЗ НА ' + totalPriceFormatted);
      const disabledAttr = this.isPaymentProcessing ? 'disabled' : '';
      const loadingClass = this.isPaymentProcessing ? 'loading' : '';

      return `
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
            class="goat-checkout-cta-btn font-body ${loadingClass}"
            style="margin-top: 20px;"
            ${disabledAttr}
          >
            ${submitText}
          </button>
        </div>
      `;
    }

    return '';
  }

  renderPaymentGatewayView() {
    const totalPrice = this.cartItems.length > 0
      ? this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      : 81400;
    const totalPriceFormatted = new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';

    const pmTitles = {
      card: 'Оплата банковской картой',
      sbp: 'Оплата через СБП',
      cash: 'Подтверждение заказа',
      upon_receipt: 'Подтверждение заказа'
    };

    const modalTitle = pmTitles[this.paymentMethod] || 'Оплата заказа';

    return `
      <div class="payment-gateway-overlay font-body">
        <div class="payment-gateway-modal font-body">
          <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
            <h2 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">${modalTitle}</h2>
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
              <span>Заказ #${this.orderId || 'TR-84920'}</span>
              <span class="payment-subtext-slash"> / </span>
              <span class="payment-subtext-store">TREAD Store</span>
            </div>
          </div>

          <div class="payment-tab-body font-body">
            ${this.renderPaymentTabBodyContent()}
          </div>

        </div>
      </div>
    `;
  }

  renderAboutView() {
    const block1Items = [
      { id: 'faq', title: 'Частые вопросы (FAQ)' },
      { id: 'privacy', title: 'Политика конфиденциальности' },
      { id: 'terms', title: 'Пользовательское соглашение' },
    ];

    const block2Items = [
      { id: 'telegram', title: 'Telegram-канал' },
      { id: 'support', title: 'Связаться с поддержкой' },
    ];

    return `
      <div class="about-screen-container font-body">
        <!-- ЕДИНАЯ ШАПКА КОРНЕВОЙ СТРАНИЦЫ (С РАЗДЕЛИТЕЛЬНОЙ ЛИНИЕЙ) -->
        <div class="about-header font-body">
          <h1 class="screen-header-title font-body">О приложении</h1>
        </div>

        <div class="about-content-body font-body">
          <!-- КОМПАКТНЫЙ МОНОХРОМНЫЙ ЛОГОТИП TREAD -->
          <div class="about-brand-hero font-body">
            <svg viewBox="0 0 160 32" fill="none" class="about-logo-svg">
              <g fill="var(--accent)">
                <rect x="2" y="6" width="5" height="20" rx="1.5" />
                <rect x="10" y="3" width="5" height="26" rx="1.5" />
                <rect x="18" y="8" width="5" height="16" rx="1.5" />
              </g>
              <text x="34" y="23" fill="var(--text-primary)" font-family="var(--font-display)" font-size="18" font-weight="800" letter-spacing="0.04em">TREAD</text>
            </svg>
          </div>

          <!-- БЛОК 1: FAQ, ПОЛИТИКА, СОГЛАШЕНИЕ -->
          <div class="about-card-group font-body">
            ${block1Items.map((item, index) => `
              ${index > 0 ? '<div class="about-inset-divider font-body"></div>' : ''}
              <div class="about-item-row font-body" data-about-id="${item.id}">
                <span class="about-item-title font-body">${item.title}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="about-item-chevron">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            `).join('')}
          </div>

          <!-- БЛОК 2: TELEGRAM, ПОДДЕРЖКА -->
          <div class="about-card-group font-body">
            ${block2Items.map((item, index) => `
              ${index > 0 ? '<div class="about-inset-divider font-body"></div>' : ''}
              <div class="about-item-row font-body" data-about-id="${item.id}">
                <span class="about-item-title font-body">${item.title}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="about-item-chevron">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            `).join('')}
          </div>

          <!-- ВЕРСИЯ ПРИЛОЖЕНИЯ В САМОМ НИЗУ ЭКРАНА ПРЯМО НАД ТАББАРОМ -->
          <div class="about-version-footer font-body tabular-nums">
            Версия 1.0.0
          </div>
        </div>
      </div>
    `;
  }

  renderInfoModal() {
    const titles = {
      faq: 'Частые вопросы (FAQ)',
      privacy: 'Политика конфиденциальности',
      terms: 'Пользовательское соглашение'
    };

    const title = titles[this.activeInfoSheet] || 'Информация';

    let contentHtml = '';

    if (this.activeInfoSheet === 'faq') {
      const faqs = [
        {
          q: 'Все ли кроссовки оригинальные?',
          a: 'Да, абсолютно все товары проходят многоэтапную аутентификацию нашей командой легит-чекеров перед отправкой покупателю. Каждая пара имеет фирменную гарантию подлинности TREAD Verification.'
        },
        {
          q: 'Сколько занимает доставка по Беларуси?',
          a: 'Доставка почтовыми службами (Белпочта / Европочта) занимает от 1 до 3 рабочих дней. В шоуруме в Минске забрать заказ можно в день оформления.'
        },
        {
          q: 'Можно ли примерить обувь перед покупкой?',
          a: 'Да! При доставке курьером или самовывозе в пункте выдачи у вас есть возможность примерить пару и проверить комплектность до совершения оплаты.'
        },
        {
          q: 'Что делать, если размер не подошел?',
          a: 'Вы можете вернуть или обменять не подошедший товар в течение 14 дней с момента получения при сохранении товарного вида и оригинальной коробки.'
        }
      ];

      contentHtml = `
        <div class="faq-grouped-card font-body">
          ${faqs.map(f => `
            <details class="faq-accordion-item font-body">
              <summary class="faq-accordion-summary font-body">
                <span class="faq-question-text font-body">${f.q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron-icon">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </summary>
              <div class="faq-accordion-content font-body">
                <p class="faq-answer-paragraph font-body">${f.a}</p>
              </div>
            </details>
          `).join('')}
        </div>
      `;
    } else if (this.activeInfoSheet === 'privacy') {
      contentHtml = `
        <div class="legal-doc-body font-body">
          <div class="doc-paragraph-text font-body"> Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей сервиса TREAD Store в соответствии с Законом Республики Беларусь № 99-З «Об защите персональных данных».</div>
          
          <div class="doc-article-title font-display">1. Собираемые данные</div>
          <div class="doc-paragraph-text font-body">Мы собираем только необходимые данные для исполнения заказа: ФИО получателя, контактный номер телефона, адрес электронной почты и адрес отделения связи для доставки.</div>
          
          <div class="doc-article-title font-display">2. Цели обработки</div>
          <div class="doc-paragraph-text font-body">Персональные данные используются исключительно для подтверждения заказов, организации доставки через логистических партнеров и предоставления клиентской поддержки.</div>

          <div class="doc-article-title font-display">3. Защита данных</div>
          <div class="doc-paragraph-text font-body">Мы применяем современные протоколы шифрования SSL/TLS и не передаем ваши данные третьим лицам, за исключением авторизованных почтовых операторов.</div>
        </div>
      `;
    } else if (this.activeInfoSheet === 'terms') {
      contentHtml = `
        <div class="legal-doc-body font-body">
          <div class="doc-paragraph-text font-body">Настоящее Пользовательское соглашение регулирует отношения между интернет-магазином TREAD Store и покупателями при оформлении заказов через мобильное приложение.</div>
          
          <div class="doc-article-title font-display">1. Предмет соглашения</div>
          <div class="doc-paragraph-text font-body">Продавец обязуется передать Покупателю оригинальную обувь в соответствии с выбранным размером и комплектацией, а Покупатель — принять и оплатить товар.</div>

          <div class="doc-article-title font-display">2. Порядок оплаты и проверки</div>
          <div class="doc-paragraph-text font-body">Все заказы проходят предварительную проверку на подлинность. Оплата производится банковскими картами, через СБП или при получении в пункте выдачи.</div>

          <div class="doc-article-title font-display">3. Возврат и гарантия</div>
          <div class="doc-paragraph-text font-body">Гарантийный срок на фабричный брак составляет 30 календарных дней. Возврат качественного товара доступен в течение 14 дней.</div>
        </div>
      `;
    }

    return `
      <div id="info-sheet-overlay" class="sheet-overlay font-body"></div>
      <div class="info-sheet-drawer font-body">
        <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
          <h2 class="font-display text-sm font-semibold text-white" style="font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; margin: 0;">${title}</h2>
          <button id="close-info-sheet-btn" class="sheet-close-btn" style="background: transparent; border: none; color: #737373; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; transition: color 0.15s ease;" aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="info-sheet-body font-body no-scrollbar">
          ${contentHtml}
        </div>
      </div>
    `;
  }

  renderFilterSheet() {
    const minPercent = ((this.draftMinPrice - 10000) / 90000) * 100;
    const maxPercent = ((this.draftMaxPrice - 10000) / 90000) * 100;

    const brandList = ['Nike', 'Jordan', 'New Balance', 'Adidas', 'ASICS', 'Salomon', 'Puma'];
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

  renderSearchResultsHtml() {
    const query = this.searchQuery.trim().toLowerCase();

    // If search query is empty, show "Популярные модели" (10 positions)
    if (!query) {
      const popularProducts = this.products.slice(0, 10);
      return `
        <div class="live-search-section-header font-body">Популярные модели</div>
        <div class="live-search-items-wrap font-body">
          ${popularProducts.map(p => {
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
          }).join('')}
        </div>
      `;
    }

    const liveFiltered = this.getFilteredProducts();

    if (liveFiltered.length === 0) {
      return `
        <div class="no-branches-found font-body" style="padding: 40px 16px;">
          По запросу "${this.escapeHtml(this.searchQuery)}" ничего не найдено
        </div>
      `;
    }

    return `
      <div class="live-search-section-header font-body">Результаты поиска (${liveFiltered.length})</div>
      <div class="live-search-items-wrap font-body">
        ${liveFiltered.map(p => {
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
        }).join('')}
      </div>
    `;
  }

  renderSearchView() {
    const popularTags = ['Jordan 4', 'Travis Scott', 'Dunk Low', 'Campus 00s', '1906R', 'Samba'];

    return `
      <div class="search-screen-container font-body" style="padding-bottom: 96px;">
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
              placeholder="Поиск модели или артикула" 
              value="${this.escapeHtml(this.searchQuery)}"
            />
            ${this.searchQuery ? `
              <button id="clear-live-search-btn" class="clear-btn font-body" aria-label="Очистить">✕</button>
            ` : ''}
          </div>
        </div>

        <!-- QUICK TAGS SECTION -->
        <div class="search-quick-tags-section font-body">
          <div class="search-section-label font-body">Популярные запросы</div>
          <div class="search-tags-row font-body">
            ${popularTags.map(tag => `
              <button class="search-tag-chip font-body ${this.searchQuery === tag ? 'active' : ''}" data-tag="${tag}">
                ${tag}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="live-search-results-list font-body" style="padding: 0;">
          ${this.renderSearchResultsHtml()}
        </div>
      </div>
    `;
  }

  updateLiveSearchResults() {
    const listContainer = document.querySelector('.live-search-results-list');
    if (listContainer) {
      listContainer.innerHTML = this.renderSearchResultsHtml();

      const rows = listContainer.querySelectorAll('.live-search-item-row');
      rows.forEach(row => {
        row.addEventListener('click', () => {
          const id = row.getAttribute('data-id');
          const p = this.products.find(x => x.id === id);
          if (p) {
            this.closeLiveSearch();
            this.openProductSheet(p);
          }
        });
      });
    }

    const clearWrap = document.querySelector('.live-search-input-wrap');
    if (clearWrap) {
      let clearBtn = document.getElementById('clear-live-search-btn');
      if (this.searchQuery.trim()) {
        if (!clearBtn) {
          clearBtn = document.createElement('button');
          clearBtn.id = 'clear-live-search-btn';
          clearBtn.className = 'clear-btn font-body';
          clearBtn.setAttribute('aria-label', 'Очистить');
          clearBtn.textContent = '✕';
          clearBtn.addEventListener('click', () => {
            this.searchQuery = '';
            const input = document.getElementById('live-search-input');
            if (input) input.value = '';
            this.updateLiveSearchResults();
          });
          clearWrap.appendChild(clearBtn);
        }
      } else if (clearBtn) {
        clearBtn.remove();
      }
    }
  }

  renderLiveSearchOverlay() {
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
              placeholder="Поиск модели или артикула" 
              value="${this.escapeHtml(this.searchQuery)}"
            />
            ${this.searchQuery ? `
              <button id="clear-live-search-btn" class="clear-btn font-body" aria-label="Очистить">✕</button>
            ` : ''}
          </div>
        </div>

        <div class="live-search-results-list font-body" style="padding: 0;">
          ${this.renderSearchResultsHtml()}
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
    }, {
      restrictMapArea: [[-55.0, -170.0], [80.0, 179.0]],
      minZoom: 4,
      maxZoom: 18,
      suppressMapOpenBlock: true,
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
        <!-- ШАПКА КОРНЕВОГО ЭКРАНА КОРЗИНЫ С КНОПКОЙ НАЗАД И РАЗДЕЛИТЕЛЬНОЙ ЛИНИЕЙ -->
        <div class="flex items-center gap-3 px-4 py-3" style="display: flex; align-items: center; gap: 12px; padding: 16px 12px 12px 12px; background-color: var(--bg-primary); border-bottom: 1px solid var(--border-subtle);">
          <button id="close-cart-btn" class="checkout-back-btn font-body" style="position: static; width: 36px; height: 36px; border-radius: 4px; border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-primary); background: transparent; cursor: pointer; flex-shrink: 0;" aria-label="Назад в каталог" onclick="window.kedsAppInstance && window.kedsAppInstance.setTab('catalog')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <h1 class="screen-header-title font-body">
            Корзина
          </h1>
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
      <article class="goat-card font-body" data-id="${product.id}" onclick="window.kedsAppInstance && window.kedsAppInstance.openProductSheetById('${product.id}')">
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
    // Payment row trigger on Order Review screen -> SELECT MODE
    const paymentRowTrigger = document.getElementById('payment-method-row-trigger');
    if (paymentRowTrigger) {
      paymentRowTrigger.addEventListener('click', () => this.openPaymentGateway('select'));
    }

    // Payment Modal events
    const closePaymentBtn = document.getElementById('close-payment-modal-btn');
    if (closePaymentBtn) {
      closePaymentBtn.addEventListener('click', () => this.closePaymentGateway());
    }

    const pmTabs = document.querySelectorAll('.payment-tab-btn[data-pm]');
    pmTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const pm = e.currentTarget.getAttribute('data-pm');
        if (this.paymentMethod !== pm) {
          this.paymentMethod = pm;
          this.updatePaymentTabContent();
        }
      });
    });

    this.bindPaymentInnerEvents();

    // Header Search box click trigger -> Navigate to search tab
    const headerSearchTrigger = document.getElementById('header-search-trigger');
    if (headerSearchTrigger) {
      headerSearchTrigger.addEventListener('click', () => {
        this.setTab('search');
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
      draftMinNumInput.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10) || 10000;
        if (val < 10000) val = 10000;
        if (val > this.draftMaxPrice - 3000) val = this.draftMaxPrice - 3000;
        this.draftMinPrice = val;
        if (sheetMinRange) sheetMinRange.value = val;
        const trackHighlight = document.querySelector('.filter-sheet-drawer .slider-track-highlight');
        if (trackHighlight) {
          const minPercent = ((val - 10000) / 90000) * 100;
          trackHighlight.style.left = `${minPercent}%`;
        }
      });
    }

    if (draftMaxNumInput) {
      draftMaxNumInput.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10) || 100000;
        if (val > 100000) val = 100000;
        if (val < this.draftMinPrice + 3000) val = this.draftMinPrice + 3000;
        this.draftMaxPrice = val;
        if (sheetMaxRange) sheetMaxRange.value = val;
        const trackHighlight = document.querySelector('.filter-sheet-drawer .slider-track-highlight');
        if (trackHighlight) {
          const maxPercent = ((val - 10000) / 90000) * 100;
          trackHighlight.style.right = `${100 - maxPercent}%`;
        }
      });
    }

    // Brand Checkboxes in Filter Sheet (In-place DOM update)
    const brandCheckboxes = document.querySelectorAll('[data-brand-toggle]');
    brandCheckboxes.forEach(row => {
      row.addEventListener('click', (e) => {
        const brand = e.currentTarget.getAttribute('data-brand-toggle');
        const box = row.querySelector('.custom-goat-checkbox');
        if (this.draftBrands.includes(brand)) {
          this.draftBrands = this.draftBrands.filter(b => b !== brand);
          if (box) {
            box.classList.remove('checked-white');
            box.innerHTML = '';
          }
        } else {
          this.draftBrands.push(brand);
          if (box) {
            box.classList.add('checked-white');
            box.innerHTML = `
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            `;
          }
        }

        // Update brand count badge in filter drawer header
        const headerLine = document.querySelector('.filter-sheet-drawer .filter-section-header-line');
        if (headerLine) {
          let badge = headerLine.querySelector('.filter-count-badge');
          if (this.draftBrands.length > 0) {
            if (!badge) {
              badge = document.createElement('span');
              badge.className = 'filter-count-badge';
              headerLine.appendChild(badge);
            }
            badge.textContent = this.draftBrands.length;
          } else if (badge) {
            badge.remove();
          }
        }
      });
    });

    // Size Rectangular Buttons in Filter Sheet (In-place DOM update)
    const sheetSizeBtns = document.querySelectorAll('[data-sheet-size]');
    sheetSizeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const size = e.currentTarget.getAttribute('data-sheet-size');
        this.draftSize = size;
        sheetSizeBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });

    // Sort Buttons in Filter Sheet (In-place DOM update)
    const sheetSortBtns = document.querySelectorAll('[data-sheet-sort]');
    sheetSortBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const sort = e.currentTarget.getAttribute('data-sheet-sort');
        this.draftSort = sort;
        sheetSortBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
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
        this.activeProduct = null;
        this.updateUrl();
        this.render();
      });
    });

    // Search quick tag chip clicks
    const searchTagChips = document.querySelectorAll('.search-tag-chip');
    searchTagChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        const tag = e.currentTarget.getAttribute('data-tag');
        this.searchQuery = tag;
        const input = document.getElementById('live-search-input');
        if (input) input.value = tag;
        searchTagChips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.updateLiveSearchResults();
      });
    });

    // Live search input query (In-place update without page re-render)
    const liveInput = document.getElementById('live-search-input');

    if (liveInput) {
      liveInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.updateLiveSearchResults();
      });
    }

    // Clear live search query button
    const clearLiveBtn = document.getElementById('clear-live-search-btn');
    if (clearLiveBtn) {
      clearLiveBtn.addEventListener('click', () => {
        this.searchQuery = '';
        if (liveInput) liveInput.value = '';
        searchTagChips.forEach(c => c.classList.remove('active'));
        this.updateLiveSearchResults();
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

    // Hotbar search button
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

    // Service Filter Chips ('Все', 'Белпочта', 'Европочта') (In-place update)
    const serviceChips = document.querySelectorAll('.service-chip-btn');
    serviceChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        this.providerFilter = e.currentTarget.getAttribute('data-provider');
        serviceChips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const mapDiv = document.getElementById('ymaps-container');
        if (mapDiv) this.setupMap(mapDiv);
        const flatList = document.querySelector('.goat-flat-branch-list');
        if (flatList) {
          const items = flatList.querySelectorAll('.goat-flat-branch-item');
          items.forEach(it => {
            const provider = it.getAttribute('data-provider');
            it.style.display = (this.providerFilter === 'all' || provider === this.providerFilter) ? 'block' : 'none';
          });
        }
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

    // Branch search input (In-place filter without re-rendering drawer DOM)
    const branchSearchInput = document.getElementById('branch-search-input');
    if (branchSearchInput) {
      branchSearchInput.addEventListener('input', (e) => {
        this.branchSearchQuery = e.target.value;
        const mapDiv = document.getElementById('ymaps-container');
        if (mapDiv) this.setupMap(mapDiv);
        const flatList = document.querySelector('.goat-flat-branch-list');
        if (flatList) {
          const q = this.branchSearchQuery.toLowerCase().trim();
          const items = flatList.querySelectorAll('.goat-flat-branch-item');
          items.forEach(it => {
            const txt = it.textContent.toLowerCase();
            it.style.display = (!q || txt.includes(q)) ? 'block' : 'none';
          });
        }
      });
    }

    // Customer profile inputs persistence
    const nameInp = document.getElementById('checkout-customer-name');
    if (nameInp) {
      nameInp.addEventListener('input', (e) => {
        this.customerName = e.target.value;
        this.saveStateToLocalStorage();
      });
    }

    const phoneInp = document.getElementById('checkout-customer-phone');
    if (phoneInp) {
      phoneInp.addEventListener('input', (e) => {
        this.customerPhone = e.target.value;
        this.saveStateToLocalStorage();
      });
    }

    // Telegram Native Request Contact Button
    const reqContactBtn = document.getElementById('tg-request-contact-btn');
    if (reqContactBtn) {
      reqContactBtn.addEventListener('click', () => {
        if (window.Telegram?.WebApp?.requestContact) {
          window.Telegram.WebApp.requestContact((sent, response) => {
            console.log('[Telegram Request Contact Response]', sent, response);
            if (sent && response?.responseUnsafe?.contact?.phone_number) {
              const phone = response.responseUnsafe.contact.phone_number;
              this.customerPhone = phone;
              const inp = document.getElementById('checkout-customer-phone');
              if (inp) inp.value = phone;
              this.saveStateToLocalStorage();
              if (window.Telegram?.WebApp?.HapticFeedback) {
                window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
              }
            }
          });
        } else {
          alert('Служба запроса контактов доступна внутри официального клиента Telegram.');
        }
      });
    }

    // Delivery text tabs in GOAT checkout ('post' / 'pickup')
    const shipTabBtns = document.querySelectorAll('.ship-segment-btn, .ship-tab-rect');
    shipTabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = e.currentTarget.getAttribute('data-type');
        if (type) {
          this.deliveryType = type;
          this.saveStateToLocalStorage();
          this.render();
        }
      });
    });

    // Radio payment card clicks
    const radioCards = document.querySelectorAll('.tread-radio-card[data-payment-id]');
    radioCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const pmId = e.currentTarget.getAttribute('data-payment-id');
        this.paymentMethod = pmId;
        this.saveStateToLocalStorage();
        this.render();
      });
    });

    // Checkout form submit -> TRIGGER PAYMENT GATEWAY / TELEGRAM PAYMENTS
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nInp = document.getElementById('checkout-customer-name');
        if (nInp) this.customerName = nInp.value;
        const pInp = document.getElementById('checkout-customer-phone');
        if (pInp) this.customerPhone = pInp.value;
        this.saveStateToLocalStorage();

        this.sendCartEvent('order_submitted', {
          payment_method: this.paymentMethod,
          delivery_type: this.deliveryType
        });

        if (window.Telegram?.WebApp?.HapticFeedback) {
          window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
        }

        if (window.Telegram?.WebApp?.openInvoice && window.TREAD_TELEGRAM_INVOICE_URL) {
          window.Telegram.WebApp.openInvoice(window.TREAD_TELEGRAM_INVOICE_URL, (status) => {
            if (status === 'paid') {
              if (window.Telegram?.WebApp?.HapticFeedback) {
                window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
              }
              this.cartItems = [];
              this.saveStateToLocalStorage();
              this.setTab('success');
            } else {
              if (window.Telegram?.WebApp?.HapticFeedback) {
                window.Telegram.WebApp.HapticFeedback.notificationOccurred('warning');
              }
            }
          });
        } else {
          this.openPaymentGateway();
        }
      });
    }

    // Payment modal submit handlers
    const handlePaymentComplete = (e) => {
      if (e) e.preventDefault();
      if (this.isPaymentProcessing) return;
      this.isPaymentProcessing = true;
      this.render();

      if (window.Telegram?.WebApp?.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
      }

      if (this.paymentMethod === 'sbp' && window.TREAD_SBP_PAYMENT_URL) {
        if (window.Telegram?.WebApp?.openLink) {
          window.Telegram.WebApp.openLink(window.TREAD_SBP_PAYMENT_URL);
        } else {
          window.open(window.TREAD_SBP_PAYMENT_URL, '_blank');
        }
      }

      setTimeout(() => {
        this.isPaymentProcessing = false;
        this.isPaymentModalOpen = false;
        this.cartItems = [];
        this.saveStateToLocalStorage();
        this.activeTab = 'success';
        if (window.Telegram?.WebApp?.HapticFeedback) {
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
        }
        this.render();
      }, 800);
    };

    const submitTreadPay = document.getElementById('submit-treadpay-btn');
    if (submitTreadPay) submitTreadPay.addEventListener('click', handlePaymentComplete);

    const submitSbp = document.getElementById('submit-sbp-payment-btn');
    if (submitSbp) submitSbp.addEventListener('click', handlePaymentComplete);

    const submitErip = document.getElementById('submit-erip-payment-btn');
    if (submitErip) submitErip.addEventListener('click', handlePaymentComplete);

    const submitReceipt = document.getElementById('submit-receipt-payment-btn');
    if (submitReceipt) submitReceipt.addEventListener('click', handlePaymentComplete);

    const cardForm = document.getElementById('payment-card-form');
    if (cardForm) cardForm.addEventListener('submit', handlePaymentComplete);

    // About back button
    const aboutBackBtn = document.getElementById('about-back-btn');
    if (aboutBackBtn) {
      aboutBackBtn.addEventListener('click', () => {
        this.setTab('catalog');
      });
    }

    // About menu item clicks
    const aboutItemRows = document.querySelectorAll('[data-about-id]');
    aboutItemRows.forEach(row => {
      row.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-about-id');
        if (id === 'telegram') {
          window.open('https://t.me/tread_store', '_blank');
        } else if (id === 'support') {
          window.open('https://t.me/tread_support', '_blank');
        } else if (id === 'privacy') {
          window.open('https://tread.store/privacy', '_blank');
        } else if (id === 'terms') {
          window.open('https://tread.store/terms', '_blank');
        } else if (id === 'faq') {
          this.activeInfoSheet = 'faq';
          this.render();
        }
      });
    });

    // Close Info Sheet Modal handlers
    const closeInfoBtn = document.getElementById('close-info-sheet-btn');
    if (closeInfoBtn) {
      closeInfoBtn.addEventListener('click', () => {
        this.activeInfoSheet = null;
        this.render();
      });
    }

    const infoOverlay = document.getElementById('info-sheet-overlay');
    if (infoOverlay) {
      infoOverlay.addEventListener('click', () => {
        this.activeInfoSheet = null;
        this.render();
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

    // Size chips in sheet (In-place update without re-rendering modal)
    const sizeChips = document.querySelectorAll('.size-chip');
    sizeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (!chip.hasAttribute('disabled')) {
          this.selectedSize = chip.getAttribute('data-size');
          sizeChips.forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
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
