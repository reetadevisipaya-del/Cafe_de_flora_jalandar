// Authentic Menu Data for Café Dé Floraa, Jalandhar
// Sourced from Cafe_De_Floraa_Menu.pdf and Instagram @cafedefloraajalandhar

const MENU_CATEGORIES = [
  { id: 'all', name: 'Full Garden Menu', icon: '🌸' },
  { id: 'bestsellers', name: 'Chef’s Signatures', icon: '⭐' },
  { id: 'coffee-hot', name: 'Espresso & Brews', icon: '☕' },
  { id: 'coffee-cold', name: 'Chilled & Frappes', icon: '🧊' },
  { id: 'mocktails', name: 'Coolers & Mocktails', icon: '🍹' },
  { id: 'momos', name: 'Momos & Dimsums', icon: '🥟' },
  { id: 'pizza', name: 'Artisan Pizzas', icon: '🍕' },
  { id: 'pasta', name: 'Pastas & Mains', icon: '🍝' },
  { id: 'burgers-toasts', name: 'Burgers & Toasts', icon: '🥪' },
  { id: 'starters', name: 'Starters & Fries', icon: '🍟' },
  { id: 'desserts', name: 'Desserts & Bakes', icon: '🍰' }
];

const MENU_ITEMS = [
  // --- BESTSELLERS & SIGNATURES ---
  {
    id: 'f-1',
    name: 'Lotus Biscoff Cheesecake',
    category: 'desserts',
    price: 360,
    priceStr: '₹360',
    type: 'veg',
    isSignature: true,
    description: 'Decadent baked cheesecake topped with molten Lotus Biscoff spread and crunchy speculoos cookie.',
    image: 'media/lotus-cheesecake.jpg',
    tags: ['Best Seller', 'Sweet Craving']
  },
  {
    id: 'f-2',
    name: 'Spaghetti Aglio E Olio',
    category: 'pasta',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'veg',
    isSignature: true,
    description: 'Traditional Italian spaghetti tossed in virgin olive oil, sautéed sliced garlic, fresh parsley, basil & cherry tomatoes.',
    image: 'media/spaghetti-aglio-olio.jpg',
    tags: ['Chef Special', 'Italian Classic']
  },
  {
    id: 'f-3',
    name: 'Signature Lotus Biscoff Shake',
    category: 'coffee-cold',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    isSignature: true,
    description: 'Rich creamy thick shake blended with imported Lotus Biscoff, vanilla cream and caramel swirl.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Insta Viral', 'Must Try']
  },
  {
    id: 'f-4',
    name: 'Cheese Mushroom Toast',
    category: 'burgers-toasts',
    price: 349.00,
    priceStr: '₹349',
    type: 'veg',
    isSignature: true,
    description: 'Crispy artisanal toast crowned with sautéed button mushrooms, fresh thyme and a gooey molten cheese blanket.',
    image: 'media/cheese-mushroom-toast.jpg',
    tags: ['Cozy Favorite', 'Cheese Pull']
  },
  {
    id: 'f-5',
    name: 'Heart-Shaped Valentine Pizza',
    category: 'pizza',
    price: 480.00,
    priceStr: '₹480',
    type: 'veg',
    isSignature: true,
    description: 'Hand-tossed romantic heart pizza with herb tomato reduction, sweet corn, bell peppers, olives and mozzarella.',
    image: 'media/heart-pizza.jpg',
    tags: ['Special Edition', 'Woodfire Vibe']
  },
  {
    id: 'f-6',
    name: 'Watermelon Mojito',
    category: 'mocktails',
    price: 344.50,
    priceStr: '₹344.50',
    type: 'veg',
    isSignature: true,
    description: 'Crushed ripe ruby watermelon muddled with fresh garden mint leaves, lime juice and effervescent sparkling soda.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Refreshing', 'Garden Drink']
  },
  {
    id: 'f-7',
    name: 'Veg Extreme Momos',
    category: 'momos',
    price: 297.70,
    priceStr: '₹297.70',
    type: 'veg',
    isSignature: true,
    description: 'Translucent steamed dumplings filled with finely chopped crisp vegetables and aromatic spices with spicy dip.',
    image: 'media/veg-extreme-momos.jpg',
    tags: ['Most Loved', 'Steamed Warmth']
  },
  {
    id: 'f-8',
    name: 'Red Velvet Pastry with Cream Cheese',
    category: 'desserts',
    price: 320.00,
    priceStr: '₹320',
    type: 'veg',
    isSignature: true,
    description: 'Moist layers of rich crimson velvet sponge paired with delicate silky cream cheese frosting.',
    image: 'media/red-velvet-cake-cappuccino.jpg',
    tags: ['Pair with Coffee', 'Dessert Dream']
  },
  {
    id: 'f-9',
    name: 'Perfect Green Apple Cooler',
    category: 'mocktails',
    price: 344.50,
    priceStr: '₹344.50',
    type: 'veg',
    isSignature: true,
    description: 'Zesty green apple nectar shaken with mint sprigs, ice crystals and sparkling lime soda.',
    image: 'media/green-apple-cooler.jpg',
    tags: ['Crisp & Cool', 'Tropical']
  },
  {
    id: 'f-10',
    name: 'Crispy Potato Wedges',
    category: 'starters',
    price: 284.70,
    priceStr: '₹284.70',
    type: 'veg',
    isSignature: true,
    description: 'Golden seasoned russet wedges, crispy on the outside, fluffy inside, served with garlic herb dip & salsa.',
    image: 'media/crispy-potato-wedges.jpg',
    tags: ['Crispy Snack', 'House Dip']
  },
  {
    id: 'f-11',
    name: 'Blueberry Cheesecake',
    category: 'desserts',
    price: 360.00,
    priceStr: '₹360',
    type: 'veg',
    isSignature: true,
    description: 'Velvety chilled Philadelphia cheesecake with a generous layer of sweet tart blueberry compote.',
    image: 'media/blueberry-cheesecake.jpg',
    tags: ['Creamy Berry', 'Gourmet']
  },
  {
    id: 'f-12',
    name: 'Double Cheese Burger',
    category: 'burgers-toasts',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    isSignature: true,
    description: 'Two layers of golden melted cheese, gourmet patty, crisp iceberg, caramelized onions and Floraa special burger relish.',
    image: 'media/double-cheese-burger.jpg',
    tags: ['Cheesy Indulgence', 'Stacked']
  },
  {
    id: 'f-13',
    name: 'Pesto Spaghetti with Toasted Garlic Bread',
    category: 'pasta',
    price: 440.00,
    priceStr: '₹440',
    type: 'veg',
    isSignature: true,
    description: 'Tossed in homemade aromatic basil and olive oil pesto, sundried tomatoes and served with crunchy garlic baguette.',
    image: 'media/pesto-garlic-bread-pasta.jpg',
    tags: ['Aromatic Basil', 'Italian']
  },
  {
    id: 'f-14',
    name: 'Cottage Cheese Fa-fa',
    category: 'starters',
    price: 466.70,
    priceStr: '₹466.70',
    type: 'veg',
    isSignature: true,
    description: 'Floraa’s signature spiced cottage cheese crisp bites with oriental chilli sesame dipping bowls.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['House Specialty', 'Sharing Plate']
  },
  {
    id: 'f-15',
    name: 'Veg South Asian Sweet Corn Soup',
    category: 'starters',
    price: 220.00,
    priceStr: '₹220',
    type: 'veg',
    isSignature: true,
    description: 'A comforting steaming bowl of sweet yellow corn broth, cilantro garnish and gentle Asian aromatics.',
    image: 'media/corn-soup.jpg',
    tags: ['Winter Warmer', 'Soul Food']
  },

  // --- ESPRESSO & HOT COFFEE ---
  {
    id: 'c-1',
    name: 'Artisan Cappuccino',
    category: 'coffee-hot',
    price: 279.50,
    priceStr: '₹279.50',
    type: 'veg',
    isSignature: true,
    description: 'A harmonious blend of equal parts espresso, velvety steamed whole milk and airy foam with signature latte art.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Signature Brew']
  },
  {
    id: 'c-2',
    name: 'Espresso Romano',
    category: 'coffee-hot',
    price: 221.00,
    priceStr: '₹221',
    type: 'veg',
    description: 'A traditional Italian single origin espresso pulled over a twist of fresh lemon peel.',
    image: 'media/espresso-pull-ceramic.jpg',
    tags: ['Italian Twist']
  },
  {
    id: 'c-3',
    name: 'Golden Turmeric Latte',
    category: 'coffee-hot',
    price: 318.50,
    priceStr: '₹318.50',
    type: 'veg',
    description: 'A comforting wellness drink combining espresso with steamed turmeric-spiced milk and silky foam.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Wellness']
  },
  {
    id: 'c-4',
    name: 'Flat White',
    category: 'coffee-hot',
    price: 299.00,
    priceStr: '₹299',
    type: 'veg',
    description: 'Double shot of rich espresso combined with a smooth, velvety microfoam layer.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Barista Pick']
  },
  {
    id: 'c-5',
    name: 'Irish Cream Coffee',
    category: 'coffee-hot',
    price: 253.50,
    priceStr: '₹253.50',
    type: 'veg',
    description: 'Hot specialty coffee stirred with non-alcoholic Irish cream notes and crowned with whipped foam.',
    image: 'media/espresso-pull-ceramic.jpg',
    tags: ['Warm & Cozy']
  },
  {
    id: 'c-6',
    name: 'Classic Americano',
    category: 'coffee-hot',
    price: 214.50,
    priceStr: '₹214.50',
    type: 'veg',
    description: 'Bold espresso mellowed with hot filtered water. Pure, rich coffee aroma.',
    image: 'media/espresso-pull-ceramic.jpg',
    tags: ['Black Coffee']
  },
  {
    id: 'c-7',
    name: 'Cortado',
    category: 'coffee-hot',
    price: 284.70,
    priceStr: '₹284.70',
    type: 'veg',
    description: 'Balanced 1:1 ratio of rich espresso cut with silky warm steamed milk in a small tumbler.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Spanish Cut']
  },
  {
    id: 'c-8',
    name: 'Cookie Crumble Coffee',
    category: 'coffee-hot',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'veg',
    description: 'Creamy hot cappuccino made with roasted hazelnut cookie hints, topped with foam and crushed cookies.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Sweet Treat']
  },

  // --- CHILLED COFFEE & FRAPPES ---
  {
    id: 'cc-1',
    name: 'Vietnamese Iced Coffee',
    category: 'coffee-cold',
    price: 370.50,
    priceStr: '₹370.50',
    type: 'veg',
    description: 'Strong dark slow-drip coffee over sweet condensed milk, served chilled with clear ice cubes.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Vietnamese Style']
  },
  {
    id: 'cc-2',
    name: 'Ferrero Rocher Iced Latte',
    category: 'coffee-cold',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Espresso shot shaken with crushed Ferrero Rocher pralines, sweet milk and poured over ice.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Hazelnut Luxury']
  },
  {
    id: 'cc-3',
    name: 'Tiramisu Cold Coffee',
    category: 'coffee-cold',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Rich cold coffee infused with mascarpone cream flavours, topped with whipped foam and cocoa dust.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Dessert Sip']
  },
  {
    id: 'cc-4',
    name: 'Cranberry Iced Americano',
    category: 'coffee-cold',
    price: 299.00,
    priceStr: '₹299',
    type: 'veg',
    description: 'Chilled Americano layered over tart cranberry juice for a fruity, refreshing caffeine kick.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Fruity Brew']
  },
  {
    id: 'cc-5',
    name: 'Tall & Dark Brownie Shake',
    category: 'coffee-cold',
    price: 390.00,
    priceStr: '₹390',
    type: 'veg',
    description: 'Thick cold coffee shake blended with real dark chocolate fudge brownie chunks.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Fudge Indulgence']
  },
  {
    id: 'cc-6',
    name: 'Classic Cold Coffee',
    category: 'coffee-cold',
    price: 357.50,
    priceStr: '₹357.50',
    type: 'veg',
    description: 'Fresh espresso shot blended with chilled vanilla ice cream and sweetened milk.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['All-Time Favorite']
  },

  // --- MOCKTAILS & COOLERS ---
  {
    id: 'm-1',
    name: 'Classic Virgin Mojito',
    category: 'mocktails',
    price: 323.70,
    priceStr: '₹323.70',
    type: 'veg',
    description: 'Muddled fresh garden mint, Persian lime wedges and cane syrup charged with crisp soda.',
    image: 'media/green-apple-cooler.jpg',
    tags: ['Zesty Citrus']
  },
  {
    id: 'm-2',
    name: 'Charged Up Red Bull Coffee',
    category: 'mocktails',
    price: 357.50,
    priceStr: '₹357.50',
    type: 'veg',
    description: 'Bold espresso shot poured over iced Red Bull with a fresh lemon wedge and mint.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['High Energy']
  },
  {
    id: 'm-3',
    name: 'Virgin Piña Colada',
    category: 'mocktails',
    price: 386.10,
    priceStr: '₹386.10',
    type: 'veg',
    description: 'Creamy coconut milk and chilled fresh pineapple juice shaken with crushed ice.',
    image: 'media/green-apple-cooler.jpg',
    tags: ['Creamy Tropical']
  },
  {
    id: 'm-4',
    name: 'Purple Rain Berry Cooler',
    category: 'mocktails',
    price: 351.00,
    priceStr: '₹351',
    type: 'veg',
    description: 'Blackcurrant berry coulis blended with fresh lemon and fizzy effervescent soda.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Berry Sparkle']
  },
  {
    id: 'm-5',
    name: 'Lemon Ginger Detox Tea',
    category: 'mocktails',
    price: 222.30,
    priceStr: '₹222.30',
    type: 'veg',
    description: 'Steeped green tea leaves with crushed ginger root, wild honey and organic lemon.',
    image: 'media/espresso-pull-ceramic.jpg',
    tags: ['Herbal Warmth']
  },

  // --- MOMOS & DIMSUMS ---
  {
    id: 'mo-1',
    name: 'Non-Veg Extreme Momos',
    category: 'momos',
    price: 336.70,
    priceStr: '₹336.70',
    type: 'non-veg',
    description: 'Steamed thin-wrapper dumplings filled with juicy minced chicken and fresh herbs.',
    image: 'media/steamed-momos-dimsum.jpg',
    tags: ['Juicy Chicken']
  },
  {
    id: 'mo-2',
    name: 'Veg Crispy Kurkure Momos',
    category: 'momos',
    price: 323.70,
    priceStr: '₹323.70',
    type: 'veg',
    description: 'Vegetable dumplings encased in spiced crunchy batter and fried golden crisp.',
    image: 'media/veg-extreme-momos.jpg',
    tags: ['Extra Crunchy']
  },
  {
    id: 'mo-3',
    name: 'Non-Veg Kurkure Momos',
    category: 'momos',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'non-veg',
    description: 'Crispy cornflake crusted chicken momos with smoky spicy house mayonnaise.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['Crispy Chicken']
  },
  {
    id: 'mo-4',
    name: 'Cheese Chilli Mushroom Momos',
    category: 'momos',
    price: 349.70,
    priceStr: '₹349.70',
    type: 'veg',
    description: 'Filled with sautéed button mushrooms, molten cheese and mild green chillies.',
    image: 'media/steamed-momos-dimsum.jpg',
    tags: ['Cheesy Melt']
  },
  {
    id: 'mo-5',
    name: 'Veg Thai Gravy Momos',
    category: 'momos',
    price: 375.70,
    priceStr: '₹375.70',
    type: 'veg',
    description: 'Delicate steamed momos submerged in fragrant yellow Thai coconut cream sauce.',
    image: 'media/veg-extreme-momos.jpg',
    tags: ['Thai Aromas']
  },

  // --- PIZZAS ---
  {
    id: 'p-1',
    name: 'Farmhouse Supreme Pizza',
    category: 'pizza',
    price: 449.00,
    priceStr: '₹449',
    type: 'veg',
    description: 'Crispy thin crust topped with roasted mushrooms, bell peppers, golden corn, olives & mozzarella.',
    image: 'media/artisan-pizza-oven.jpg',
    tags: ['Garden Fresh']
  },
  {
    id: 'p-2',
    name: 'Paneer Tikka Makhani Pizza',
    category: 'pizza',
    price: 469.00,
    priceStr: '₹469',
    type: 'veg',
    description: 'Marinated cottage cheese cubes, charred onion petals and capsicum over spiced makhani sauce.',
    image: 'media/artisan-pizza-oven.jpg',
    tags: ['Desi Fusion']
  },
  {
    id: 'p-3',
    name: 'Fiery Chicken & Jalapeño Pizza',
    category: 'pizza',
    price: 499.00,
    priceStr: '₹499',
    type: 'non-veg',
    description: 'Shredded roasted chicken, spicy jalapeño slices, fresh oregano and stringy mozzarella.',
    image: 'media/artisan-pizza-oven.jpg',
    tags: ['Spicy Chicken']
  },

  // --- PASTAS & MAINS ---
  {
    id: 'pa-1',
    name: 'Veg Penne Arrabiata',
    category: 'pasta',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Penne tossed in fiery Italian tomato sauce with garlic, black olives, crushed red pepper and parmesan.',
    image: 'media/pasta-trio-spread.jpg',
    tags: ['Spicy Tomato']
  },
  {
    id: 'pa-2',
    name: 'Veg Penne Alfredo',
    category: 'pasta',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Penne smothered in a rich, buttery parmesan garlic cream sauce with tender sautéed broccoli.',
    image: 'media/pasta-trio-spread.jpg',
    tags: ['Silky White Sauce']
  },
  {
    id: 'pa-3',
    name: 'Parmesan Crispy Chicken Piccata',
    category: 'pasta',
    price: 648.70,
    priceStr: '₹648.70',
    type: 'non-veg',
    description: 'Golden parmesan-crusted chicken fillet served with olive oil spaghetti and glazed veggies.',
    image: 'media/table-feast.jpg',
    tags: ['Gourmet Platter']
  },
  {
    id: 'pa-4',
    name: 'Mushroom Stroganoff with Creamy Rice',
    category: 'pasta',
    price: 544.70,
    priceStr: '₹544.70',
    type: 'veg',
    description: 'Tender button mushrooms simmered in a velvety herb cheese sauce, served with buttered herbed rice.',
    image: 'media/pesto-spaghetti-bowl.jpg',
    tags: ['European Classic']
  },
  {
    id: 'pa-5',
    name: 'Flora Special BBQ Chicken',
    category: 'pasta',
    price: 778.70,
    priceStr: '₹778.70',
    type: 'non-veg',
    description: 'Grilled BBQ-glazed chicken breast served alongside whipped mashed potatoes and sautéed greens.',
    image: 'media/table-feast.jpg',
    tags: ['Chef Special']
  },

  // --- BURGERS & TOASTS ---
  {
    id: 'b-1',
    name: 'American Fried Chicken Burger',
    category: 'burgers-toasts',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Crispy fried spiced chicken fillet, chipotle drizzle, dill gherkins and fresh iceberg on toasted brioche.',
    image: 'media/double-cheese-burger.jpg',
    tags: ['Crispy & Juicy']
  },
  {
    id: 'b-2',
    name: 'Chilli Paneer Sandwich',
    category: 'burgers-toasts',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Toasted farmhouse bread loaded with wok-seared cottage cheese, bell peppers and mild oriental spices.',
    image: 'media/cheese-mushroom-toast.jpg',
    tags: ['Hot Pressed']
  },
  {
    id: 'b-3',
    name: 'Smoked Chicken & Jalapeño Sandwich',
    category: 'burgers-toasts',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'non-veg',
    description: 'Charred smoked chicken strips, pickled jalapeño slices, iceberg and herb mayo in artisan bread.',
    image: 'media/cheese-mushroom-toast.jpg',
    tags: ['Smoky Herb']
  },
  {
    id: 'b-4',
    name: 'Flora Mafia Burger',
    category: 'burgers-toasts',
    price: 284.70,
    priceStr: '₹284.70',
    type: 'veg',
    description: 'Savory potato and mushroom spiced patty, chipotle sauce, cheddar cheese slice and garden salad.',
    image: 'media/double-cheese-burger.jpg',
    tags: ['House Spiced']
  },

  // --- STARTERS & FRIES ---
  {
    id: 's-1',
    name: 'Fiery Chilli Chicken Dry',
    category: 'starters',
    price: 466.70,
    priceStr: '₹466.70',
    type: 'non-veg',
    description: 'Juicy chicken bites tossed with fresh green chillies, garlic cloves, scallions and dark soy.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['Spicy Starter']
  },
  {
    id: 's-2',
    name: 'Cheese Chilli Dry',
    category: 'starters',
    price: 440.70,
    priceStr: '₹440.70',
    type: 'veg',
    description: 'Cubes of fresh paneer fried golden and tossed with bell peppers and tangy chilli sauce.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['Indo-Chinese']
  },
  {
    id: 's-3',
    name: 'Peri-Peri Crinkle Fries',
    category: 'starters',
    price: 258.70,
    priceStr: '₹258.70',
    type: 'veg',
    description: 'Hot crisp french fries dusted generously with zesty African peri-peri spice blend.',
    image: 'media/crispy-potato-wedges.jpg',
    tags: ['Spicy Fries']
  },
  {
    id: 's-4',
    name: 'Oriental BBQ Wings',
    category: 'starters',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Crispy fried chicken wings tossed in rich smoky barbecue glaze with toasted sesame seeds.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['Smoky Wings']
  }
];

