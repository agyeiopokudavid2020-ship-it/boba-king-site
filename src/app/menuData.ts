// Single source of truth for the drink menu. page.tsx maps over this to
// render The Royal Menu section; add new drinks here and they appear
// automatically with image, badge, and cart wiring.

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  description: string;
  badge?: string;
  image: string;
  wide?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "classic-milk-tea",
    name: "Classic Milk Tea",
    category: "Signature Milk Tea",
    price: 35,
    priceLabel: "GHS 35",
    description:
      "Traditional black tea brewed to perfection with rich cream and chewy brown sugar tapioca pearls.",
    badge: "🔥 Bestseller",
    image: "/menu/classic-milk-tea.jpg",
    wide: true,
  },
  {
    id: "taro-king-special",
    name: "Taro King Special",
    category: "Signature Milk Tea",
    price: 40,
    priceLabel: "GHS 40",
    description:
      "Rich, velvety sweet taro tea blended with signature boba for an authentic royal treat.",
    badge: "👑 Royal Pick",
    image: "/menu/taro-king-special.jpg",
  },
  {
    id: "strawberry-crush",
    name: "Strawberry Crush",
    category: "Fruit Tea & Refreshers",
    price: 40,
    priceLabel: "GHS 40",
    description:
      "Fresh strawberry puree infused into premium green tea with bursting popping boba.",
    badge: "🍓 Fruity",
    image: "/menu/strawberry-crush.jpg",
  },
  {
    id: "matcha-royal",
    name: "Matcha Royal",
    category: "Specialty Tea",
    price: 45,
    priceLabel: "GHS 45",
    description:
      "Authentic ceremonial grade Japanese matcha layered smooth over velvety cold milk.",
    badge: "🍵 Premium",
    image: "/menu/matcha-royal.jpg",
    wide: true,
  },
  {
    id: "mango-fruit-tea",
    name: "Mango Fruit Tea",
    category: "Fruit Tea & Refreshers",
    price: 35,
    priceLabel: "GHS 35",
    description:
      "Sun-ripened tropical mango paired with aromatic jasmine green tea over crushed ice.",
    badge: "🥭 Refreshing",
    image: "/menu/mango-fruit-tea.jpg",
  },
  {
    id: "brown-sugar-boba-latte",
    name: "Brown Sugar Boba Latte",
    category: "Specialty Tea",
    price: 42,
    priceLabel: "GHS 42",
    description:
      "Smooth latte swirled with rich brown sugar syrup and chewy boba pearls.",
    badge: "⭐ Fan Favorite",
    image: "/menu/brown-sugar-boba-latte.jpg",
  },
];

// Order of the filter tabs. "All" is prepended in page.tsx.
export const CATEGORIES: string[] = [
  "Signature Milk Tea",
  "Fruit Tea & Refreshers",
  "Specialty Tea",
];
