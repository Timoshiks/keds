export const MOCK_PRODUCTS = [
  {
    id: 'p1',
    name: "Travis Scott x Air Jordan 1 Low 'Canary'",
    brand: 'Jordan',
    sku: 'DZ5909-100',
    releaseYear: '2024',
    size: 'US 8.5 / 42 EU',
    condition: 'New',
    dateCategory: '2024 • Jordan',
    price: 42500,
    priceFormatted: '42 500 ₽',
    image: '/images/jordan_1_canary.jpg',
    images: [
      '/images/jordan_1_canary.jpg',
      '/images/jordan_4_military.svg',
      '/images/nike_dunk_unc.svg',
      '/images/nb_1906r_black.svg'
    ],
    category: 'Jordan',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Премиум кожа, замшевые вставки',
      cushioning: 'Встроенный блок Nike Air',
      kit: 'Оригинальный бокс, доп. шнурки'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: false },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true },
      { eu: '45 EU', us: 'US 11', inStock: false }
    ]
  },
  {
    id: 'p2',
    name: "Air Jordan 4 Retro 'Military Black'",
    brand: 'Jordan',
    sku: 'DH6927-111',
    releaseYear: '2022',
    size: 'US 9.5 / 43 EU',
    condition: 'New',
    dateCategory: '2022 • Jordan',
    price: 38900,
    priceFormatted: '38 900 ₽',
    image: '/images/jordan_4_military.svg',
    images: [
      '/images/jordan_4_military.svg',
      '/images/jordan_1_canary.jpg',
      '/images/nb_1906r_black.svg',
      '/images/asics_kayano_silver.svg'
    ],
    category: 'Jordan',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Натуральная кожа, TPU сетка',
      cushioning: 'Видимый подушка Visible Air',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: false },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true },
      { eu: '45 EU', us: 'US 11', inStock: true }
    ]
  },
  {
    id: 'p3',
    name: "Nike Dunk Low 'UNC Coast'",
    brand: 'Nike',
    sku: 'DD1391-100',
    releaseYear: '2021',
    size: 'US 8 / 41 EU',
    condition: 'New',
    dateCategory: '2021 • Nike',
    price: 24500,
    priceFormatted: '24 500 ₽',
    image: '/images/nike_dunk_unc.svg',
    images: [
      '/images/nike_dunk_unc.svg',
      '/images/jordan_1_canary.jpg',
      '/images/nike_kobe_8.svg'
    ],
    category: 'Nike',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Гладкая натуральная кожа',
      cushioning: 'Классическая EVA стелька',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: false },
      { eu: '44 EU', us: 'US 10', inStock: true },
      { eu: '45 EU', us: 'US 11', inStock: false }
    ]
  },
  {
    id: 'p4',
    name: "New Balance 1906R 'Triple Black'",
    brand: 'New Balance',
    sku: 'M1906R-BK',
    releaseYear: '2023',
    size: 'US 9 / 42.5 EU',
    condition: 'New',
    dateCategory: '2023 • New Balance',
    price: 27900,
    priceFormatted: '27 900 ₽',
    image: '/images/nb_1906r_black.svg',
    images: [
      '/images/nb_1906r_black.svg',
      '/images/nb_9060_rain.svg',
      '/images/jordan_1_canary.jpg'
    ],
    category: 'New Balance',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Дышащая сетка, TPU накладки',
      cushioning: 'N-ergy / ABZORB SBS',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: false },
      { eu: '45 EU', us: 'US 11', inStock: true }
    ]
  },
  {
    id: 'p5',
    name: "Adidas Campus 00s 'Core Black'",
    brand: 'Adidas',
    sku: 'HQ8708',
    releaseYear: '2023',
    size: 'US 7.5 / 40 EU',
    condition: 'New',
    dateCategory: '2023 • Adidas',
    price: 16800,
    priceFormatted: '16 800 ₽',
    image: '/images/adidas_campus_black.svg',
    images: [
      '/images/adidas_campus_black.svg',
      '/images/jordan_1_canary.jpg',
      '/images/nb_1906r_black.svg'
    ],
    category: 'Adidas',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Натуральная замша',
      cushioning: 'Анатомическая стелька',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7.5', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: false },
      { eu: '44 EU', us: 'US 10', inStock: true },
      { eu: '45 EU', us: 'US 11', inStock: true }
    ]
  },
  {
    id: 'p6',
    name: "Asics Gel-Kayano 14 'Metallic Silver'",
    brand: 'ASICS',
    sku: '1201A019-102',
    releaseYear: '2024',
    size: 'US 10 / 44 EU',
    condition: 'New',
    dateCategory: '2024 • ASICS',
    price: 29400,
    priceFormatted: '29 400 ₽',
    image: '/images/asics_kayano_silver.svg',
    images: [
      '/images/asics_kayano_silver.svg',
      '/images/jordan_1_canary.jpg',
      '/images/nike_dunk_unc.svg'
    ],
    category: 'ASICS',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Дышащая сетка, синтетическая кожа',
      cushioning: 'ASICS GEL Technology',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7', inStock: false },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true },
      { eu: '45 EU', us: 'US 11', inStock: true }
    ]
  },
  {
    id: 'p7',
    name: "Nike Kobe 8 Protro 'Venice Beach'",
    brand: 'Nike',
    sku: 'FQ3548-001',
    releaseYear: '2024',
    size: 'US 9 / 42.5 EU',
    condition: 'New',
    dateCategory: '2024 • Nike',
    price: 49000,
    priceFormatted: '49 000 ₽',
    image: '/images/nike_kobe_8.svg',
    images: [
      '/images/nike_kobe_8.svg',
      '/images/jordan_1_canary.jpg',
      '/images/jordan_4_military.svg'
    ],
    category: 'Nike',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Engineered Mesh, синтетика',
      cushioning: 'Drop-in React / Zoom Air',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: false },
      { eu: '45 EU', us: 'US 11', inStock: true }
    ]
  },
  {
    id: 'p8',
    name: "New Balance 9060 'Rain Cloud'",
    brand: 'New Balance',
    sku: 'U9060FRA',
    releaseYear: '2022',
    size: 'US 9.5 / 43 EU',
    condition: 'New',
    dateCategory: '2022 • New Balance',
    price: 26200,
    priceFormatted: '26 200 ₽',
    image: '/images/nb_9060_rain.svg',
    images: [
      '/images/nb_9060_rain.svg',
      '/images/jordan_1_canary.jpg',
      '/images/nb_1906r_black.svg'
    ],
    category: 'New Balance',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Натуральная замша, текстиль',
      cushioning: 'ABZORB & Dual-density SBS',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true },
      { eu: '45 EU', us: 'US 11', inStock: false }
    ]
  }
];

export const BRANDS = ['Все', 'Nike', 'Jordan', 'New Balance', 'Adidas', 'ASICS'];

export const POPULAR_MODELS = ['Dunk Low', 'Jordan 4', 'NB 1906R', 'Campus 00s'];
