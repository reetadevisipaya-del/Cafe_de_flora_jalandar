// ==========================================================================
// Complete Authentic Menu Data for Café Dé Floraa, Jalandhar
// Sourced from all 8 pages of the official Café Dé Floraa Menu PDF & Instagram
// ==========================================================================

const MENU_CATEGORIES = [
  { id: 'all', name: 'Full Garden Menu', icon: '🌸' },
  { id: 'bestsellers', name: 'Chef’s Signatures', icon: '⭐' },
  { id: 'starters', name: 'Starters & Snacks', icon: '🥟' },
  { id: 'momos', name: 'Momos & Dimsums', icon: '🥟' },
  { id: 'fries-salads', name: 'Fries & Salads', icon: '🥗' },
  { id: 'wraps', name: 'Rolled Wraps', icon: '🌯' },
  { id: 'sandwiches', name: 'Gourmet Sandwiches', icon: '🥪' },
  { id: 'burgers', name: 'Stacked Burgers', icon: '🍔' },
  { id: 'pizza', name: 'Artisan Pizzas', icon: '🍕' },
  { id: 'pasta-mains', name: 'Pastas & Mains', icon: '🍝' },
  { id: 'chinese-noodles', name: 'Chinese Boxes & Noodles', icon: '🍜' },
  { id: 'rice-breads', name: 'Rice & Tandoor Breads', icon: '🍚' },
  { id: 'coffee-hot', name: 'Espresso Bar & Brews', icon: '☕' },
  { id: 'coffee-cold', name: 'Chilled Coffees & Shakes', icon: '🧊' },
  { id: 'mocktails', name: 'Fizzy Coolers & Teas', icon: '🍹' },
  { id: 'desserts', name: 'Desserts & Bakes', icon: '🍰' }
];

