import React from 'react';
import { ProductDetail } from './ProductSheet';

export interface CartItem {
  product: ProductDetail;
  selectedSize: string;
  quantity: number;
}

interface CartViewProps {
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onClose: () => void;
  onCheckout: () => void;
  onFilterBrand?: (brand: string) => void;
}

export const CartView: React.FC<CartViewProps> = ({
  items,
  onRemoveItem,
  onClose,
  onCheckout,
  onFilterBrand,
}) => {
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalPriceFormatted = new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';

  const handleChipClick = (brand: string) => {
    if (onFilterBrand) {
      onFilterBrand(brand);
    } else {
      onClose();
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#0A0A0A',
        minHeight: '100vh',
        color: '#F5F5F5',
        fontFamily: 'Golos Text, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: items.length > 0 ? '160px' : '0px',
      }}
    >
      {/* 1. CLEAN HEADER */}
      <div
        style={{
          padding: '16px 16px 14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <h1
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#F5F5F5',
            margin: 0,
          }}
        >
          Корзина
        </h1>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#737373',
            fontSize: '13px',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'Golos Text, sans-serif',
          }}
          className="hover:text-white"
        >
          Закрыть
        </button>
      </div>

      {/* CART ITEMS BODY */}
      <div style={{ padding: '0 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {items.length > 0 ? (
          /* CLEAN ITEM LIST ONLY (NO SERVICE BOXES OR STUBS BELOW) */
          <div>
            {items.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* LEFT TEXT BLOCK */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '62%' }}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#F5F5F5',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.product.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#737373', marginTop: '2px' }}>
                    Размер: {item.selectedSize}
                  </div>
                  <div style={{ fontSize: '11px', color: '#737373' }}>
                    Состояние: {item.product.condition} (в коробке)
                  </div>
                  <div
                    style={{
                      fontFamily: 'Unbounded, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginTop: 'auto',
                      paddingTop: '6px',
                    }}
                    className="tabular-nums"
                  >
                    {item.product.priceFormatted}
                  </div>
                </div>

                {/* RIGHT PHOTO (72x72px on #141414) & DELETE LINK PRESSED TO BOTTOM RIGHT */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '2px',
                      backgroundColor: '#141414',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                    }}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#737373',
                      fontSize: '11px',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    className="hover:text-white"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* REDESIGNED EMPTY CART STATE */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '60vh',
              textAlign: 'center',
              padding: '0 24px',
              margin: 'auto 0',
            }}
          >
            <h2
              style={{
                fontFamily: 'Unbounded, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#F5F5F5',
                margin: '0 0 8px 0',
              }}
            >
              Корзина пуста
            </h2>
            <p
              style={{
                fontFamily: 'Golos Text, sans-serif',
                fontSize: '12px',
                color: '#737373',
                maxWidth: '260px',
                marginTop: '0',
                marginBottom: '24px',
                lineHeight: 1.4,
              }}
            >
              Перейдите в каталог, чтобы выбрать оригинальную пару
            </p>

            <button
              onClick={onClose}
              style={{
                height: '44px',
                padding: '0 32px',
                backgroundColor: '#FF5500',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '2px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'opacity 0.2s ease',
              }}
              className="hover:opacity-90 active:scale-98"
            >
              В КАТАЛОГ
            </button>

            {/* QUICK BRAND SUGGESTIONS */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '10px',
                  color: '#525252',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                  fontFamily: 'Golos Text, sans-serif',
                }}
              >
                Популярные разделы:
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => handleChipClick('Jordan')}
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'transparent',
                    color: '#A3A3A3',
                    fontSize: '12px',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontFamily: 'Golos Text, sans-serif',
                  }}
                  className="hover:border-white hover:text-white"
                >
                  Jordan
                </button>
                <button
                  onClick={() => handleChipClick('Nike')}
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'transparent',
                    color: '#A3A3A3',
                    fontSize: '12px',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontFamily: 'Golos Text, sans-serif',
                  }}
                  className="hover:border-white hover:text-white"
                >
                  Nike Dunk
                </button>
                <button
                  onClick={() => handleChipClick('New Balance')}
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'transparent',
                    color: '#A3A3A3',
                    fontSize: '12px',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontFamily: 'Golos Text, sans-serif',
                  }}
                  className="hover:border-white hover:text-white"
                >
                  New Balance
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FIXED BOTTOM CHECKOUT BLOCK */}
      {items.length > 0 && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '390px',
            backgroundColor: '#0A0A0A',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '14px 16px',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* MINI ESTIMATE BREAKDOWN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#737373',
              }}
            >
              <span>Товары ({totalCount} шт.)</span>
              <span>{totalPriceFormatted}</span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#737373',
              }}
            >
              <span>Доставка</span>
              <span>Бесплатно</span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '4px',
              }}
            >
              <span style={{ fontSize: '13px', color: '#F5F5F5', fontWeight: 500 }}>Итого к оплате</span>
              <span
                style={{
                  fontFamily: 'Unbounded, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
                className="tabular-nums"
              >
                {totalPriceFormatted}
              </span>
            </div>
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            onClick={onCheckout}
            style={{
              width: '100%',
              height: '48px',
              backgroundColor: '#FF5500',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s ease',
            }}
            className="hover:opacity-90 active:scale-98"
          >
            ПЕРЕЙТИ К ОФОРМЛЕНИЮ
          </button>
        </div>
      )}
    </div>
  );
};
