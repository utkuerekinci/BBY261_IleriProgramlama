export const foods = [
  { id: 'doner', name: 'Döner', emoji: '🥙', category: 'Turkish', description: 'Thinly sliced, seasoned meat wrapped with fresh vegetables and creamy sauce.' },
  { id: 'manti', name: 'Mantı', emoji: '🥟', category: 'Turkish', description: 'Tiny Turkish dumplings topped with garlicky yogurt and warm chili butter.' },
  { id: 'lahmacun', name: 'Lahmacun', emoji: '🫓', category: 'Turkish', description: 'A crisp flatbread with spiced minced meat, herbs, lemon, and fresh greens.' },
  { id: 'pide', name: 'Pide', emoji: '🫓', category: 'Turkish', description: 'Boat-shaped Turkish bread baked with cheese, vegetables, or seasoned meat.' },
  { id: 'kofte', name: 'Köfte', emoji: '🍢', category: 'Turkish', description: 'Juicy grilled meatballs served with rice, salad, and smoky peppers.' },

  { id: 'cheeseburger', name: 'Cheeseburger', emoji: '🍔', category: 'Fast Food', description: 'A juicy burger layered with melted cheese, pickles, and a classic sauce.' },
  { id: 'fried-chicken', name: 'Fried Chicken', emoji: '🍗', category: 'Fast Food', description: 'Golden, extra-crispy chicken with a tender and flavorful center.' },
  { id: 'hot-dog', name: 'Hot Dog', emoji: '🌭', category: 'Fast Food', description: 'A grilled sausage in a soft bun with mustard, relish, and crispy onions.' },
  { id: 'pizza-slice', name: 'Pizza Slice', emoji: '🍕', category: 'Fast Food', description: 'A hot, cheesy slice with a crisp crust and your favorite toppings.' },
  { id: 'loaded-fries', name: 'Loaded Fries', emoji: '🍟', category: 'Fast Food', description: 'Crispy fries piled high with cheese, sauce, herbs, and crunchy toppings.' },

  { id: 'chicken-salad', name: 'Chicken Salad', emoji: '🥗', category: 'Healthy', description: 'Fresh greens, grilled chicken, colorful vegetables, and a bright dressing.' },
  { id: 'avocado-toast', name: 'Avocado Toast', emoji: '🥑', category: 'Healthy', description: 'Creamy avocado on toasted bread with herbs, seeds, and a squeeze of lemon.' },
  { id: 'poke-bowl', name: 'Poke Bowl', emoji: '🍚', category: 'Healthy', description: 'A vibrant bowl of rice, fish or tofu, crisp vegetables, and sesame dressing.' },
  { id: 'grilled-chicken-bowl', name: 'Grilled Chicken Bowl', emoji: '🍲', category: 'Healthy', description: 'Lean grilled chicken with grains, roasted vegetables, and a light sauce.' },
  { id: 'smoothie-bowl', name: 'Smoothie Bowl', emoji: '🫐', category: 'Healthy', description: 'A thick fruit smoothie topped with berries, granola, and crunchy seeds.' },

  { id: 'sushi', name: 'Sushi', emoji: '🍣', category: 'Asian', description: 'Delicate rolls and nigiri with seasoned rice, fresh fillings, and wasabi.' },
  { id: 'ramen', name: 'Ramen', emoji: '🍜', category: 'Asian', description: 'Springy noodles in a rich broth with vegetables, egg, and savory toppings.' },
  { id: 'pad-thai', name: 'Pad Thai', emoji: '🥡', category: 'Asian', description: 'Tangy stir-fried rice noodles with peanuts, herbs, lime, and your choice of protein.' },
  { id: 'korean-fried-chicken', name: 'Korean Fried Chicken', emoji: '🍗', category: 'Asian', description: 'Ultra-crispy chicken glazed in a sweet, spicy, and sticky sauce.' },
  { id: 'fried-rice', name: 'Fried Rice', emoji: '🍚', category: 'Asian', description: 'Wok-tossed rice with egg, vegetables, scallions, and a savory soy glaze.' },

  { id: 'margherita-pizza', name: 'Margherita Pizza', emoji: '🍕', category: 'Italian', description: 'A blistered crust topped simply with tomato, mozzarella, and fresh basil.' },
  { id: 'carbonara', name: 'Carbonara', emoji: '🍝', category: 'Italian', description: 'Silky pasta with egg, aged cheese, black pepper, and crisp pancetta.' },
  { id: 'lasagna', name: 'Lasagna', emoji: '🍝', category: 'Italian', description: 'Comforting layers of pasta, rich tomato sauce, cheese, and savory filling.' },
  { id: 'risotto', name: 'Risotto', emoji: '🍚', category: 'Italian', description: 'Creamy Arborio rice slowly cooked with stock, cheese, and seasonal flavors.' },
  { id: 'ravioli', name: 'Ravioli', emoji: '🥟', category: 'Italian', description: 'Tender filled pasta finished with butter, herbs, or a bright tomato sauce.' },

  { id: 'cheesecake', name: 'Cheesecake', emoji: '🍰', category: 'Dessert', description: 'Smooth, creamy cheesecake on a buttery crumb crust with a tangy finish.' },
  { id: 'tiramisu', name: 'Tiramisu', emoji: '🍰', category: 'Dessert', description: 'Coffee-soaked layers with mascarpone cream and a dusting of cocoa.' },
  { id: 'brownie', name: 'Brownie', emoji: '🍫', category: 'Dessert', description: 'A deeply chocolatey square with a crackly top and fudgy center.' },
  { id: 'waffle', name: 'Waffle', emoji: '🧇', category: 'Dessert', description: 'A warm, crisp waffle ready for fruit, chocolate, or maple syrup.' },
  { id: 'ice-cream', name: 'Ice Cream', emoji: '🍨', category: 'Dessert', description: 'A cool, creamy scoop that always makes room for one more topping.' },
]

export const categories = [
  { name: 'Turkish', emoji: '🇹🇷' },
  { name: 'Fast Food', emoji: '🍔' },
  { name: 'Healthy', emoji: '🥗' },
  { name: 'Asian', emoji: '🍜' },
  { name: 'Italian', emoji: '🍝' },
  { name: 'Dessert', emoji: '🍰' },
  { name: 'Any', emoji: '✨' },
]
