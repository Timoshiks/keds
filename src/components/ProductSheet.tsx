import React, { useState, useRef } from 'react';

export interface SizeOption {
  eu: string;
  us: string;
  inStock: boolean;
}

export interface ProductSpecs {
  fit: string;
  upper: string;
  cushioning?: string;
  sole?: string;
  kit: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  brand: string;
  sku: string;
  releaseYear: string;
  size: string;
  condition: string;
  price: number;
  priceFormatted: string;
  image: string;
  images?: string[];
  category: string;
  specs?: ProductSpecs;
  sizes: SizeOption[];
}

interface ProductSheetProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductDetail, selectedSize: string) => void;
}

export const ProductSheet: React.FC<ProductSheetProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (!isOpen || !product) return null;

  const defaultSize = product.sizes.find((s) => s.inStock)?.eu || product.sizes[0]?.eu || '42 EU';
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const carouselImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      if (width > 0) {
        const newIndex = Math.round(scrollPosition / width);
        setActiveSlide(newIndex);
      }
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize);
    onClose();
  };

  const specs = product.specs || {
    fit: 'True to size (в размер)',
    upper: 'Дышащая сетка, синтетическая кожа',
    cushioning: 'ASICS GEL Technology',
    kit: 'Оригинальный бокс',
  };

  return (
    <>
      {/* SEMI-TRANSPARENT BACKDROP */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 60,
        }}
        onClick={onClose}
      />

      {/* BOTTOM SHEET CONTAINER (80vh fixed height) */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '390px',
          height: '80vh',
          backgroundColor: '#141414',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          zIndex: 70,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.8)',
          overflow: 'hidden',
        }}
      >
        {/* DRAG HANDLE */}
        <div style={{ padding: '10px 16px 4px 16px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <div
            style={{
              width: '36px',
              height: '4px',
              borderRadius: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
          />
        </div>

        {/* SCROLLABLE BODY CONTENT */}
        <div style={{ padding: '8px 16px 16px 16px', overflowY: 'auto', flex: 1 }}>
          {/* PHOTO CAROUSEL GALLERY (~210px height) */}
          <div style={{ marginBottom: '12px' }}>
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                height: '210px',
                width: '100%',
              }}
            >
              {carouselImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: '0 0 100%',
                    width: '100%',
                    height: '100%',
                    scrollSnapAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`${product.name} - angle ${idx + 1}`}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.6))',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* PAGINATION INDICATORS */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                marginTop: '6px',
              }}
            >
              {carouselImages.map((_, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <div
                    key={idx}
                    style={{
                      width: isActive ? '16px' : '4px',
                      height: '4px',
                      borderRadius: isActive ? '2px' : '50%',
                      backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.2s ease',
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* MODEL TITLE */}
          <h2
            style={{
              fontFamily: 'Golos Text, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#F5F5F5',
              margin: '0 0 4px 0',
              lineHeight: 1.3,
            }}
          >
            {product.name}
          </h2>

          {/* MONOCHROME METADATA: FLEX GAP-4 (16px), 11px, #737373 */}
          <div
            style={{
              fontSize: '11px',
              color: '#737373',
              marginBottom: '16px',
              fontFamily: 'Golos Text, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span>SKU: {product.sku}</span>
            <span>Box: Original / {product.condition}</span>
          </div>

          {/* SIZE CHIPS ROW */}
          <div style={{ marginBottom: '16px' }}>
            <div
              style={{
                fontSize: '11px',
                color: '#737373',
                marginBottom: '8px',
                fontWeight: 500,
                fontFamily: 'Golos Text, sans-serif',
              }}
            >
              Выберите размер (EU):
            </div>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                paddingBottom: '2px',
              }}
            >
              {product.sizes.map((sizeObj) => {
                const isSelected = selectedSize === sizeObj.eu;
                const isOutOfStock = !sizeObj.inStock;

                return (
                  <button
                    key={sizeObj.eu}
                    disabled={isOutOfStock}
                    onClick={() => setSelectedSize(sizeObj.eu)}
                    style={{
                      flex: '0 0 auto',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 500,
                      textAlign: 'center',
                      fontFamily: 'Golos Text, sans-serif',
                      border: isSelected
                        ? '1px solid #FFFFFF'
                        : '1px solid rgba(255, 255, 255, 0.15)',
                      backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                      color: isSelected
                        ? '#000000'
                        : isOutOfStock
                        ? '#525252'
                        : '#A3A3A3',
                      textDecoration: isOutOfStock ? 'line-through' : 'none',
                      cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                      opacity: isOutOfStock ? 0.35 : 1,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {sizeObj.eu}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STRUCTURED SPECIFICATIONS LIST */}
          <div style={{ marginBottom: '16px' }}>
            <div
              style={{
                fontSize: '11px',
                color: '#737373',
                marginBottom: '4px',
                fontWeight: 500,
                fontFamily: 'Golos Text, sans-serif',
              }}
            >
              Характеристики и детали:
            </div>

            <div style={{ fontFamily: 'Golos Text, sans-serif' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '9px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span style={{ color: '#737373', fontSize: '12px' }}>Посадка</span>
                <span style={{ color: '#EDEDED', fontSize: '12px', fontWeight: 500 }}>
                  {specs.fit}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '9px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span style={{ color: '#737373', fontSize: '12px' }}>Материал верха</span>
                <span style={{ color: '#EDEDED', fontSize: '12px', fontWeight: 500 }}>
                  {specs.upper}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '9px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span style={{ color: '#737373', fontSize: '12px' }}>Амортизация</span>
                <span style={{ color: '#EDEDED', fontSize: '12px', fontWeight: 500 }}>
                  {specs.cushioning || specs.sole || 'ASICS GEL Technology'}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '9px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span style={{ color: '#737373', fontSize: '12px' }}>Комплектация</span>
                <span style={{ color: '#EDEDED', fontSize: '12px', fontWeight: 500 }}>
                  {specs.kit}
                </span>
              </div>
            </div>
          </div>

          {/* SERVICE BLOCK ROWS */}
          <div style={{ marginBottom: '16px' }}>
            <div
              style={{
                fontSize: '11px',
                color: '#737373',
                marginBottom: '4px',
                fontWeight: 500,
                fontFamily: 'Golos Text, sans-serif',
              }}
            >
              Сервис и условия:
            </div>

            <div style={{ fontFamily: 'Golos Text, sans-serif' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '9px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span style={{ color: '#737373', fontSize: '12px' }}>Доставка</span>
                <span style={{ color: '#EDEDED', fontSize: '12px', fontWeight: 500 }}>
                  Экспресс СДЭК (2–4 дня)
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '9px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span style={{ color: '#737373', fontSize: '12px' }}>Примерка</span>
                <span style={{ color: '#EDEDED', fontSize: '12px', fontWeight: 500 }}>
                  Доступна перед выкупом
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FIXED FOOTER */}
        <div
          style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#141414',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#FFFFFF',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {product.priceFormatted}
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              backgroundColor: '#FF5500',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              height: '44px',
              padding: '0 24px',
              fontFamily: 'Golos Text, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
            }}
            className="hover:opacity-90 active:scale-95"
          >
            В корзину
          </button>
        </div>
      </div>
    </>
  );
};