// Delivery Locations in Jalandhar supported by Café Dé Floraa
const DELIVERY_ZONES = [
  { id: 'urban-estate-2', name: 'Urban Estate Phase II (Local - Free Delivery)', minOrder: 250, fee: 0 },
  { id: 'urban-estate-1', name: 'Urban Estate Phase I', minOrder: 300, fee: 30 },
  { id: '66-feet-road', name: '66 Feet Road Area', minOrder: 250, fee: 0 },
  { id: 'model-town', name: 'Model Town', minOrder: 350, fee: 40 },
  { id: 'ppr-mall', name: 'PPR Mall & Mithapur Road', minOrder: 300, fee: 30 },
  { id: 'defence-colony', name: 'Defence Colony', minOrder: 350, fee: 40 },
  { id: 'chotti-baradari', name: 'Chotti Baradari / BMC Chowk', minOrder: 400, fee: 50 },
  { id: 'cantt-road', name: 'Cantt Road & Jalandhar Cantt', minOrder: 450, fee: 60 },
  { id: 'gtb-nagar', name: 'GTB Nagar / Chunmun Mall', minOrder: 400, fee: 50 },
  { id: 'other-jalandhar', name: 'Other Jalandhar Location (within 8 km)', minOrder: 500, fee: 60 }
];
