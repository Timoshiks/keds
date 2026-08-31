import React, { useState, useEffect, useRef } from 'react';
import { CartItem } from './CartView';

interface CheckoutViewProps {
  items: CartItem[];
  onBack: () => void;
  onSuccess: (orderId: string) => void;
}

export type DeliveryProvider = 'belpost' | 'evropost';

export interface PostBranch {
  id: string;
  provider: DeliveryProvider;
  providerName: string;
  code: string;
  address: string;
  city: string;
  hours: string;
  lat: number;
  lng: number;
}

export const BELARUS_POST_BRANCHES: PostBranch[] = [
  // МИНСК
  {
    id: 'bp-minsk-1',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '220050',
    address: 'пр-т Независимости, 10',
    city: 'Минск',
    hours: 'Пн-Вс 08:00–21:00',
    lat: 53.8978,
    lng: 27.5502,
  },
  {
    id: 'bp-minsk-2',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '220004',
    address: 'ул. Немига, 8',
    city: 'Минск',
    hours: 'Пн-Сб 09:00–20:00',
    lat: 53.9038,
    lng: 27.5518,
  },
  {
    id: 'ep-minsk-1',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 48',
    address: 'ул. Немига, 3',
    city: 'Минск',
    hours: 'Ежедневно 09:00–21:00',
    lat: 53.9042,
    lng: 27.5531,
  },
  {
    id: 'ep-minsk-2',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 12',
    address: 'пр-т Победителей, 9',
    city: 'Минск',
    hours: 'Ежедневно 09:00–21:00',
    lat: 53.9085,
    lng: 27.5480,
  },

  // ГОМЕЛЬ
  {
    id: 'bp-gomel-1',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '246050',
    address: 'пр-т Ленина, 1',
    city: 'Гомель',
    hours: 'Пн-Сб 08:00–19:00',
    lat: 52.4251,
    lng: 31.0143,
  },
  {
    id: 'bp-gomel-2',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '246000',
    address: 'ул. Советская, 8',
    city: 'Гомель',
    hours: 'Пн-Сб 08:00–20:00',
    lat: 52.4285,
    lng: 31.0112,
  },
  {
    id: 'ep-gomel-1',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 77',
    address: 'ул. Советская, 60',
    city: 'Гомель',
    hours: 'Ежедневно 09:00–21:00',
    lat: 52.4389,
    lng: 31.0021,
  },
  {
    id: 'ep-gomel-2',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 105',
    address: 'ул. Барыкина, 80',
    city: 'Гомель',
    hours: 'Ежедневно 09:00–21:00',
    lat: 52.4190,
    lng: 30.9650,
  },

  // МОЗЫРЬ
  {
    id: 'bp-mozyr-1',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '247760',
    address: 'ул. Советская, 120',
    city: 'Мозырь',
    hours: 'Пн-Сб 08:00–20:00, Вс 09:00–17:00',
    lat: 52.0496,
    lng: 29.2543,
  },
  {
    id: 'bp-mozyr-2',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '247762',
    address: 'б-р Дружбы, 14',
    city: 'Мозырь',
    hours: 'Пн-Сб 09:00–19:00',
    lat: 52.0298,
    lng: 29.2415,
  },
  {
    id: 'ep-mozyr-1',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 112',
    address: 'б-р Юности, 32',
    city: 'Мозырь',
    hours: 'Ежедневно 09:00–21:00',
    lat: 52.0325,
    lng: 29.2310,
  },

  // ГРОДНО
  {
    id: 'bp-grodno-1',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '230023',
    address: 'ул. Карла Маркса, 29',
    city: 'Гродно',
    hours: 'Пн-Сб 08:00–20:00',
    lat: 53.6778,
    lng: 23.8321,
  },
  {
    id: 'ep-grodno-1',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 35',
    address: 'ул. Советская, 18',
    city: 'Гродно',
    hours: 'Ежедневно 09:00–21:00',
    lat: 53.6812,
    lng: 23.8315,
  },

  // БРЕСТ
  {
    id: 'bp-brest-1',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '224005',
    address: 'ул. Ленина, 32',
    city: 'Брест',
    hours: 'Пн-Сб 08:00–20:00',
    lat: 52.0935,
    lng: 23.6872,
  },
  {
    id: 'ep-brest-1',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 54',
    address: 'ул. Советская, 85',
    city: 'Брест',
    hours: 'Ежедневно 09:00–21:00',
    lat: 52.0901,
    lng: 23.6948,
  },

  // ВИТЕБСК
  {
    id: 'bp-vitebsk-1',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '210015',
    address: 'пр-т Черняховского, 6',
    city: 'Витебск',
    hours: 'Пн-Сб 08:00–20:00',
    lat: 55.1823,
    lng: 30.2031,
  },
  {
    id: 'ep-vitebsk-1',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 88',
    address: 'ул. Замковая, 4',
    city: 'Витебск',
    hours: 'Ежедневно 09:00–21:00',
    lat: 55.1915,
    lng: 30.2045,
  },

  // МОГИЛЕВ
  {
    id: 'bp-mogilev-1',
    provider: 'belpost',
    providerName: 'Белпочта',
    code: '212030',
    address: 'Первомайская ул., 28',
    city: 'Могилев',
    hours: 'Пн-Сб 08:00–20:00',
    lat: 53.9012,
    lng: 30.3389,
  },
  {
    id: 'ep-mogilev-1',
    provider: 'evropost',
    providerName: 'Европочта',
    code: 'ОПС № 63',
    address: 'ул. Космонавтов, 27',
    city: 'Могилев',
    hours: 'Ежедневно 09:00–21:00',
    lat: 53.9065,
    lng: 30.3150,
  },
];

