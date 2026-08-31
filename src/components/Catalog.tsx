import React, { useState } from 'react';
import { MOCK_PRODUCTS, BRANDS } from '../data/products';
import { ProductSheet, ProductDetail } from './ProductSheet';

export const CatalogView: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('catalog');
  const [cartCount, setCartCount] = useState<number>(2);

  // Active product for bottom sheet
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesBrand =
      selectedBrand === 'Все' ||
      product.brand.toLowerCase() === selectedBrand.toLowerCase();
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.size.toLowerCase().includes(query);
    return matchesBrand && matchesQuery;
  });

  const handleAddToCart = (_product: ProductDetail, _size: string) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="mobile-container bg-[#0A0A0A] text-[#EDEDED] min-h-screen max-w-[390px] mx-auto relative pb-[90px]">
      {/* HEADER */}
      <header className="app-header bg-[#0A0A0A]/95 backdrop-blur-md sticky top-0 z-40 border-b border-white/10 p-3 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg viewBox="0 0 160 32" fill="none" className="h-6 w-auto">
              <g fill="#FF5500">
                <rect x="2" y="6" width="5" height="20" rx="1.5" />
                <rect x="10" y="3" width="5" height="26" rx="1.5" />
                <rect x="18" y="8" width="5" height="16" rx="1.5" />
              </g>
              <text
                x="34"
                y="23"
                fill="#F5F5F5"
                fontFamily="Unbounded, sans-serif"
                fontSize="18"
                fontWeight="800"
                letterSpacing="0.04em"
              >
                TREAD
              </text>
            </svg>
          </div>
        </div>

        {/* SEARCH BOX */}
        <div className="relative w-full">
          <input
            type="text"
            className="w-full h-10 bg-[#141414] border border-white/10 rounded-lg pl-9 pr-8 text-[13px] text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-white/30"
            placeholder="Поиск модели или артикула"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* BRAND FILTER CHIPS */}
        <div className="overflow-x-auto no-scrollbar -mx-3 px-3">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {BRANDS.map((brand) => {
              const isActive = selectedBrand === brand;
              return (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  style={{
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                    color: isActive ? '#000000' : '#A3A3A3',
                    border: isActive
                      ? '1px solid #FFFFFF'
                      : '1px solid rgba(255, 255, 255, 0.15)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease-in-out',
                  }}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* CATALOG GRID */}
      <main className="p-3">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => setSelectedProduct(product as ProductDetail)}
                style={{
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                {/* TOP BLOCK */}
                <div style={{ padding: '12px 12px 0' }}>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#F5F5F5',
                      lineHeight: '1.2',
                    }}
                  >
                    {product.size}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#737373',
                      marginTop: '2px',
                    }}
                  >
                    {product.condition}
                  </div>
                </div>

                {/* SNEAKER PHOTO */}
                <div
                  style={{
                    height: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* INFO BLOCK */}
                <div style={{ padding: '0 12px 12px' }}>
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#737373',
                      marginBottom: '2px',
                    }}
                  >
                    {product.dateCategory || '2024 • Sneaker'}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: '#EDEDED',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      height: '31px',
                    }}
                  >
                    {product.name}
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    <div
                      style={{
                        fontSize: '9px',
                        color: '#737373',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Best Price
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        fontVariantNumeric: 'tabular-nums',
                        color: '#FFFFFF',
                      }}
                    >
                      {product.priceFormatted}
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product as ProductDetail);
                  }}
                  style={{
                    width: '100%',
                    height: '36px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#EDEDED',
                    cursor: 'pointer',
                  }}
                  className="hover:bg-neutral-900 transition-colors"
                >
                  В корзину
                </button>
              </article>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="py-12 px-4 text-center">
            <h2
              style={{
                fontFamily: 'Unbounded, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: '#F5F5F5',
              }}
            >
              Ничего не найдено
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: '#737373',
                marginTop: '6px',
                marginBottom: '16px',
              }}
            >
              Попробуйте сбросить фильтр или выберите другую модель.
            </p>
            <button
              onClick={() => {
                setSelectedBrand('Все');
                setSearchQuery('');
              }}
              style={{
                backgroundColor: '#FF5500',
                color: '#FFFFFF',
                borderRadius: '8px',
                height: '40px',
                padding: '0 20px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              Сбросить фильтр
            </button>
          </div>
        )}
      </main>

      {/* DETAILED PRODUCT SHEET MODAL */}
      <ProductSheet
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* HOTBAR CAPSULE */}
      <nav
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          width: 'fit-content',
          padding: '6px 14px',
          backgroundColor: 'rgba(18, 18, 18, 0.65)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <button
          onClick={() => setActiveTab('catalog')}
          aria-label="Каталог"
          style={{
            background: 'transparent',
            border: 'none',
            color: activeTab === 'catalog' ? '#FFFFFF' : '#737373',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5"/>
            <rect x="14" y="3" width="7" height="7" rx="1.5"/>
            <rect x="14" y="14" width="7" height="7" rx="1.5"/>
            <rect x="3" y="14" width="7" height="7" rx="1.5"/>
          </svg>
        </button>

        <button
          onClick={() => setActiveTab('search')}
          aria-label="Поиск"
          style={{
            background: 'transparent',
            border: 'none',
            color: activeTab === 'search' ? '#FFFFFF' : '#737373',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"/>
            <path d="M16 16L20 20"/>
          </svg>
        </button>

        <button
          onClick={() => setActiveTab('cart')}
          aria-label="Корзина"
          style={{
            background: 'transparent',
            border: 'none',
            color: activeTab === 'cart' ? '#FFFFFF' : '#737373',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'color 0.2s ease',
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"/>
              <path d="M3 6H21"/>
              <path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"/>
            </svg>
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#FF5500',
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontVariantNumeric: 'tabular-nums',
                  lineHeight: 1,
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          aria-label="Инфо"
          style={{
            background: 'transparent',
            border: 'none',
            color: activeTab === 'profile' ? '#FFFFFF' : '#737373',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default CatalogView;
