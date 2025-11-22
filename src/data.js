export const combos = [
  {
    id: "combo1",
    name: "Romantic Rose Set",
    description: "Gold Heart Necklace + Rose Gold Sphere Earrings",
    originalPrice: 618,
    salePrice: 499,
    discount: "20% OFF",
    image: "/assets/images/Goldheartnecklace1.JPG",
    products: [7, 19],
    badge: "HOT DEAL",
    inStock: true
  },
  {
    id: "combo2",
    name: "Butterfly Beauty Pack",
    description: "Twin Butterfly Necklace + Butterfly Bracelet",
    originalPrice: 698,
    salePrice: 579,
    discount: "17% OFF",
    image: "/assets/images/Twinbutterflygoldenchainnecklace.JPG",
    products: [8, 3],
    badge: "BEST SELLER",
    inStock: true
  },
  {
    id: "combo3",
    name: "Complete Elegance Set",
    description: "Minimal Heart Necklace + Pearl Earrings + Heart Bracelet",
    originalPrice: 937,
    salePrice: 749,
    discount: "20% OFF",
    image: "/assets/images/Minimalheartnecklace1.png",
    products: [17, 26, 1],
    badge: "🔥 TRENDING",
    inStock: true
  }
];

export const products = [
  // Bracelets
  {id: 1, name: 'Gold Heart Double Layer Bracelet', price: 299, images: ['/assets/images/Goldheartdoublelayerbracelet.JPG'], inStock: true, qtyAvailable: 10, category: 'bracelets', description: 'Elegant double-layered bracelet with a delicate gold heart charm. Perfect for everyday wear.'},
  {id: 2, name: 'Halo Heart Double Layer Bracelet', price: 319, images: ['/assets/images/Haloheartdoublelayerbracelet.JPG'], inStock: true, qtyAvailable: 8, category: 'bracelets', description: 'Stunning halo heart design with double chain layers. A must-have accessory.'},
  {id: 3, name: 'Butterfly Gold Bracelet', price: 329, images: ['/assets/images/Butterflygoldbracelet.JPG'], inStock: true, qtyAvailable: 7, category: 'bracelets', description: 'Beautiful butterfly charm bracelet in gold finish. Adds a touch of elegance to any outfit.'},
  {id: 4, name: 'Elegant Star Bracelet', price: 289, images: ['/assets/images/Elegantstarbracelet.JPG'], inStock: true, qtyAvailable: 12, category: 'bracelets', description: 'Minimalist star charm bracelet. Perfect for those who love subtle elegance.'},
  {id: 5, name: 'Star Double Layered Gold Bracelet', price: 309, images: ['/assets/images/Stardoublelayeredgolfbracelet.JPG'], inStock: true, qtyAvailable: 9, category: 'bracelets', description: 'Double-layered design with star charm. Versatile and stylish.'},
  {id: 6, name: 'Gold Double Layer Bracelet', price: 299, images: ['/assets/images/Golddoublelayerbracelet.JPG'], inStock: true, qtyAvailable: 11, category: 'bracelets', description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'},

  // Necklaces
  {id: 7, name: 'Gold Heart Necklace', price: 349, images: ['/assets/images/Goldheartnecklace.JPG','/assets/images/Goldheartnecklace1.JPG','/assets/images/Goldheartnecklace2.png'], inStock: true, qtyAvailable: 10, category: 'necklaces', description: 'Delicate gold heart pendant necklace. A timeless piece for any jewelry collection.'},
  {id: 8, name: 'Twin Butterfly Golden Chain Necklace', price: 369, images: ['/assets/images/Twinbutterflygoldenchainnecklace.JPG','/assets/images/Goldheartnecklace1.JPG','/assets/images/Twinbutterflygoldenchainnecklace1.png'], inStock: true, qtyAvailable: 8, category: 'necklaces', description: 'Twin butterfly charms on a golden chain. Feminine and graceful.'},
  {id: 9, name: 'Butterfly Y Chain Necklace', price: 359, images: ['/assets/images/Butterflyychainnecklace.JPG','/assets/images/Goldheartnecklace1.JPG'], inStock: true, qtyAvailable: 10, category: 'necklaces', description: 'Trendy Y-chain design with butterfly pendant. Makes a statement.'},
  {id: 10, name: 'Butterfly Drop Necklace', price: 379, images: ['/assets/images/Butterflydropnecklace.png'], inStock: true, qtyAvailable: 6, category: 'necklaces', description: 'Elegant butterfly drop pendant. Perfect for special occasions.'},
  {id: 11, name: 'Rose Gold Layered Necklace', price: 399, images: ['/assets/images/Rosegoldlayerednecklace.JPG','/assets/images/Rosegoldlayerednecklace1.png'], inStock: true, qtyAvailable: 9, category: 'necklaces', description: 'Luxurious rose gold layered necklace. Adds sophistication to any look.'},
  {id: 12, name: 'Bow Snake Necklace', price: 349, images: ['/assets/images/Bowsnakenecklace.JPG','/assets/images/Bowsnakenecklace1.png'], inStock: true, qtyAvailable: 10, category: 'necklaces', description: 'Unique bow design with snake chain. Modern and chic.'},
  {id: 13, name: 'Double Layered Snake Chain Necklace', price: 389, images: ['/assets/images/Doublelayeredsnakechainnecklace.JPG','/assets/images/Doublelayeredsnakechainnecklace1.png'], inStock: true, qtyAvailable: 7, category: 'necklaces', description: 'Sleek double-layered snake chain. Minimalist elegance.'},
  {id: 14, name: 'Elegant Bow Necklace', price: 339, images: ['/assets/images/ElegantBownecklace.png'], inStock: true, qtyAvailable: 8, category: 'necklaces', description: 'Charming bow pendant necklace. Sweet and elegant.'},
  {id: 15, name: 'Clover Double Chain Necklace', price: 359, images: ['/assets/images/Cloverdoublechainnecklace.JPG','/assets/images/Cloverdoublechainnecklace1.png'], inStock: true, qtyAvailable: 9, category: 'necklaces', description: 'Lucky clover charm with double chain. Stylish and meaningful.'},
  {id: 16, name: 'Minimal Butterfly Necklace', price: 299, images: ['/assets/images/Minimalbutterflynecklace.JPG','/assets/images/Goldheartnecklace1.JPG','/assets/images/Minimalbutterflynecklace1.png'], inStock: true, qtyAvailable: 10, category: 'necklaces', description: 'Minimalist butterfly pendant. Simple and beautiful.'},
  {id: 17, name: 'Minimal Heart Necklace', price: 319, images: ['/assets/images/Minimalheartnecklace.JPG','/assets/images/Goldheartnecklace1.JPG','/assets/images/Minimalheartnecklace1.png'], inStock: true, qtyAvailable: 10, category: 'necklaces', description: 'Delicate heart pendant. Classic and versatile.'},
  {id: 18, name: 'Rose Gold Layered Necklace', price: 369, images: ['/assets/images/Rosegoldlayerednecklace.JPG','/assets/images/Rosegoldlayerednecklace1.png'], inStock: true, qtyAvailable: 9, category: 'necklaces', description: 'Beautiful rose gold layered design. Elegant and trendy.'},

  // Earrings
  {id: 19, name: 'Rose Gold Sphere Earrings', price: 269, images: ['/assets/images/Rosegoldsphereearrings.JPG','/assets/images/Rosegoldsphereearrings1.JPG'], inStock: true, qtyAvailable: 14, category: 'earrings', description: 'Elegant rose gold sphere studs. Perfect for everyday wear.'},
  {id: 20, name: 'Golden Prism Earrings', price: 289, images: ['/assets/images/Goldenprismearrings.JPG'], inStock: true, qtyAvailable: 10, category: 'earrings', description: 'Geometric prism design in gold. Modern and eye-catching.'},
  {id: 21, name: 'Flower Cluster Earrings', price: 279, images: ['/assets/images/Flowerclusterearrings.JPG'], inStock: true, qtyAvailable: 9, category: 'earrings', description: 'Delicate flower cluster studs. Feminine and charming.'},
  {id: 22, name: 'Gold Huggie Hoop Earrings', price: 299, images: ['/assets/images/Goldhuggiehoopearrings.JPG','/assets/images/Goldhuggiehoopearrings1.JPG'], inStock: true, qtyAvailable: 8, category: 'earrings', description: 'Classic gold huggie hoops. Versatile and stylish.'},
  {id: 23, name: 'Swirl Earrings', price: 259, images: ['/assets/images/Swirlearrings.JPG','/assets/images/Swirlearrings1.png'], inStock: true, qtyAvailable: 15, category: 'earrings', description: 'Unique swirl design. Modern and elegant.'},
  {id: 24, name: 'Rose Gold Huggie Hoop Earrings', price: 309, images: ['/assets/images/Rosegoldhuggiehoopearrings.JPG','/assets/images/Rosegoldhuggiehoopearrings1.JPG'], inStock: true, qtyAvailable: 7, category: 'earrings', description: 'Rose gold huggie hoops. Chic and sophisticated.'},
  {id: 25, name: 'Vema Rose Gold Earrings', price: 289, images: ['/assets/images/Vemarosegoldearring.JPG'], inStock: true, qtyAvailable: 10, category: 'earrings', description: 'Elegant Vema design in rose gold. Perfect for any occasion.'},
  {id: 26, name: 'Pearl Elegant Rose Gold Earrings', price: 319, images: ['/assets/images/Pearlelegantrosegoldearrings.JPG','/assets/images/Pearlelegantrosegoldearrings1.JPG'], inStock: true, qtyAvailable: 12, category: 'earrings', description: 'Beautiful pearl studs in rose gold. Classic elegance.'},
  {id: 27, name: 'Halo Stud Earrings', price: 289, images: ['/assets/images/Halostudearrings.JPG'], inStock: true, qtyAvailable: 9, category: 'earrings', description: 'Stunning halo design studs. Sparkle and shine.'},
  {id: 28, name: 'Vema Silver Earrings', price: 279, images: ['/assets/images/Vemasilverearrings.JPG'], inStock: true, qtyAvailable: 11, category: 'earrings', description: 'Elegant Vema design in silver. Versatile and beautiful.'}
];

export const sellerNumber = '918606577577';