export const CheckoutView: React.FC<CheckoutViewProps> = ({
  items,
  onBack,
  onSuccess,
}) => {
  const [deliveryType, setDeliveryType] = useState<'post' | 'pickup'>('post');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');

  // Selected post branch state (Default to Belposhta Mozyr 247760)
  const [selectedBranch, setSelectedBranch] = useState<PostBranch | null>(BELARUS_POST_BRANCHES[8]);
  const [isBranchDrawerOpen, setIsBranchDrawerOpen] = useState(false);

  // Drawer internal states
  const [drawerMode, setDrawerMode] = useState<'map' | 'list'>('map');
  const [providerFilter, setProviderFilter] = useState<'all' | 'belpost' | 'evropost'>('all');
  const [drawerSearch, setDrawerSearch] = useState('');
  const [highlightedBranch, setHighlightedBranch] = useState<PostBranch | null>(BELARUS_POST_BRANCHES[8]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const ymapsInstanceRef = useRef<any>(null);

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalPriceFormatted = new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';

  // Filtered branches list in real time
  const filteredBranches = BELARUS_POST_BRANCHES.filter(branch => {
    const matchesProvider = providerFilter === 'all' || branch.provider === providerFilter;
    const q = drawerSearch.toLowerCase().trim();
    const matchesQuery = !q || 
      branch.code.toLowerCase().includes(q) || 
      branch.address.toLowerCase().includes(q) || 
      branch.city.toLowerCase().includes(q);
    return matchesProvider && matchesQuery;
  });

  // Yandex Maps Custom Placemarks Layout (GOAT style: 28x28px circular markers)
  useEffect(() => {
    if (!isBranchDrawerOpen || drawerMode !== 'map') return;

    let isMounted = true;
    let timerId: any = null;

    const loadYmaps = () => {
      if ((window as any).ymaps) {
        (window as any).ymaps.ready(initMap);
        return;
      }
      const existingScript = document.getElementById('ymaps-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'ymaps-script';
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        script.onload = () => {
          if ((window as any).ymaps && isMounted) {
            (window as any).ymaps.ready(initMap);
          }
        };
        document.head.appendChild(script);
      } else {
        timerId = setInterval(() => {
          if ((window as any).ymaps && isMounted) {
            clearInterval(timerId);
            (window as any).ymaps.ready(initMap);
          }
        }, 100);
      }
    };

    const initMap = () => {
      if (!isMounted || !mapContainerRef.current) return;
      if (ymapsInstanceRef.current) {
        ymapsInstanceRef.current.destroy();
        ymapsInstanceRef.current = null;
      }

      const ymaps = (window as any).ymaps;
      const initialCenter = highlightedBranch ? [highlightedBranch.lat, highlightedBranch.lng] : [53.9006, 27.5590];

      const map = new ymaps.Map(mapContainerRef.current, {
        center: initialCenter,
        zoom: highlightedBranch ? 13 : 11,
        controls: [],
      });

      ymapsInstanceRef.current = map;

      filteredBranches.forEach((branch) => {
        const isSelected = highlightedBranch?.id === branch.id;
        const textLabel = branch.provider === 'belpost' ? 'БП' : 'EP';

        // GOAT custom HTML layout for placemark
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
          if (isMounted) {
            setHighlightedBranch(branch);
            map.panTo([branch.lat, branch.lng], { flying: true });
          }
        });

        map.geoObjects.add(placemark);
      });
    };

    loadYmaps();

    return () => {
      isMounted = false;
      if (timerId) clearInterval(timerId);
      if (ymapsInstanceRef.current) {
        ymapsInstanceRef.current.destroy();
        ymapsInstanceRef.current = null;
      }
    };
  }, [isBranchDrawerOpen, drawerMode, providerFilter, drawerSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (deliveryType === 'post' && !selectedBranch) {
      setIsBranchDrawerOpen(true);
      return;
    }
    const orderId = `TR-${Math.floor(10000 + Math.random() * 90000)}`;
    onSuccess(orderId);
  };

  const handleConfirmBranch = (branch: PostBranch) => {
    setSelectedBranch(branch);
    setIsBranchDrawerOpen(false);
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
        paddingBottom: '170px',
      }}
    >
      {/* 1. HEADER (CENTERED TITLE 14PX FONT-MEDIUM, BACK ARROW LEFT) */}
      <div
        style={{
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#0A0A0A',
          zIndex: 40,
        }}
      >
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            left: '12px',
            background: 'transparent',
            border: 'none',
            color: '#737373',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="hover:text-white"
          aria-label="Назад в корзину"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
        </button>

        <h1
          style={{
            fontFamily: 'Golos Text, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#F5F5F5',
            margin: 0,
          }}
        >
          Оформление заказа
        </h1>
      </div>

      {/* 2. FORM CONTAINER */}
      <form onSubmit={handleSubmit} style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* SECTION 1: RECIPIENT */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '12px', color: '#A3A3A3', fontWeight: 500, marginBottom: '12px' }}>
            Получатель
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input
              type="text"
              placeholder="ФИО получателя"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 0,
                padding: '12px 0 8px 0',
                fontSize: '13px',
                color: '#FFFFFF',
                outline: 'none',
                fontFamily: 'Golos Text, sans-serif',
              }}
              className="goat-underline-input"
            />

            <input
              type="tel"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 0,
                padding: '12px 0 8px 0',
                fontSize: '13px',
                color: '#FFFFFF',
                outline: 'none',
                fontFamily: 'Golos Text, sans-serif',
              }}
              className="goat-underline-input"
            />

            <input
              type="text"
              placeholder="Telegram @username"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 0,
                padding: '12px 0 8px 0',
                fontSize: '13px',
                color: '#FFFFFF',
                outline: 'none',
                fontFamily: 'Golos Text, sans-serif',
              }}
              className="goat-underline-input"
            />
          </div>
        </div>

        {/* SECTION 2: DELIVERY METHOD ('ПОЧТА' / 'САМОВЫВОЗ') */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24px' }}>
          <div style={{ fontSize: '12px', color: '#A3A3A3', fontWeight: 500, marginBottom: '12px' }}>
            Способ получения
          </div>

          {/* TABS: 'ПОЧТА' AND 'САМОВЫВОЗ' */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '2px 0 8px 0' }}>
            <button
              type="button"
              onClick={() => setDeliveryType('post')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: deliveryType === 'post' ? '2px solid #FFFFFF' : '2px solid transparent',
                color: deliveryType === 'post' ? '#FFFFFF' : '#737373',
                padding: '4px 0 6px 0',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'Golos Text, sans-serif',
                transition: 'all 0.15s ease',
              }}
            >
              Почта
            </button>

            <button
              type="button"
              onClick={() => setDeliveryType('pickup')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: deliveryType === 'pickup' ? '2px solid #FFFFFF' : '2px solid transparent',
                color: deliveryType === 'pickup' ? '#FFFFFF' : '#737373',
                padding: '4px 0 6px 0',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'Golos Text, sans-serif',
                transition: 'all 0.15s ease',
              }}
            >
              Самовывоз
            </button>
          </div>

          {/* DYNAMIC CONTENT DEPENDING ON TAB */}
          {deliveryType === 'post' ? (
            /* CLICKABLE ROW FOR SELECTING POST BRANCH */
            <div
              onClick={() => setIsBranchDrawerOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer',
              }}
              className="hover:opacity-90"
            >
              {selectedBranch ? (
                /* STATE: BRANCH SELECTED */
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="mono-provider-badge">
                        {selectedBranch.providerName}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: 500, color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {selectedBranch.code} — г. {selectedBranch.city}, {selectedBranch.address}
                      </span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#737373' }}>
                      {selectedBranch.hours}
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: '#737373', cursor: 'pointer', flexShrink: 0 }} className="hover:text-white">
                    Изменить
                  </span>
                </div>
              ) : (
                /* STATE: BRANCH NOT SELECTED */
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span style={{ fontSize: '13px', color: '#EDEDED' }}>
                      Выбрать отделение (Белпочта / Европочта)
                    </span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              )}
            </div>
          ) : (
            /* PICKUP TAB: STATIC SINGLE LINE SHOWROOM TEXT */
            <div
              style={{
                fontSize: '12px',
                color: '#A3A3A3',
                padding: '12px 0',
                fontFamily: 'Golos Text, sans-serif',
              }}
            >
              Шоурум: ул. Ленина, 10 (ежедневно с 11:00 до 21:00)
            </div>
          )}
        </div>

        {/* SECTION 3: COMPACT ORDER COMPOSITION */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24px' }}>
          <div style={{ fontSize: '12px', color: '#A3A3A3', fontWeight: 500, marginBottom: '8px' }}>
            Состав заказа
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {items.map((item, idx) => (
              <div
                key={`${item.product.id}-${idx}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '2px 0',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '2px',
                    backgroundColor: '#141414',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    padding: '3px',
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#737373',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    flex: 1,
                  }}
                >
                  <span style={{ color: '#EDEDED', fontWeight: 500 }}>{item.product.name}</span> • {item.selectedSize}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FIXED BOTTOM CHECKOUT BAR */}
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
          {/* ESTIMATE BREAKDOWN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'Golos Text, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#737373' }}>
              <span>Товары ({totalCount} шт.)</span>
              <span>{totalPriceFormatted}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#737373' }}>
              <span>Доставка</span>
              <span>Бесплатно</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px' }}>
              <span style={{ fontSize: '13px', color: '#F5F5F5', fontWeight: 500 }}>Итого</span>
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

          {/* CLEAN BUTTON TEXT: ОФОРМИТЬ ЗАКАЗ */}
          <button
            type="submit"
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
              fontFamily: 'Golos Text, sans-serif',
            }}
            className="hover:opacity-90 active:scale-98"
          >
            ОФОРМИТЬ ЗАКАЗ
          </button>
        </div>
      </form>

      {/* FULLSCREEN GOAT REFERENCE LOCATION DRAWER */}
      {isBranchDrawerOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: '#0A0A0A',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '390px',
            margin: '0 auto',
          }}
        >
          {/* 1. HEADER (FLEX ITEMS-CENTER GAP-3 PX-4 PY-3 WITH BACK ARROW + TITLE) */}
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: '#0A0A0A',
              zIndex: 50,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setIsBranchDrawerOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#737373',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
                className="hover:text-white"
                aria-label="Назад"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5"/>
                  <path d="M12 19l-7-7 7-7"/>
                </svg>
              </button>

              <h2 style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F5F5F5', margin: 0 }}>
                Выбор отделения почты
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setDrawerMode(drawerMode === 'map' ? 'list' : 'map')}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#737373',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'Golos Text, sans-serif',
              }}
              className="hover:text-white"
            >
              {drawerMode === 'map' ? 'Список' : 'Карта'}
            </button>
          </div>

          {/* MAIN DRAWER BODY */}
          {drawerMode === 'map' ? (
            /* MAP MODE CONTAINER */
            <div style={{ position: 'relative', flex: 1, overflow: 'hidden', width: '100%', height: '100%' }}>
              {/* FLOATING SEARCH BAR & SERVICE FILTER CHIPS */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  right: '12px',
                  zIndex: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {/* FLOATING SEARCH BAR */}
                <div
                  style={{
                    backgroundColor: 'rgba(20, 20, 20, 0.9)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '2px',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Поиск по городу, ул. или индексу..."
                    value={drawerSearch}
                    onChange={(e) => setDrawerSearch(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      fontSize: '13px',
                      color: '#FFFFFF',
                      outline: 'none',
                      fontFamily: 'Golos Text, sans-serif',
                    }}
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                </div>

                {/* SERVICE FILTER CHIPS: 'ВСЕ' / 'БЕЛПОЧТА' / 'ЕВРОПОЧТА' */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => setProviderFilter('all')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'Golos Text, sans-serif',
                      backgroundColor: providerFilter === 'all' ? '#FFFFFF' : 'rgba(20, 20, 20, 0.9)',
                      color: providerFilter === 'all' ? '#000000' : '#A3A3A3',
                      border: providerFilter === 'all' ? '1px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    Все
                  </button>
                  <button
                    type="button"
                    onClick={() => setProviderFilter('belpost')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'Golos Text, sans-serif',
                      backgroundColor: providerFilter === 'belpost' ? '#FFFFFF' : 'rgba(20, 20, 20, 0.9)',
                      color: providerFilter === 'belpost' ? '#000000' : '#A3A3A3',
                      border: providerFilter === 'belpost' ? '1px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    Белпочта
                  </button>
                  <button
                    type="button"
                    onClick={() => setProviderFilter('evropost')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'Golos Text, sans-serif',
                      backgroundColor: providerFilter === 'evropost' ? '#FFFFFF' : 'rgba(20, 20, 20, 0.9)',
                      color: providerFilter === 'evropost' ? '#000000' : '#A3A3A3',
                      border: providerFilter === 'evropost' ? '1px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    Европочта
                  </button>
                </div>
              </div>

              {/* 1. YANDEX MAPS DARK CONTAINER */}
              <div
                ref={mapContainerRef}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#0A0A0A',
                  filter: 'invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)',
                  zIndex: 0,
                }}
              />

              {/* 3. CONFIRMATION BOTTOM CARD WITH MONOCHROME BADGE */}
              {highlightedBranch && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '12px',
                    right: '12px',
                    zIndex: 40,
                    backgroundColor: '#141414',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '2px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {/* MONOCHROME BADGE (BG-[#262626], TEXT-[#EDEDED], BORDER WHITE/10, 10PX FONT-600) */}
                      <span className="mono-provider-badge">
                        {highlightedBranch.providerName}
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>
                        {highlightedBranch.code}
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#FFFFFF', marginTop: '2px' }}>
                      г. {highlightedBranch.city}, {highlightedBranch.address}
                    </div>

                    <div style={{ fontSize: '11px', color: '#737373' }}>
                      Режим работы: {highlightedBranch.hours}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleConfirmBranch(highlightedBranch)}
                    style={{
                      width: '100%',
                      height: '44px',
                      backgroundColor: '#FF5500',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '2px',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      fontFamily: 'Golos Text, sans-serif',
                    }}
                    className="hover:opacity-90"
                  >
                    ВЫБРАТЬ ЭТО ОТДЕЛЕНИЕ
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* 5. LIST MODE CONTAINER */
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
              <input
                type="text"
                placeholder="Поиск по городу, адресу или коду отделения"
                value={drawerSearch}
                onChange={(e) => setDrawerSearch(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '12px 0 8px 0',
                  fontSize: '13px',
                  color: '#FFFFFF',
                  outline: 'none',
                  fontFamily: 'Golos Text, sans-serif',
                  marginBottom: '12px',
                }}
              />

              {/* SERVICE FILTER CHIPS IN LIST MODE */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                <button
                  type="button"
                  onClick={() => setProviderFilter('all')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'Golos Text, sans-serif',
                    backgroundColor: providerFilter === 'all' ? '#FFFFFF' : 'transparent',
                    color: providerFilter === 'all' ? '#000000' : '#737373',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  Все
                </button>
                <button
                  type="button"
                  onClick={() => setProviderFilter('belpost')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'Golos Text, sans-serif',
                    backgroundColor: providerFilter === 'belpost' ? '#FFFFFF' : 'transparent',
                    color: providerFilter === 'belpost' ? '#000000' : '#737373',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  Белпочта
                </button>
                <button
                  type="button"
                  onClick={() => setProviderFilter('evropost')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'Golos Text, sans-serif',
                    backgroundColor: providerFilter === 'evropost' ? '#FFFFFF' : 'transparent',
                    color: providerFilter === 'evropost' ? '#000000' : '#737373',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  Европочта
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {filteredBranches.length > 0 ? (
                  filteredBranches.map((branch) => {
                    const isSelected = selectedBranch?.id === branch.id;
                    return (
                      <div
                        key={branch.id}
                        onClick={() => handleConfirmBranch(branch)}
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                        }}
                        className="hover:opacity-90"
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span className="mono-provider-badge">
                              {branch.providerName}
                            </span>
                            <span style={{ fontSize: '13px', fontWeight: 500, color: isSelected ? '#FF5500' : '#FFFFFF' }}>
                              {branch.code} — г. {branch.city}, {branch.address}
                            </span>
                          </div>
                          <div style={{ fontSize: '11px', color: '#737373' }}>
                            {branch.hours}
                          </div>
                        </div>

                        {isSelected && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div style={{ padding: '24px 0', textAlign: 'center', color: '#737373', fontSize: '12px' }}>
                    Отделений по данному запросу не найдено
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
