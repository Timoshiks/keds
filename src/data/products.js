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
      '/images/jordan_4_military.jpg',
      '/images/jordan_1_chicago.jpg',
      '/images/jordan_1_olive.jpg'
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
    image: '/images/jordan_4_military.jpg',
    images: [
      '/images/jordan_4_military.jpg',
      '/images/jordan_1_canary.jpg',
      '/images/jordan_1_chicago.jpg'
    ],
    category: 'Jordan',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Натуральная кожа, TPU сетка',
      cushioning: 'Видимая подушка Visible Air',
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
    image: '/images/nike_dunk_unc.jpg',
    images: [
      '/images/nike_dunk_unc.jpg',
      '/images/nike_dunk_panda.jpg',
      '/images/nike_kobe_8.jpg'
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
    image: '/images/nb_1906r_black.jpg',
    images: [
      '/images/nb_1906r_black.jpg',
      '/images/nb_9060_rain.jpg',
      '/images/nb_550_white.jpg'
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
    image: '/images/adidas_campus_black.jpg',
    images: [
      '/images/adidas_campus_black.jpg',
      '/images/adidas_samba.jpg',
      '/images/yeezy_350_zebra.jpg'
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
    image: '/images/asics_kayano_silver.jpg',
    images: [
      '/images/asics_kayano_silver.jpg',
      '/images/asics_gt2160.jpg'
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
    image: '/images/nike_kobe_8.jpg',
    images: [
      '/images/nike_kobe_8.jpg',
      '/images/nike_air_max_95.jpg'
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
    image: '/images/nb_9060_rain.jpg',
    images: [
      '/images/nb_9060_rain.jpg',
      '/images/nb_1906r_black.jpg',
      '/images/nb_550_white.jpg'
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
  },
  {
    id: 'p9',
    name: "Air Jordan 1 High OG 'Lost & Found Chicago'",
    brand: 'Jordan',
    sku: 'DZ5485-612',
    releaseYear: '2022',
    size: 'US 9 / 42.5 EU',
    condition: 'New',
    dateCategory: '2022 • Jordan',
    price: 46800,
    priceFormatted: '46 800 ₽',
    image: '/images/jordan_1_chicago.jpg',
    images: [
      '/images/jordan_1_chicago.jpg',
      '/images/jordan_4_military.jpg'
    ],
    category: 'Jordan',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Состаренная винтажная кожа',
      cushioning: 'Встроенный блок Nike Air',
      kit: 'Винтажный бокс, чеки 85 года'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true }
    ]
  },
  {
    id: 'p10',
    name: "Salomon XT-6 'Black Phantom'",
    brand: 'Salomon',
    sku: 'L41086600',
    releaseYear: '2023',
    size: 'US 9.5 / 43 EU',
    condition: 'New',
    dateCategory: '2023 • Salomon',
    price: 28500,
    priceFormatted: '28 500 ₽',
    image: '/images/salomon_xt6.jpg',
    images: [
      '/images/salomon_xt6.jpg',
      '/images/salomon_acs_pro.jpg'
    ],
    category: 'Salomon',
    specs: {
      fit: 'Чуть маломерят (+0.5 размера)',
      upper: 'Абразивостойкий TPU и сетка',
      cushioning: 'ACS Chassis & EVA',
      kit: 'Быстрая шнуровка Quicklace'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true }
    ]
  },
  {
    id: 'p11',
    name: "Adidas Yeezy Boost 350 V2 'Zebra'",
    brand: 'Adidas',
    sku: 'CP9654',
    releaseYear: '2023',
    size: 'US 9.5 / 43 EU',
    condition: 'New',
    dateCategory: '2023 • Adidas',
    price: 34500,
    priceFormatted: '34 500 ₽',
    image: '/images/yeezy_350_zebra.jpg',
    images: [
      '/images/yeezy_350_zebra.jpg',
      '/images/adidas_samba.jpg'
    ],
    category: 'Adidas',
    specs: {
      fit: 'Маломерят (+0.5 размера)',
      upper: 'Тканый Primeknit',
      cushioning: 'Амортизация Boost во всю длину',
      kit: 'Оригинальный короб Yeezy'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true }
    ]
  },
  {
    id: 'p12',
    name: "Adidas Samba OG 'Cloud White Black'",
    brand: 'Adidas',
    sku: 'B75806',
    releaseYear: '2023',
    size: 'US 8.5 / 42 EU',
    condition: 'New',
    dateCategory: '2023 • Adidas',
    price: 15400,
    priceFormatted: '15 400 ₽',
    image: '/images/adidas_samba.jpg',
    images: [
      '/images/adidas_samba.jpg',
      '/images/adidas_campus_black.jpg'
    ],
    category: 'Adidas',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Премиум кожа, замшевый носок',
      cushioning: 'Низкий профиль, резиновая подошва',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7.5', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true }
    ]
  },
  {
    id: 'p13',
    name: "Nike Air Max 95 OG 'Neon'",
    brand: 'Nike',
    sku: 'CT1689-001',
    releaseYear: '2020',
    size: 'US 10 / 44 EU',
    condition: 'New',
    dateCategory: '2020 • Nike',
    price: 36200,
    priceFormatted: '36 200 ₽',
    image: '/images/nike_air_max_95.jpg',
    images: [
      '/images/nike_air_max_95.jpg',
      '/images/nike_dunk_panda.jpg'
    ],
    category: 'Nike',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Многослойный текстиль и замша',
      cushioning: 'Двойные баллоны Max Air',
      kit: 'Оригинальный бокс 95 года'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true }
    ]
  },
  {
    id: 'p14',
    name: "Travis Scott x Air Jordan 1 Low 'Medium Olive'",
    brand: 'Jordan',
    sku: 'DM7866-200',
    releaseYear: '2024',
    size: 'US 9 / 42.5 EU',
    condition: 'New',
    dateCategory: '2024 • Jordan',
    price: 44200,
    priceFormatted: '44 200 ₽',
    image: '/images/jordan_1_olive.jpg',
    images: [
      '/images/jordan_1_olive.jpg',
      '/images/jordan_1_canary.jpg'
    ],
    category: 'Jordan',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Оливковая замша, белая кожа',
      cushioning: 'Встроенный блок Nike Air',
      kit: 'Оливковый бокс, 3 пары шнурков'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '42.5 EU', us: 'US 9', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true }
    ]
  },
  {
    id: 'p15',
    name: "Nike Dunk Low 'Panda'",
    brand: 'Nike',
    sku: 'DD1391-100-PND',
    releaseYear: '2023',
    size: 'US 9 / 42.5 EU',
    condition: 'New',
    dateCategory: '2023 • Nike',
    price: 18900,
    priceFormatted: '18 900 ₽',
    image: '/images/nike_dunk_panda.jpg',
    images: [
      '/images/nike_dunk_panda.jpg',
      '/images/nike_dunk_unc.jpg'
    ],
    category: 'Nike',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Черно-белая гладкая кожа',
      cushioning: 'Классическая резиновая подошва',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '40 EU', us: 'US 7.5', inStock: true },
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true }
    ]
  },
  {
    id: 'p16',
    name: "New Balance 550 'White Grey'",
    brand: 'New Balance',
    sku: 'BB550PB1',
    releaseYear: '2022',
    size: 'US 8.5 / 42 EU',
    condition: 'New',
    dateCategory: '2022 • New Balance',
    price: 19800,
    priceFormatted: '19 800 ₽',
    image: '/images/nb_550_white.jpg',
    images: [
      '/images/nb_550_white.jpg',
      '/images/nb_1906r_black.jpg'
    ],
    category: 'New Balance',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Перфорированная кожа и замша',
      cushioning: 'Прочная баскетбольная капсула',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true }
    ]
  },
  {
    id: 'p17',
    name: "Puma Palermo Special 'Vine Clementine'",
    brand: 'Puma',
    sku: '396464-01',
    releaseYear: '2023',
    size: 'US 9 / 42.5 EU',
    condition: 'New',
    dateCategory: '2023 • Puma',
    price: 14200,
    priceFormatted: '14 200 ₽',
    image: '/images/puma_palermo.jpg',
    images: [
      '/images/puma_palermo.jpg'
    ],
    category: 'Puma',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Премиальная текстильная замша',
      cushioning: 'Классическая террасовая подошва',
      kit: 'Оригинальный бокс Puma'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true }
    ]
  },
  {
    id: 'p18',
    name: "Salomon ACS Pro 'Metal Ghost'",
    brand: 'Salomon',
    sku: 'L47132200',
    releaseYear: '2024',
    size: 'US 10 / 44 EU',
    condition: 'New',
    dateCategory: '2024 • Salomon',
    price: 31200,
    priceFormatted: '31 200 ₽',
    image: '/images/salomon_acs_pro.jpg',
    images: [
      '/images/salomon_acs_pro.jpg',
      '/images/salomon_xt6.jpg'
    ],
    category: 'Salomon',
    specs: {
      fit: 'True to size (в размер)',
      upper: 'Kurim каркас и дышащий сетчатый верх',
      cushioning: 'Agile Chassis System',
      kit: 'Оригинальный бокс'
    },
    sizes: [
      { eu: '41 EU', us: 'US 8', inStock: true },
      { eu: '42 EU', us: 'US 8.5', inStock: true },
      { eu: '43 EU', us: 'US 9.5', inStock: true },
      { eu: '44 EU', us: 'US 10', inStock: true }
    ]
  }
];

export const BRANDS = ['Все', 'Nike', 'Jordan', 'New Balance', 'Adidas', 'ASICS', 'Salomon', 'Puma'];

export const POPULAR_MODELS = ['Dunk Low', 'Jordan 4', 'NB 1906R', 'Campus 00s', 'XT-6', 'Samba'];