const MENU_ITEMS = [
  // =========================================================================
  // PAGE 2: VEG SNACKS (Starters & Sharing Plates)
  // =========================================================================
  {
    id: 'vs-1',
    name: 'Cheese Chilli Dry',
    category: 'starters',
    price: 440.70,
    priceStr: '₹440.70',
    type: 'veg',
    description: 'Crispy batter-fried paneer cubes tossed with crunchy bell peppers, onions, and spicy dark soy oriental glaze.',
    image: 'media/cheese-chilli.jpg',
    tags: ['Indo-Chinese', 'Popular']
  },
  {
    id: 'vs-2',
    name: 'Hong Kong Manchurian',
    category: 'starters',
    price: 427.70,
    priceStr: '₹427.70',
    type: 'veg',
    description: 'Golden vegetable dumplings sautéed in a savory, aromatic Hong Kong wok sauce with scallions and garlic.',
    image: 'media/manchurian.jpg',
    tags: ['Wok Tossed']
  },
  {
    id: 'vs-3',
    name: 'Cottage Cheese Fa-fa',
    category: 'starters',
    price: 466.70,
    priceStr: '₹466.70',
    type: 'veg',
    isSignature: true,
    description: 'Floraa special spiced cottage cheese strips fried golden crisp, served with house special dipping sauces.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['House Special', 'Sharing Plate']
  },
  {
    id: 'vs-4',
    name: 'Spicy Mushroom Chilli',
    category: 'starters',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Crisp button mushrooms wok-seared with fiery green chillies, garlic, and sweet soy glaze.',
    image: 'media/mushroom-chilli.jpg',
    tags: ['Spicy', 'Crispy Mushroom']
  },
  {
    id: 'vs-5',
    name: 'Crispy Chilli Corn',
    category: 'starters',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Golden fried sweet corn kernels tossed with fresh spring onions, capsicum, and oriental spice blend.',
    image: 'media/chilli-corn.jpg',
    tags: ['Crunchy', 'Snack']
  },
  {
    id: 'vs-6',
    name: 'Veg Spring Rolls',
    category: 'starters',
    price: 336.70,
    priceStr: '₹336.70',
    type: 'veg',
    description: 'Handmade thin pastry rolls filled with seasoned shredded farm vegetables, fried crisp and served with sweet chilli dip.',
    image: 'media/spring-rolls.jpg',
    tags: ['Crispy Rolls']
  },
  {
    id: 'vs-7',
    name: 'Honey Chilli Potato',
    category: 'starters',
    price: 323.70,
    priceStr: '₹323.70',
    type: 'veg',
    description: 'Crispy finger potatoes glazed in sweet spicy honey sauce and garnished with toasted white sesame seeds.',
    image: 'media/honey-chilli-potato.jpg',
    tags: ['Sweet & Spicy', 'All-Time Favorite']
  },

  // =========================================================================
  // PAGE 2: NON-VEG SNACKS
  // =========================================================================
  {
    id: 'nvs-1',
    name: 'Chicken Fa-fa',
    category: 'starters',
    price: 518.70,
    priceStr: '₹518.70',
    type: 'non-veg',
    isSignature: true,
    description: 'Signature crispy boneless chicken tenders coated in special house spice blend, served with dual gourmet dips.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['Chef Special', 'Must Try']
  },
  {
    id: 'nvs-2',
    name: 'Fiery Chilli Chicken Dry',
    category: 'starters',
    price: 466.70,
    priceStr: '₹466.70',
    type: 'non-veg',
    description: 'Tender chicken bites tossed with fresh green chillies, garlic cloves, scallions and dark soy reduction.',
    image: 'media/dragon-chicken.jpg',
    tags: ['Spicy', 'Classic Chicken']
  },
  {
    id: 'nvs-3',
    name: 'Chicken Spring Rolls',
    category: 'starters',
    price: 440.70,
    priceStr: '₹440.70',
    type: 'non-veg',
    description: 'Golden rolls packed with seasoned minced chicken, wok greens, and mild spices with sweet chilli sauce.',
    image: 'media/spring-rolls.jpg',
    tags: ['Chicken Rolls']
  },
  {
    id: 'nvs-4',
    name: 'Honey Chicken Dry',
    category: 'starters',
    price: 466.70,
    priceStr: '₹466.70',
    type: 'non-veg',
    description: 'Crisp chicken cubes glazed in a delicate honey-ginger sauce and topped with toasted sesame.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['Honey Glazed']
  },
  {
    id: 'nvs-5',
    name: 'Dragon Chicken Dry',
    category: 'starters',
    price: 518.70,
    priceStr: '₹518.70',
    type: 'non-veg',
    description: 'Strips of chicken tossed with spicy red pepper sauce, dried chillies, and crunchy roasted cashew nuts.',
    image: 'media/dragon-chicken.jpg',
    tags: ['Spicy Dragon']
  },
  {
    id: 'nvs-6',
    name: 'Oriental BBQ Wings',
    category: 'starters',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Juicy chicken wings roasted and coated in sticky smoky barbecue sauce with fresh herbs.',
    image: 'media/bbq-wings.jpg',
    tags: ['Smoky Wings']
  },

  // =========================================================================
  // PAGE 2: MOMOS & DIMSUMS (Steamed, Fried, Kurkure & Gravy)
  // =========================================================================
  {
    id: 'mo-1',
    name: 'Veg Extreme Momos',
    category: 'momos',
    price: 297.70,
    priceStr: '₹297.70',
    type: 'veg',
    isSignature: true,
    description: 'Authentic steamed Himalayan dumplings stuffed with finely minced crisp garden vegetables, served with red chilli dip.',
    image: 'media/veg-extreme-momos.jpg',
    tags: ['Best Seller', 'Steamed']
  },
  {
    id: 'mo-2',
    name: 'Non-veg Extreme Momos',
    category: 'momos',
    price: 336.70,
    priceStr: '₹336.70',
    type: 'non-veg',
    description: 'Steamed thin-wrapper dumplings filled with succulent spiced minced chicken and fresh herbs.',
    image: 'media/steamed-momos-dimsum.jpg',
    tags: ['Juicy Chicken', 'Steamed']
  },
  {
    id: 'mo-3',
    name: 'Veg Fried Momos',
    category: 'momos',
    price: 323.70,
    priceStr: '₹323.70',
    type: 'veg',
    description: 'Golden fried vegetable momos with a crunchy exterior and warm, savory filling.',
    image: 'media/fried-momos.jpg',
    tags: ['Fried Crunch']
  },
  {
    id: 'mo-4',
    name: 'Non-veg Fried Momos',
    category: 'momos',
    price: 349.70,
    priceStr: '₹349.70',
    type: 'non-veg',
    description: 'Deep-fried crispy chicken dumplings served with spicy garlic mayo and fiery red chutney.',
    image: 'media/fried-momos.jpg',
    tags: ['Fried Chicken']
  },
  {
    id: 'mo-5',
    name: 'Veg Crispy Kurkure Momos',
    category: 'momos',
    price: 323.70,
    priceStr: '₹323.70',
    type: 'veg',
    description: 'Veg momos coated in crunchy seasoned cornflake crust, fried extra crisp for maximum texture.',
    image: 'media/veg-extreme-momos.jpg',
    tags: ['Extra Crunchy']
  },
  {
    id: 'mo-6',
    name: 'Non-veg Crispy Kurkure Momos',
    category: 'momos',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'non-veg',
    description: 'Juicy chicken momos encased in an ultra-crispy spiced crust, served piping hot with house salsa.',
    image: 'media/crispy-chicken-fafa.jpg',
    tags: ['Crispy Chicken']
  },
  {
    id: 'mo-7',
    name: 'Veg Cheese Chilli Mushroom Momos',
    category: 'momos',
    price: 349.70,
    priceStr: '₹349.70',
    type: 'veg',
    description: 'Filled with melted mozzarella, sautéed button mushrooms, and mild green chillies.',
    image: 'media/steamed-momos-dimsum.jpg',
    tags: ['Cheese Pull']
  },
  {
    id: 'mo-8',
    name: 'Non-veg Cheese Chilli Mushroom Momos',
    category: 'momos',
    price: 375.70,
    priceStr: '₹375.70',
    type: 'non-veg',
    description: 'Minced chicken blended with molten cheese, roasted mushrooms, and green chillies.',
    image: 'media/steamed-momos-dimsum.jpg',
    tags: ['Cheesy Chicken']
  },
  {
    id: 'mo-9',
    name: 'Veg Extreme Momos With Gravy',
    category: 'momos',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'veg',
    description: 'Steamed vegetable dumplings submerged in a rich, creamy, spiced house gravy.',
    image: 'media/gravy-momos.jpg',
    tags: ['Rich Gravy']
  },
  {
    id: 'mo-10',
    name: 'Non-veg Extreme Momos With Gravy',
    category: 'momos',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Chicken momos simmered in aromatic gravy infused with garlic, butter, and herbs.',
    image: 'media/gravy-momos.jpg',
    tags: ['Rich Gravy']
  },
  {
    id: 'mo-11',
    name: 'Veg Thai Gravy Momos',
    category: 'momos',
    price: 375.70,
    priceStr: '₹375.70',
    type: 'veg',
    description: 'Steamed dumplings served in fragrant yellow Thai coconut curry with lemongrass notes.',
    image: 'media/gravy-momos.jpg',
    tags: ['Thai Coconut']
  },
  {
    id: 'mo-12',
    name: 'Non-veg Thai Gravy Momos',
    category: 'momos',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'non-veg',
    description: 'Succulent chicken momos bathed in a creamy Thai coconut herb broth with fresh coriander.',
    image: 'media/gravy-momos.jpg',
    tags: ['Thai Lemongrass']
  },

  // =========================================================================
  // PAGE 3: FRIES & SALADS
  // =========================================================================
  {
    id: 'fr-1',
    name: 'Classic French Fries',
    category: 'fries-salads',
    price: 232.70,
    priceStr: '₹232.70',
    type: 'veg',
    description: 'Crispy golden potato fries, seasoned with fine sea salt, served with house tomato ketchup.',
    image: 'media/french-fries.jpg',
    tags: ['Classic']
  },
  {
    id: 'fr-2',
    name: 'Peri-peri Fries',
    category: 'fries-salads',
    price: 258.70,
    priceStr: '₹258.70',
    type: 'veg',
    description: 'Hot crispy potato fries dusted with zesty African bird’s eye peri-peri spice mix.',
    image: 'media/crispy-potato-wedges.jpg',
    tags: ['Spicy']
  },
  {
    id: 'fr-3',
    name: 'Cheese Fries',
    category: 'fries-salads',
    price: 258.70,
    priceStr: '₹258.70',
    type: 'veg',
    description: 'Golden fries smothered in warm velvety melted cheddar cheese sauce.',
    image: 'media/cheese-fries.jpg',
    tags: ['Cheesy']
  },
  {
    id: 'fr-4',
    name: 'Crispy Potato Wedges',
    category: 'fries-salads',
    price: 284.70,
    priceStr: '₹284.70',
    type: 'veg',
    isSignature: true,
    description: 'Chunky seasoned potato wedges, crisp exterior, fluffy interior, served with garlic herb dip & salsa.',
    image: 'media/crispy-potato-wedges.jpg',
    tags: ['Most Loved', 'Snack']
  },
  {
    id: 'sal-1',
    name: 'Cottage Cheese Caesar Salad',
    category: 'fries-salads',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'veg',
    description: 'Fresh lettuce tossed in cumin vinaigrette, topped with pineapple, bell peppers, gherkins, cucumber and grilled paneer.',
    image: 'media/caesar-salad.jpg',
    tags: ['Fresh & Crunchy']
  },
  {
    id: 'sal-2',
    name: 'Chicken Caesar Salad',
    category: 'fries-salads',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'non-veg',
    description: 'Crisp iceberg lettuce with herb-grilled chicken in creamy Caesar dressing, served with herb croutons and parmesan.',
    image: 'media/chicken-caesar-salad.jpg',
    tags: ['High Protein']
  },

  // =========================================================================
  // PAGE 3: ROLLED WRAPS (Veg & Non-Veg)
  // =========================================================================
  {
    id: 'wr-1',
    name: 'Bbq Mushroom-broccoli Wrap',
    category: 'wraps',
    price: 206.70,
    priceStr: '₹206.70',
    type: 'veg',
    description: 'Smoky grilled mushrooms and broccoli florets rolled with BBQ glaze in a fresh tortilla.',
    image: 'media/veg-wrap.jpg',
    tags: ['Smoky BBQ']
  },
  {
    id: 'wr-2',
    name: 'Dragon Veggies Wrap',
    category: 'wraps',
    price: 206.70,
    priceStr: '₹206.70',
    type: 'veg',
    description: 'Spicy wok-tossed vegetables, red chillies, and creamy spread in a soft grilled wrap.',
    image: 'media/veg-wrap.jpg',
    tags: ['Spicy Veg']
  },
  {
    id: 'wr-3',
    name: 'Chilli Cheese Wrap',
    category: 'wraps',
    price: 206.70,
    priceStr: '₹206.70',
    type: 'veg',
    description: 'Melted cheese, spiced paneer cubes, and crunchy peppers wrapped with tangy dressing.',
    image: 'media/veg-wrap.jpg',
    tags: ['Cheesy Wrap']
  },
  {
    id: 'wr-4',
    name: 'Thai Basil Cheese Wrap',
    category: 'wraps',
    price: 219.70,
    priceStr: '₹219.70',
    type: 'veg',
    description: 'Fresh Thai basil, molten cheese, and sautéed greens rolled in a toasted tortilla.',
    image: 'media/veg-wrap.jpg',
    tags: ['Thai Basil']
  },
  {
    id: 'wr-5',
    name: 'Chilli Mushroom Wrap',
    category: 'wraps',
    price: 206.70,
    priceStr: '₹206.70',
    type: 'veg',
    description: 'Spiced button mushrooms, onions, and capsicum with tangy sauce in a fresh roll.',
    image: 'media/veg-wrap.jpg',
    tags: ['Mushroom Special']
  },
  {
    id: 'wr-6',
    name: 'Double Egg Wrap',
    category: 'wraps',
    price: 167.70,
    priceStr: '₹167.70',
    type: 'egg',
    description: 'Double farm eggs prepared with cracked pepper and rolled with crunchy pickled onions.',
    image: 'media/egg-wrap.jpg',
    tags: ['Egg Special']
  },
  {
    id: 'wr-7',
    name: 'Spicy Chilli Chicken Wrap',
    category: 'wraps',
    price: 219.70,
    priceStr: '₹219.70',
    type: 'non-veg',
    description: 'Tender chicken strips tossed in spicy chilli sauce with lettuce and garlic mayo.',
    image: 'media/chicken-wrap.jpg',
    tags: ['Spicy Chicken']
  },
  {
    id: 'wr-8',
    name: 'Spicy Egg Chicken Wrap',
    category: 'wraps',
    price: 206.70,
    priceStr: '₹206.70',
    type: 'non-veg',
    description: 'Juicy spiced chicken and fluffy egg omelette rolled with house special sauces.',
    image: 'media/chicken-wrap.jpg',
    tags: ['Egg & Chicken']
  },
  {
    id: 'wr-9',
    name: 'Thai Basil Chicken Wrap',
    category: 'wraps',
    price: 232.70,
    priceStr: '₹232.70',
    type: 'non-veg',
    description: 'Fragrant chicken wok-cooked with Thai sweet basil, garlic, and fresh lettuce.',
    image: 'media/chicken-wrap.jpg',
    tags: ['Thai Flavors']
  },
  {
    id: 'wr-10',
    name: 'Dragon Chicken Wrap',
    category: 'wraps',
    price: 219.70,
    priceStr: '₹219.70',
    type: 'non-veg',
    description: 'Fiery dragon-glazed chicken with crunchy peppers and garlic dressing in a grilled wrap.',
    image: 'media/chicken-wrap.jpg',
    tags: ['Dragon Spice']
  },

  // =========================================================================
  // PAGE 4: GOURMET SANDWICHES
  // =========================================================================
  {
    id: 'sw-1',
    name: 'Chilli Paneer Sandwich',
    category: 'sandwiches',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Grilled sourdough bread stuffed with wok-tossed spiced cottage cheese, peppers, and cheese.',
    image: 'media/paneer-sandwich.jpg',
    tags: ['Grilled']
  },
  {
    id: 'sw-2',
    name: 'Paneer Tikka Sandwich',
    category: 'sandwiches',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Tandoor spiced paneer cubes layered with mint mayo, cucumber, and crisp onions.',
    image: 'media/paneer-sandwich.jpg',
    tags: ['Tandoori Flavor']
  },
  {
    id: 'sw-3',
    name: 'Pesto Peppers Sandwich',
    category: 'sandwiches',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Grilled pesto peppers, zucchini, button mushroom, broccoli florets, and fresh crisp lettuce.',
    image: 'media/cheese-mushroom-toast.jpg',
    tags: ['Herb Pesto']
  },
  {
    id: 'sw-4',
    name: 'Veg Club Sandwich',
    category: 'sandwiches',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'veg',
    description: 'Double-decked toasted sandwich stacked with tomato, cucumber, iceberg lettuce, coleslaw and cheddar cheese.',
    image: 'media/club-sandwich.jpg',
    tags: ['Triple Decker']
  },
  {
    id: 'sw-5',
    name: 'Chicken Tikka Sandwich',
    category: 'sandwiches',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'non-veg',
    description: 'Marinated roasted chicken tikka slices with mint spread and fresh crunchy greens.',
    image: 'media/chicken-sandwich.jpg',
    tags: ['Roasted Chicken']
  },
  {
    id: 'sw-6',
    name: 'Chilli Chicken Sandwich',
    category: 'sandwiches',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'non-veg',
    description: 'Spiced Indo-Chinese chicken chunks with sautéed onions and melted cheese in toasted bread.',
    image: 'media/chicken-sandwich.jpg',
    tags: ['Spicy Chicken']
  },
  {
    id: 'sw-7',
    name: 'Smoked Chicken Sandwich',
    category: 'sandwiches',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'non-veg',
    description: 'Grilled marinated chicken breast and pickled jalapeños with herb mayonnaise.',
    image: 'media/chicken-sandwich.jpg',
    tags: ['Smoked Herb']
  },
  {
    id: 'sw-8',
    name: 'Chicken Club Sandwich',
    category: 'sandwiches',
    price: 440.70,
    priceStr: '₹440.70',
    type: 'non-veg',
    description: 'Double-decked sandwich with fried egg, grilled chicken slices, fresh tomato, cucumber, lettuce and cheese slice.',
    image: 'media/club-sandwich.jpg',
    tags: ['Double Decker']
  },
  {
    id: 'sw-9',
    name: 'Cheese Mushroom Toast',
    category: 'sandwiches',
    price: 349.00,
    priceStr: '₹349',
    type: 'veg',
    isSignature: true,
    description: 'Crispy artisanal toast loaded with herb-sautéed wild button mushrooms, roasted thyme, and molten cheese.',
    image: 'media/cheese-mushroom-toast.jpg',
    tags: ['Instagram Hit', 'Signature']
  },

  // =========================================================================
  // PAGE 4: STACKED BURGERS
  // =========================================================================
  {
    id: 'bg-1',
    name: 'Flora Mafia Burger',
    category: 'burgers',
    price: 284.70,
    priceStr: '₹284.70',
    type: 'veg',
    description: 'Potato and mushroom patty, lettuce, onion, tomato, cheese slice, and chipotle sauce with house salsa.',
    image: 'media/double-cheese-burger.jpg',
    tags: ['Spicy', 'House Salsa']
  },
  {
    id: 'bg-2',
    name: 'Cheese City Side Burger',
    category: 'burgers',
    price: 310.70,
    priceStr: '₹310.70',
    type: 'veg',
    description: 'Crispy paneer patty, onion, cucumber, cheese, lettuce, gherkin and chipotle sauce.',
    image: 'media/double-cheese-burger.jpg',
    tags: ['Crispy Paneer']
  },
  {
    id: 'bg-3',
    name: 'Double Cheese Burger',
    category: 'burgers',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    isSignature: true,
    description: 'Double layers of melted cheddar, gourmet patty, fresh tomatoes, crisp lettuce, and special burger relish.',
    image: 'media/double-cheese-burger.jpg',
    tags: ['Double Cheese', 'Chef Special']
  },
  {
    id: 'bg-4',
    name: 'Grilled Chicken Burger',
    category: 'burgers',
    price: 336.70,
    priceStr: '₹336.70',
    type: 'non-veg',
    description: 'Grilled chicken patty with chipotle sauce, grilled onion, tomato, pickle, cucumber and iceberg lettuce.',
    image: 'media/grilled-chicken-burger.jpg',
    tags: ['Lean & Juicy']
  },
  {
    id: 'bg-5',
    name: 'American Fried Chicken Burger',
    category: 'burgers',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Crispy fried chicken, chipotle sauce, onion, cucumber, iceberg lettuce and melted cheese blend.',
    image: 'media/grilled-chicken-burger.jpg',
    tags: ['Crispy Fried']
  },

  // =========================================================================
  // PAGE 4 & INSTAGRAM: ARTISAN PIZZAS
  // =========================================================================
  {
    id: 'pz-1',
    name: 'Heart-Shaped Valentine Pizza',
    category: 'pizza',
    price: 480.00,
    priceStr: '₹480',
    type: 'veg',
    isSignature: true,
    description: 'Handcrafted heart crust with tomato reduction, bell peppers, olives, herbs, and mozzarella.',
    image: 'media/heart-pizza.jpg',
    tags: ['Valentine Special', 'Handcrafted']
  },
  {
    id: 'pz-2',
    name: 'Cheesy Garden Margherita',
    category: 'pizza',
    price: 399.00,
    priceStr: '₹399',
    type: 'veg',
    description: 'Classic Italian tomato concassé, fresh mozzarella, extra virgin olive oil and torn fresh basil leaves.',
    image: 'media/artisan-pizza-oven.jpg',
    tags: ['Italian Classic']
  },
  {
    id: 'pz-3',
    name: 'Farmhouse Supreme Pizza',
    category: 'pizza',
    price: 449.00,
    priceStr: '₹449',
    type: 'veg',
    description: 'Loaded with roasted mushrooms, bell peppers, sweet corn, black olives, onions and cheese blend.',
    image: 'media/artisan-pizza-oven.jpg',
    tags: ['Garden Fresh']
  },
  {
    id: 'pz-4',
    name: 'Paneer Tikka Makhani Pizza',
    category: 'pizza',
    price: 469.00,
    priceStr: '₹469',
    type: 'veg',
    description: 'Tandoori spiced paneer cubes, roasted capsicum, onion petals on makhani sauce base.',
    image: 'media/artisan-pizza-oven.jpg',
    tags: ['Desi Fusion']
  },
  {
    id: 'pz-5',
    name: 'Fiery Chicken & Jalapeño Pizza',
    category: 'pizza',
    price: 499.00,
    priceStr: '₹499',
    type: 'non-veg',
    description: 'Herb grilled chicken, spicy pickled jalapeños, red onions, mozzarella and chili oregano oil.',
    image: 'media/artisan-pizza-oven.jpg',
    tags: ['Spicy Chicken']
  },

  // =========================================================================
  // PAGE 4 & 5: PASTAS & EUROPEAN MAINS
  // =========================================================================
  {
    id: 'pa-1',
    name: 'Spaghetti Aglio E Olio',
    category: 'pasta-mains',
    price: 414.70,
    priceStr: '₹414.70',
    type: 'veg',
    isSignature: true,
    description: 'Spaghetti tossed in olive oil, garlic, basil, parsley, cherry tomatoes, and red pepper flakes.',
    image: 'media/spaghetti-aglio-olio.jpg',
    tags: ['Italian Pride', 'Must Try']
  },
  {
    id: 'pa-2',
    name: 'Veg Penne Arrabiata',
    category: 'pasta-mains',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Italian concasse tomato sauce, fragrant basil, black olives, oregano, herbs, and shaved parmesan.',
    image: 'media/penne-arrabiata.jpg',
    tags: ['Spicy Tomato']
  },
  {
    id: 'pa-3',
    name: 'Veg Penne Alfredo',
    category: 'pasta-mains',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Penne tossed in velvety rich cheese white sauce with sautéed spring vegetables and broccoli.',
    image: 'media/penne-alfredo.jpg',
    tags: ['Creamy Alfredo']
  },
  {
    id: 'pa-4',
    name: 'Pesto Spaghetti with Garlic Bread',
    category: 'pasta-mains',
    price: 440.00,
    priceStr: '₹440',
    type: 'veg',
    isSignature: true,
    description: 'Spaghetti tossed in homemade basil pesto, sundried tomatoes, served with crusty garlic bread.',
    image: 'media/pesto-garlic-bread-pasta.jpg',
    tags: ['Aromatic Pesto']
  },
  {
    id: 'mn-1',
    name: 'Mushroom Stroganoff',
    category: 'pasta-mains',
    price: 544.70,
    priceStr: '₹544.70',
    type: 'veg',
    description: 'Herb-flavoured mushrooms in cheese sauce. Served with creamy buttered rice.',
    image: 'media/mushroom-stroganoff.jpg',
    tags: ['European Main']
  },
  {
    id: 'mn-2',
    name: 'Parmesan Crispy Cheese Piccata',
    category: 'pasta-mains',
    price: 609.70,
    priceStr: '₹609.70',
    type: 'veg',
    description: 'Pan-grilled cheese crusted with parmesan. Served with spaghetti aglio-olio and sauté.',
    image: 'media/table-feast.jpg',
    tags: ['Platter Special']
  },
  {
    id: 'mn-3',
    name: 'Chicken Stroganoff',
    category: 'pasta-mains',
    price: 648.70,
    priceStr: '₹648.70',
    type: 'non-veg',
    description: 'Herb-flavoured chicken in cheese sauce. Served with herb creamy rice.',
    image: 'media/chicken-stroganoff.jpg',
    tags: ['Creamy Chicken']
  },
  {
    id: 'mn-4',
    name: 'Parmesan Crispy Chicken Piccata',
    category: 'pasta-mains',
    price: 648.70,
    priceStr: '₹648.70',
    type: 'non-veg',
    description: 'Pan-grilled chicken breast with parmesan crust. Served with spaghetti and sauté.',
    image: 'media/table-feast.jpg',
    tags: ['Chef Special']
  },
  {
    id: 'mn-5',
    name: 'Flora Special Bbq Chicken',
    category: 'pasta-mains',
    price: 778.70,
    priceStr: '₹778.70',
    type: 'non-veg',
    isSignature: true,
    description: 'BBQ chicken breast served with whipped mashed potatoes, sautéed fresh vegetables.',
    image: 'media/table-feast.jpg',
    tags: ['BBQ Feast']
  },

  // =========================================================================
  // PAGE 5: FLORA CHINESE BOX & NOODLES
  // =========================================================================
  {
    id: 'cb-1',
    name: 'Sweet & Sour Chinese Box',
    category: 'chinese-noodles',
    price: 323.70,
    priceStr: '₹323.70',
    type: 'veg',
    description: 'Sweet and tangy gravy, zero spice, perfect for kids. Served over choice of rice or noodles.',
    image: 'media/chinese-box.jpg',
    tags: ['Mild / Kids']
  },
  {
    id: 'cb-2',
    name: 'Hong Kong Manchurian Box',
    category: 'chinese-noodles',
    price: 349.70,
    priceStr: '₹349.70',
    type: 'veg',
    description: 'Manchurian dumplings with savory garlic soy sauce, served with rice or noodles.',
    image: 'media/chinese-box.jpg',
    tags: ['Manchurian Box']
  },
  {
    id: 'cb-3',
    name: 'Cheese Chilly Chinese Box',
    category: 'chinese-noodles',
    price: 375.70,
    priceStr: '₹375.70',
    type: 'veg',
    description: 'Mild spicy cheese with peppers in soy sauce (served in a hearty bowl).',
    image: 'media/cheese-chilli.jpg',
    tags: ['Chilli Paneer']
  },
  {
    id: 'cb-4',
    name: 'Asian Chilly Chicken Box',
    category: 'chinese-noodles',
    price: 375.70,
    priceStr: '₹375.70',
    type: 'non-veg',
    description: 'Tender chicken pieces in oriental chilli soy reduction with rice or noodles.',
    image: 'media/chinese-box.jpg',
    tags: ['Asian Chilly']
  },
  {
    id: 'cb-5',
    name: 'Dragon Chicken Box',
    category: 'chinese-noodles',
    price: 375.70,
    priceStr: '₹375.70',
    type: 'non-veg',
    description: 'Fried chicken with red peppers and fiery sauce served over wok noodles or rice.',
    image: 'media/dragon-chicken.jpg',
    tags: ['Spicy Dragon']
  },
  {
    id: 'cb-6',
    name: 'Honey Chicken Box',
    category: 'chinese-noodles',
    price: 375.70,
    priceStr: '₹375.70',
    type: 'non-veg',
    description: 'Sweet-seasoned chicken with lots of honey glaze, served in a steaming bowl.',
    image: 'media/chinese-box.jpg',
    tags: ['Honey Glaze']
  },
  {
    id: 'nd-1',
    name: 'Veg Hakka Noodles',
    category: 'chinese-noodles',
    price: 336.70,
    priceStr: '₹336.70',
    type: 'veg',
    description: 'Wok-tossed thin noodles with crunchy cabbage, capsicum, carrots, and light soy seasoning.',
    image: 'media/hakka-noodles.jpg',
    tags: ['Classic Hakka']
  },
  {
    id: 'nd-2',
    name: 'Veg Chilli Garlic Noodles',
    category: 'chinese-noodles',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'veg',
    description: 'Fiery wok noodles tossed with burnt garlic, red chillies, and shredded vegetables.',
    image: 'media/chilli-garlic-noodles.jpg',
    tags: ['Spicy Garlic']
  },
  {
    id: 'nd-3',
    name: 'Veg Chowmein Noodles',
    category: 'chinese-noodles',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'veg',
    description: 'Traditional Indo-Chinese street-style chowmein with crisp veggies and dark seasoning.',
    image: 'media/hakka-noodles.jpg',
    tags: ['Desi Chowmein']
  },
  {
    id: 'nd-4',
    name: 'Veg Flora Special Noodles',
    category: 'chinese-noodles',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'veg',
    description: 'Floraa secret blend of spices, exotic vegetables, mushrooms, and wok noodles.',
    image: 'media/chilli-garlic-noodles.jpg',
    tags: ['Flora Special']
  },
  {
    id: 'nd-5',
    name: 'Non-veg Veg Hakka Noodles',
    category: 'chinese-noodles',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Wok-tossed noodles with shredded chicken, crunchy vegetables, and delicate spices.',
    image: 'media/hakka-noodles.jpg',
    tags: ['Chicken Hakka']
  },
  {
    id: 'nd-6',
    name: 'Non-veg Chilli Garlic Noodles',
    category: 'chinese-noodles',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Spicy wok-tossed noodles with chicken strips, roasted garlic, and fiery chillies.',
    image: 'media/chilli-garlic-noodles.jpg',
    tags: ['Spicy Chicken']
  },
  {
    id: 'nd-7',
    name: 'Non-veg Chowmein Noodles',
    category: 'chinese-noodles',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Savory chicken chowmein prepared with dark soy, crunchy greens, and tender chicken.',
    image: 'media/hakka-noodles.jpg',
    tags: ['Chicken Chowmein']
  },
  {
    id: 'nd-8',
    name: 'Non-veg Flora Special Noodles',
    category: 'chinese-noodles',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Signature house-recipe wok noodles loaded with chicken, eggs, and exotic peppers.',
    image: 'media/chilli-garlic-noodles.jpg',
    tags: ['Chef Signature']
  },

  // =========================================================================
  // PAGE 6: RICE, PULAO & TANDOOR BREADS
  // =========================================================================
  {
    id: 'rc-1',
    name: 'Veg Fried Rice',
    category: 'rice-breads',
    price: 336.70,
    priceStr: '₹336.70',
    type: 'veg',
    description: 'Aromatic basmati rice tossed with diced vegetables, spring onions, and gentle soy seasoning.',
    image: 'media/fried-rice.jpg',
    tags: ['Wok Fried']
  },
  {
    id: 'rc-2',
    name: 'Veg Flora Special Rice',
    category: 'rice-breads',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'veg',
    description: 'Signature fried rice with exotic farm vegetables, paneer cubes, and house seasoning.',
    image: 'media/fried-rice.jpg',
    tags: ['Flora Special']
  },
  {
    id: 'rc-3',
    name: 'Veg Egg Fried Rice',
    category: 'rice-breads',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'egg',
    description: 'Fluffy scrambled egg shreds tossed with long-grain rice, greens, and pepper.',
    image: 'media/fried-rice.jpg',
    tags: ['Egg Rice']
  },
  {
    id: 'rc-4',
    name: 'Non-veg Egg Fried Rice',
    category: 'rice-breads',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'egg',
    description: 'Golden scrambled eggs and diced chicken wok-tossed with seasoned rice.',
    image: 'media/fried-rice.jpg',
    tags: ['Chicken & Egg']
  },
  {
    id: 'rc-5',
    name: 'Non-veg Fried Rice',
    category: 'rice-breads',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'Wok-cooked basmati rice with succulent shredded chicken and fresh scallions.',
    image: 'media/fried-rice.jpg',
    tags: ['Chicken Rice']
  },
  {
    id: 'rc-6',
    name: 'Non-veg Flora Special Rice',
    category: 'rice-breads',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'non-veg',
    description: 'House special aromatic rice tossed with chicken, eggs, and rich oriental sauce.',
    image: 'media/fried-rice.jpg',
    tags: ['Special Chicken Rice']
  },
  {
    id: 'rc-7',
    name: 'Plain Rice',
    category: 'rice-breads',
    price: 247.00,
    priceStr: '₹247',
    type: 'veg',
    description: 'Steamed fragrant long-grain basmati rice.',
    image: 'media/jeera-rice.jpg',
    tags: ['Basmati']
  },
  {
    id: 'rc-8',
    name: 'Jeera Rice',
    category: 'rice-breads',
    price: 273.00,
    priceStr: '₹273',
    type: 'veg',
    description: 'Basmati rice tempered with roasted cumin seeds and fresh ghee.',
    image: 'media/jeera-rice.jpg',
    tags: ['Cumin Tempered']
  },
  {
    id: 'rc-9',
    name: 'Peas Pulao',
    category: 'rice-breads',
    price: 273.00,
    priceStr: '₹273',
    type: 'veg',
    description: 'Aromatic basmati cooked with tender green peas and whole fragrant spices.',
    image: 'media/veg-pulao.jpg',
    tags: ['Green Peas']
  },
  {
    id: 'rc-10',
    name: 'Veg Pulao',
    category: 'rice-breads',
    price: 325.00,
    priceStr: '₹325',
    type: 'veg',
    description: 'Traditional fragrant rice prepared with diced garden vegetables and saffron hints.',
    image: 'media/veg-pulao.jpg',
    tags: ['Fragrant Pulao']
  },
  {
    id: 'br-1',
    name: 'Tandoori Roti',
    category: 'rice-breads',
    price: 32.50,
    priceStr: '₹32.50',
    type: 'veg',
    description: 'Fresh whole-wheat Indian flatbread baked hot in the clay tandoor oven.',
    image: 'media/tandoori-roti.jpg',
    tags: ['From Tandoor']
  },
  {
    id: 'br-2',
    name: 'Pudina Paratha',
    category: 'rice-breads',
    price: 84.50,
    priceStr: '₹84.50',
    type: 'veg',
    description: 'Crisp layered tandoori paratha infused with fragrant dried mint and butter.',
    image: 'media/tandoori-roti.jpg',
    tags: ['Mint Paratha']
  },

  // =========================================================================
  // PAGE 6 & 7: ESPRESSO BAR & MILK-BASED HOT COFFEES
  // =========================================================================
  {
    id: 'co-1',
    name: 'Espresso',
    category: 'coffee-hot',
    price: 162.50,
    priceStr: '₹162.50',
    type: 'veg',
    description: 'Concentrated coffee served in shots for an instant burst of pure aroma and energy.',
    image: 'media/espresso-pull-ceramic.jpg',
    tags: ['9-Bar Extraction']
  },
  {
    id: 'co-2',
    name: 'Espresso Romano',
    category: 'coffee-hot',
    price: 221.00,
    priceStr: '₹221',
    type: 'veg',
    description: 'A traditional Italian beverage with a robust espresso flavour and a tangy twist of fresh lemon.',
    image: 'media/espresso-pull-ceramic.jpg',
    tags: ['Italian Twist']
  },
  {
    id: 'co-3',
    name: 'Americano',
    category: 'coffee-hot',
    price: 214.50,
    priceStr: '₹214.50',
    type: 'veg',
    description: 'Bold espresso mellowed with hot filtered water. Perfect for black coffee purists.',
    image: 'media/americano.jpg',
    tags: ['Black Coffee']
  },
  {
    id: 'co-4',
    name: 'Macchiato',
    category: 'coffee-hot',
    price: 188.50,
    priceStr: '₹188.50',
    type: 'veg',
    description: 'A bold espresso marked with a delicate dash of frothy steamed milk.',
    image: 'media/macchiato.jpg',
    tags: ['Marked Espresso']
  },
  {
    id: 'co-5',
    name: 'Flat White',
    category: 'coffee-hot',
    price: 299.00,
    priceStr: '₹299',
    type: 'veg',
    description: 'A rich-flavoured coffee with double espresso and velvety steamed whole milk.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Barista Favorite']
  },
  {
    id: 'co-6',
    name: 'Affogato',
    category: 'coffee-hot',
    price: 214.50,
    priceStr: '₹214.50',
    type: 'veg',
    description: 'An Italian coffee-based dessert drink made with creamy vanilla ice cream drowned in hot espresso.',
    image: 'media/affogato.jpg',
    tags: ['Dessert Coffee']
  },
  {
    id: 'co-7',
    name: 'Golden Latte',
    category: 'coffee-hot',
    price: 318.50,
    priceStr: '₹318.50',
    type: 'veg',
    description: 'A comforting, healthy drink combining espresso with steamed turmeric milk, topped with foam.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Wellness']
  },
  {
    id: 'co-8',
    name: 'Irish Coffee',
    category: 'coffee-hot',
    price: 253.50,
    priceStr: '₹253.50',
    type: 'veg',
    description: 'A caffeinated warm drink made with hot coffee and non-alcoholic Irish cream notes, topped with cream.',
    image: 'media/irish-coffee.jpg',
    tags: ['Irish Flavor']
  },
  {
    id: 'co-9',
    name: 'Turmeric Coffee',
    category: 'coffee-hot',
    price: 318.50,
    priceStr: '₹318.50',
    type: 'veg',
    description: 'Comforting health brew combining rich espresso with steamed turmeric milk and a layer of velvety foam.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Immunity Boost']
  },
  {
    id: 'co-10',
    name: 'Cappuccino',
    category: 'coffee-hot',
    price: 279.50,
    priceStr: '₹279.50',
    type: 'veg',
    isSignature: true,
    description: 'A harmonious blend of equal parts espresso, steamed milk and silky foam with rosetta latte art.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Signature Brew', 'Latte Art']
  },
  {
    id: 'co-11',
    name: 'Mocha',
    category: 'coffee-hot',
    price: 331.50,
    priceStr: '₹331.50',
    type: 'veg',
    description: 'A chocolate-flavoured warm beverage with a shot of espresso and melted dark chocolate with warm milk.',
    image: 'media/mocha.jpg',
    tags: ['Dark Chocolate']
  },
  {
    id: 'co-12',
    name: 'Cortado',
    category: 'coffee-hot',
    price: 284.70,
    priceStr: '₹284.70',
    type: 'veg',
    description: 'A precise one-to-one ratio of bold espresso and silky steamed milk in a small tumbler.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Spanish Cut']
  },
  {
    id: 'co-13',
    name: 'Cookie Crumble Coffee',
    category: 'coffee-hot',
    price: 362.70,
    priceStr: '₹362.70',
    type: 'veg',
    description: 'Cappuccino made with nutty cookie hints and caramel flavours, topped with foam and crushed cookies.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Cookie Crust']
  },
  {
    id: 'co-14',
    name: 'Latte',
    category: 'coffee-hot',
    price: 286.00,
    priceStr: '₹286',
    type: 'veg',
    description: 'Creamy and smooth espresso combined with abundant sweet steamed milk.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Smooth & Milky']
  },

  // =========================================================================
  // PAGE 7: BEAN CHILLED (Iced & Blended Coffees)
  // =========================================================================
  {
    id: 'bc-1',
    name: 'Cranberry Iced Americano',
    category: 'coffee-cold',
    price: 299.00,
    priceStr: '₹299',
    type: 'veg',
    description: 'Iced Americano with a fruity cranberry flavour, followed by the robust, aromatic taste of coffee.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Cranberry Zing']
  },
  {
    id: 'bc-2',
    name: 'Cookies And Cream',
    category: 'coffee-cold',
    price: 364.00,
    priceStr: '₹364',
    type: 'veg',
    description: 'Classic cold coffee blended with rich cream and garnished with crushed nutty cookies.',
    image: 'media/cookies-cream.jpg',
    tags: ['Cookies Blend']
  },
  {
    id: 'bc-3',
    name: 'Passionfruit Iced Coffee',
    category: 'coffee-cold',
    price: 299.00,
    priceStr: '₹299',
    type: 'veg',
    description: 'Tangy tropical passionfruit nectar shaken with iced coffee and citrus.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Tropical Citrus']
  },
  {
    id: 'bc-4',
    name: 'Vietnamese Iced Coffee',
    category: 'coffee-cold',
    price: 370.50,
    priceStr: '₹370.50',
    type: 'veg',
    description: 'A strong iced coffee made with sweetened condensed milk, served chilled over ice.',
    image: 'media/vietnamese-coffee.jpg',
    tags: ['Vietnamese Style']
  },
  {
    id: 'bc-5',
    name: 'Iced Americano',
    category: 'coffee-cold',
    price: 312.00,
    priceStr: '₹312',
    type: 'veg',
    description: 'A chilled caffeinated drink poured over ice cubes. Refreshingly bold and clean.',
    image: 'media/iced-americano.jpg',
    tags: ['Iced Black']
  },
  {
    id: 'bc-6',
    name: 'Chilled Cookie Crumble Coffee',
    category: 'coffee-cold',
    price: 374.40,
    priceStr: '₹374.40',
    type: 'veg',
    description: 'Blended cold cappuccino with nutty cookie hints, caramel flavour, topped with foam and crushed cookies.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Caramel Crunch']
  },
  {
    id: 'bc-7',
    name: 'Iced Cortado',
    category: 'coffee-cold',
    price: 312.00,
    priceStr: '₹312',
    type: 'veg',
    description: 'Balanced espresso-to-milk ratio, poured chilled over crystal ice.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Chilled Cut']
  },
  {
    id: 'bc-8',
    name: 'Iced Caramel Macchiato',
    category: 'coffee-cold',
    price: 377.00,
    priceStr: '₹377',
    type: 'veg',
    description: 'Rich, strong coffee with a hint of caramel flavour, mixed with cold milk and topped with foam layer.',
    image: 'media/caramel-macchiato.jpg',
    tags: ['Salted Caramel']
  },
  {
    id: 'bc-9',
    name: 'Iced Cappuccino',
    category: 'coffee-cold',
    price: 325.00,
    priceStr: '₹325',
    type: 'veg',
    description: 'A chilled coffee drink with an espresso shot, sweetened cold milk and ice, topped with foam.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Cold Cappuccino']
  },
  {
    id: 'bc-10',
    name: 'Ferrero Iced Latte',
    category: 'coffee-cold',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'A chilled coffee drink with an espresso shot, crushed Ferrero Rocher, sweetened cold milk over ice.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Ferrero Rocher']
  },
  {
    id: 'bc-11',
    name: 'Iced Espresso Romano',
    category: 'coffee-cold',
    price: 338.00,
    priceStr: '₹338',
    type: 'veg',
    description: 'A chilled drink with robust espresso and a tangy twist of lemon, sweetened and shaken with ice.',
    image: 'media/iced-americano.jpg',
    tags: ['Citrus Espresso']
  },
  {
    id: 'bc-12',
    name: 'Tiramisu Coffee',
    category: 'coffee-cold',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'Cold coffee with a touch of mascarpone tiramisu and a cloud of whipped cream.',
    image: 'media/cappuccino-cookie.jpg',
    tags: ['Italian Tiramisu']
  },
  {
    id: 'bc-13',
    name: 'Iced Latte',
    category: 'coffee-cold',
    price: 339.30,
    priceStr: '₹339.30',
    type: 'veg',
    description: 'A chilled drink with an espresso shot and sweetened cold milk, served over clear ice.',
    image: 'media/iced-latte.jpg',
    tags: ['Classic Iced Latte']
  },
  {
    id: 'bc-14',
    name: 'Tall And Dark',
    category: 'coffee-cold',
    price: 390.00,
    priceStr: '₹390',
    type: 'veg',
    description: 'Cold coffee blended and garnished with rich dark chocolate fudge brownie.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Fudge Brownie']
  },
  {
    id: 'bc-15',
    name: 'Iced Mocha',
    category: 'coffee-cold',
    price: 351.00,
    priceStr: '₹351',
    type: 'veg',
    description: 'A chilled coffee drink made with espresso, cold milk and dark chocolate, served over ice.',
    image: 'media/mocha.jpg',
    tags: ['Chilled Mocha']
  },
  {
    id: 'bc-16',
    name: 'Oreo Frappe',
    category: 'coffee-cold',
    price: 396.50,
    priceStr: '₹396.50',
    type: 'veg',
    description: 'Classic cold coffee blended and garnished with crunchy Oreo cookies and chocolate drizzle.',
    image: 'media/cookies-cream.jpg',
    tags: ['Oreo Blend']
  },
  {
    id: 'bc-17',
    name: 'Classic Cold Coffee',
    category: 'coffee-cold',
    price: 357.50,
    priceStr: '₹357.50',
    type: 'veg',
    description: 'Espresso shot with sweetened cold milk, blended with velvety vanilla ice cream.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Vanilla Ice Cream']
  },
  {
    id: 'bc-18',
    name: 'Signature Lotus Biscoff Shake',
    category: 'coffee-cold',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    isSignature: true,
    description: 'Crushed Lotus Biscoff speculoos cookies blended with ice cream and butter caramel drizzle.',
    image: 'media/biscoff-shake-glass.jpg',
    tags: ['Viral Favorite', 'Signature']
  },

  // =========================================================================
  // PAGE 8: FIZZY COOLERS, MOCKTAILS & TEAS
  // =========================================================================
  {
    id: 'fc-1',
    name: 'Classic Virgin Mojito',
    category: 'mocktails',
    price: 323.70,
    priceStr: '₹323.70',
    type: 'veg',
    description: 'Fresh garden mint, Persian lime wedges and raw sugar muddled over ice and topped with soda.',
    image: 'media/green-apple-cooler.jpg',
    tags: ['Minty Citrus']
  },
  {
    id: 'fc-2',
    name: 'Charged Up',
    category: 'mocktails',
    price: 357.50,
    priceStr: '₹357.50',
    type: 'veg',
    description: 'Espresso shot plus Red Bull energy drink with fresh lemon and crushed ice.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Red Bull Energy']
  },
  {
    id: 'fc-3',
    name: 'Coffee-infused Ginger Ale',
    category: 'mocktails',
    price: 339.30,
    priceStr: '₹339.30',
    type: 'veg',
    description: 'Espresso shot with bubbly ginger ale, a zesty twist of lemon and clear ice.',
    image: 'media/ginger-ale.jpg',
    tags: ['Ginger Ale']
  },
  {
    id: 'fc-4',
    name: 'Kala Khatta Mocktail',
    category: 'mocktails',
    price: 364.00,
    priceStr: '₹364',
    type: 'veg',
    description: 'A refreshing mocktail with a tangy zesty twist of nostalgic Kala Khatta black sour flavour.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Desi Kala Khatta']
  },
  {
    id: 'fc-5',
    name: 'Flavoured Mojitos (Green Apple / Watermelon / Strawberry)',
    category: 'mocktails',
    price: 344.50,
    priceStr: '₹344.50',
    type: 'veg',
    isSignature: true,
    description: 'Handcrafted with choice of real fruit: Green Apple, Watermelon, Strawberry, Peach, Cucumber or Cranberry.',
    image: 'media/green-apple-cooler.jpg',
    tags: ['Real Fruit', 'Signature']
  },
  {
    id: 'fc-6',
    name: 'Virgin Pina Colada',
    category: 'mocktails',
    price: 386.10,
    priceStr: '₹386.10',
    type: 'veg',
    description: 'A refreshing mocktail made with fresh pineapple and thick, creamy coconut milk over ice.',
    image: 'media/pina-colada.jpg',
    tags: ['Coconut & Pineapple']
  },
  {
    id: 'fc-7',
    name: 'Mango Mania',
    category: 'mocktails',
    price: 351.00,
    priceStr: '₹351',
    type: 'veg',
    description: 'A rich mango purée drink shaken with citrus and crushed ice.',
    image: 'media/fruit-punch.jpg',
    tags: ['Alphonso Mango']
  },
  {
    id: 'fc-8',
    name: 'Fruit Punch Mocktail',
    category: 'mocktails',
    price: 388.70,
    priceStr: '₹388.70',
    type: 'veg',
    description: 'A delightful blend of fresh tropical juices topped with diced fruit pieces and soda.',
    image: 'media/fruit-punch.jpg',
    tags: ['Tropical Punch']
  },
  {
    id: 'fc-9',
    name: 'Purple Rain',
    category: 'mocktails',
    price: 351.00,
    priceStr: '₹351',
    type: 'veg',
    description: 'A chilled fizzy drink with blackcurrant flavour, made with fresh lemon juice and soda.',
    image: 'media/strawberry-mocktail.jpg',
    tags: ['Blackcurrant']
  },
  {
    id: 'fc-10',
    name: 'Bull Dozer',
    category: 'mocktails',
    price: 416.00,
    priceStr: '₹416',
    type: 'veg',
    description: 'Red Bull with a zesty twist of fresh lemon and muddled mint leaves.',
    image: 'media/green-apple-cooler.jpg',
    tags: ['Power Energiser']
  },
  {
    id: 'te-1',
    name: 'Green Tea',
    category: 'mocktails',
    price: 208.00,
    priceStr: '₹208',
    type: 'veg',
    description: 'Delicately steeped antioxidant whole green tea leaves.',
    image: 'media/tea.jpg',
    tags: ['Hot Infusion']
  },
  {
    id: 'te-2',
    name: 'Lemon Ginger Detox Tea',
    category: 'mocktails',
    price: 222.30,
    priceStr: '₹222.30',
    type: 'veg',
    description: 'A perfect wellness drink to boost your immune system and kickstart metabolism with fresh ginger and lemon.',
    image: 'media/tea.jpg',
    tags: ['Detox Wellness']
  },
  {
    id: 'te-3',
    name: 'Masala Tea',
    category: 'mocktails',
    price: 208.00,
    priceStr: '₹208',
    type: 'veg',
    description: 'Traditional Punjabi spiced tea brewed with cardamom, ginger, cloves and milk.',
    image: 'media/masala-chai.jpg',
    tags: ['Desi Chai']
  },

  // =========================================================================
  // DESSERTS & BAKES
  // =========================================================================
  {
    id: 'ds-1',
    name: 'Lotus Biscoff Cheesecake',
    category: 'desserts',
    price: 360.00,
    priceStr: '₹360',
    type: 'veg',
    isSignature: true,
    description: 'Baked New York cheesecake on buttery Biscoff crust, finished with molten Lotus cookie spread.',
    image: 'media/lotus-cheesecake.jpg',
    tags: ['Best Seller', 'Speculoos']
  },
  {
    id: 'ds-2',
    name: 'Blueberry Cheesecake',
    category: 'desserts',
    price: 360.00,
    priceStr: '₹360',
    type: 'veg',
    isSignature: true,
    description: 'Creamy chilled Philadelphia cheesecake crowned with homemade tart wild blueberry compote.',
    image: 'media/blueberry-cheesecake.jpg',
    tags: ['Wild Berry', 'Cheesecake']
  },
  {
    id: 'ds-3',
    name: 'Red Velvet Pastry with Cream Cheese',
    category: 'desserts',
    price: 320.00,
    priceStr: '₹320',
    type: 'veg',
    isSignature: true,
    description: 'Crimson cocoa sponge cake layers frosted with rich vanilla bean cream cheese.',
    image: 'media/red-velvet-cake-cappuccino.jpg',
    tags: ['Pair with Coffee']
  },
  {
    id: 'ds-4',
    name: 'Veg South Asian Sweet Corn Soup',
    category: 'starters',
    price: 220.00,
    priceStr: '₹220',
    type: 'veg',
    isSignature: true,
    description: 'A soothing bowl of golden sweet corn broth with cilantro and mild Asian herbs.',
    image: 'media/corn-soup.jpg',
    tags: ['Comfort Soup', 'Warmth']
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
