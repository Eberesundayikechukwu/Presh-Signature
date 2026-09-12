import { ProductCategory } from './types';

export const BRAND = {
  name: 'Presh Signature',
  tagline: 'Creating Memorable Flavors & Celebrations',
  about:
    'Presh Signature is a premium catering, baking, and refreshments brand dedicated to creating delicious meals, quality baked goods, custom cakes, healthy drinks, food trays, and memorable celebrations. We combine creativity, quality ingredients, beautiful presentation, and exceptional customer service to deliver unforgettable culinary experiences for individuals, families, and organizations.',
  vision:
    "To become one of Nigeria's most trusted catering and baking brands, expanding from a home-based business into a premium catering company, mini restaurant, and catering & baking academy.",
  pillars: [
    {
      title: 'Creativity',
      description: 'Inventive culinary ideas crafted uniquely for your special moments.',
    },
    {
      title: 'Quality',
      description: 'Uncompromising standard with carefully sourced, fresh ingredients.',
    },
    {
      title: 'Presentation',
      description: 'Artfully styled dishes, custom cakes, and elegant food trays.',
    },
    {
      title: 'Service',
      description: 'Warm, dependable, and personalized attention for every celebration.',
    },
  ],
  contact: {
    whatsappUrl: 'https://wa.me/2348123122777',
    whatsappDisplay: ' +2348123122777',
    email: ' preshsignature1@gmail.com',
    emailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@preshsignature.com',
    location: 'Port Harcourt & across Nigeria',
  },
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'cakes',
    name: 'Cakes',
    shortDescription: 'Custom handcrafted cakes designed for life’s milestone celebrations.',
    items: [
      'Wedding Cakes',
      'Traditional Wedding Cakes',
      'Birthday Cakes',
      'Anniversary Cakes',
      'Custom Celebration Cakes',
    ],
    imageUrl:
      'images/cake.jpg',
    imageAlt: 'Tiered artisan celebration cake with elegant floral and gold accents',
  },
  {
    id: 'baking',
    name: 'Baking',
    shortDescription: 'Freshly baked artisanal breads, rolls, and oven-warm treats.',
    items: [
      'Bread',
      'Pizza',
      'Burger Buns',
      'Dinner Rolls',
      'Other Freshly Baked Treats',
    ],
    imageUrl:
      'images/baking.jpg',
    imageAlt: 'Freshly baked golden artisan bread and dinner rolls',
  },
  {
    id: 'pastries-snacks',
    name: 'Pastries & Snacks',
    shortDescription: 'Savory pies, golden small chops, and crowd-favorite finger foods.',
    items: [
      'Meat Pies',
      'Doughnuts',
      'Egg Rolls',
      'Chin Chin',
      'Puff Puff',
      'Buns',
      'Small Chops',
    ],
    imageUrl:
      'images/pastries.jpg',
    imageAlt: 'Golden baked meat pies, pastries, and savory snacks',
  },
  {
    id: 'catering-meals',
    name: 'Catering & Meals',
    shortDescription: 'Rich Nigerian party dishes and continental culinary experiences.',
    items: [
      'Party Jollof Rice',
      'Fried Rice',
      'Nigerian Soups',
      'Native Dishes',
      'Corporate & Event Catering',
      'Other Nigerian & Continental Dishes',
    ],
    imageUrl:
      'images/catering.jpg',
    imageAlt: 'Gourmet Nigerian party jollof rice and event catering spread',
  },
  {
    id: 'refreshments',
    name: 'Refreshments',
    shortDescription: 'Handmade healthy beverages, chilled zobo, and fresh fruit blends.',
    items: [
      'Zobo',
      'Tigernut Drink',
      'Yogurt Parfait',
      'Fresh Fruit Juices',
      'Smoothies',
      'Other Healthy Refreshments',
    ],
    imageUrl:
      'images/refreshment.jpg',
    imageAlt: 'Chilled hibiscus zobo, fresh fruit juices, and healthy refreshments',
  },
  {
    id: 'food-trays',
    name: 'Food Trays',
    shortDescription: 'Curated breakfast boxes and celebration surprise food packages.',
    items: [
      'Breakfast Trays',
      'Food Trays',
      'Corporate Food Boxes',
      'Surprise Food Trays',
      'Customized Food Packages',
    ],
    imageUrl:
      'images/food-tray.jpg',
    imageAlt: 'Gourmet celebration breakfast tray with waffles and fresh fruit',
  },
  {
    id: 'special-services',
    name: 'Special Services',
    shortDescription: 'Bespoke event catering, luxury money bouquets, and custom gifts.',
    items: [
      'Event Catering',
      'Custom Cakes',
      'Money Bouquets',
      'Customized Gift Packages',
    ],
    imageUrl:
      'images/special-service.jpg',
    imageAlt: 'Curated luxury event gift packages and celebration setup',
  },
];
