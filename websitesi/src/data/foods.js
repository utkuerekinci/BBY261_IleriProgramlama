export const foods = [
  { id: 'doner', name: 'Döner', emoji: '🥙', category: 'Türk', description: 'İncecik kesilmiş baharatlı et; taze sebzeler ve nefis sosla birlikte servis edilir.' },
  { id: 'manti', name: 'Mantı', emoji: '🥟', category: 'Türk', description: 'Sarımsaklı yoğurt ve kızgın biberli tereyağıyla sunulan minik hamur bohçaları.' },
  { id: 'lahmacun', name: 'Lahmacun', emoji: '🫓', category: 'Türk', description: 'Baharatlı kıyma, yeşillik ve limonla tamamlanan ince, çıtır hamur.' },
  { id: 'pide', name: 'Pide', emoji: '🫓', category: 'Türk', description: 'Peynir, sebze veya baharatlı etle taş fırında pişirilen kayık biçimli lezzet.' },
  { id: 'kofte', name: 'Köfte', emoji: '🍢', category: 'Türk', description: 'Pilav, salata ve közlenmiş biberle servis edilen sulu, ızgara köfteler.' },

  { id: 'cheeseburger', name: 'Çizburger', emoji: '🍔', category: 'Hızlı Yemek', description: 'Eriyen peynir, turşu ve klasik sosla hazırlanan sulu bir hamburger.' },
  { id: 'fried-chicken', name: 'Çıtır Tavuk', emoji: '🍗', category: 'Hızlı Yemek', description: 'Dışı altın sarısı ve çıtır, içi yumuşacık ve lezzetli tavuk parçaları.' },
  { id: 'hot-dog', name: 'Sosisli Sandviç', emoji: '🌭', category: 'Hızlı Yemek', description: 'Yumuşak ekmekte ızgara sosis; hardal, turşu sosu ve çıtır soğanla.' },
  { id: 'pizza-slice', name: 'Pizza Dilimi', emoji: '🍕', category: 'Hızlı Yemek', description: 'Çıtır hamuru, bol peyniri ve sevdiğin malzemeleriyle sıcacık bir dilim.' },
  { id: 'loaded-fries', name: 'Bol Malzemeli Patates', emoji: '🍟', category: 'Hızlı Yemek', description: 'Peynir, sos, taze otlar ve çıtır malzemelerle zenginleştirilmiş patates kızartması.' },

  { id: 'chicken-salad', name: 'Tavuklu Salata', emoji: '🥗', category: 'Sağlıklı', description: 'Taze yeşillikler, ızgara tavuk, renkli sebzeler ve ferah bir sos.' },
  { id: 'avocado-toast', name: 'Avokadolu Tost', emoji: '🥑', category: 'Sağlıklı', description: 'Kızarmış ekmek üzerinde avokado, taze otlar, çekirdekler ve limon.' },
  { id: 'poke-bowl', name: 'Poke Kasesi', emoji: '🍚', category: 'Sağlıklı', description: 'Pirinç, balık veya tofu, çıtır sebzeler ve susamlı sosla hazırlanan renkli bir kase.' },
  { id: 'grilled-chicken-bowl', name: 'Izgara Tavuk Kasesi', emoji: '🍲', category: 'Sağlıklı', description: 'Tahıllar, fırınlanmış sebzeler ve hafif bir sosla tamamlanan ızgara tavuk.' },
  { id: 'smoothie-bowl', name: 'Meyveli Smoothie Kasesi', emoji: '🫐', category: 'Sağlıklı', description: 'Orman meyveleri, granola ve çıtır çekirdeklerle süslenen yoğun meyve karışımı.' },

  { id: 'sushi', name: 'Suşi', emoji: '🍣', category: 'Asya', description: 'Çeşnili pirinç, taze iç malzemeler ve vasabiyle hazırlanan zarif rulolar.' },
  { id: 'ramen', name: 'Ramen', emoji: '🍜', category: 'Asya', description: 'Sebze, yumurta ve nefis malzemelerle zenginleştirilen sıcak, bol aromalı erişte çorbası.' },
  { id: 'pad-thai', name: 'Pad Thai', emoji: '🥡', category: 'Asya', description: 'Yer fıstığı, taze otlar, misket limonu ve dilediğin proteinle tavada çevrilen pirinç eriştesi.' },
  { id: 'korean-fried-chicken', name: 'Kore Usulü Çıtır Tavuk', emoji: '🍗', category: 'Asya', description: 'Tatlı, acı ve yapışkan sosla kaplanan ekstra çıtır tavuk parçaları.' },
  { id: 'fried-rice', name: 'Sebzeli Kızarmış Pilav', emoji: '🍚', category: 'Asya', description: 'Yumurta, sebzeler, taze soğan ve soya sosuyla yüksek ateşte çevrilen pilav.' },

  { id: 'margherita-pizza', name: 'Margherita Pizza', emoji: '🍕', category: 'İtalyan', description: 'Domates, mozzarella ve taze fesleğenle sade ama kusursuz biçimde hazırlanan pizza.' },
  { id: 'carbonara', name: 'Carbonara', emoji: '🍝', category: 'İtalyan', description: 'Yumurta, yıllanmış peynir, karabiber ve çıtır pancettayla hazırlanan ipeksi makarna.' },
  { id: 'lasagna', name: 'Lazanya', emoji: '🍝', category: 'İtalyan', description: 'Makarna, zengin domates sosu, peynir ve lezzetli iç harcın sıcacık katmanları.' },
  { id: 'risotto', name: 'Risotto', emoji: '🍚', category: 'İtalyan', description: 'Et suyu, peynir ve mevsim lezzetleriyle yavaşça pişirilen kremamsı Arborio pirinci.' },
  { id: 'ravioli', name: 'Ravioli', emoji: '🥟', category: 'İtalyan', description: 'Tereyağı, taze otlar veya domates sosuyla tamamlanan, içi dolgulu taze makarna.' },

  { id: 'cheesecake', name: 'Peynirli Pasta', emoji: '🍰', category: 'Tatlı', description: 'Tereyağlı bisküvi tabanı üzerinde pürüzsüz, kremamsı ve hafif ekşi peynirli pasta.' },
  { id: 'tiramisu', name: 'Tiramisu', emoji: '🍰', category: 'Tatlı', description: 'Kahveyle ıslatılmış katlar, mascarpone kreması ve kakao dokunuşu.' },
  { id: 'brownie', name: 'Çikolatalı Kek', emoji: '🍫', category: 'Tatlı', description: 'Üzeri incecik çıtır, içi yoğun ve yumuşak, bol çikolatalı bir dilim.' },
  { id: 'waffle', name: 'Waffle', emoji: '🧇', category: 'Tatlı', description: 'Meyve, çikolata veya şurupla tamamlanmaya hazır, sıcak ve çıtır bir waffle.' },
  { id: 'ice-cream', name: 'Dondurma', emoji: '🍨', category: 'Tatlı', description: 'Üzerine bir malzeme daha eklemek için her zaman yer bırakan serin, kremamsı bir top.' },
]

export const categories = [
  { name: 'Türk', emoji: '🇹🇷' },
  { name: 'Hızlı Yemek', emoji: '🍔' },
  { name: 'Sağlıklı', emoji: '🥗' },
  { name: 'Asya', emoji: '🍜' },
  { name: 'İtalyan', emoji: '🍝' },
  { name: 'Tatlı', emoji: '🍰' },
  { name: 'Hepsi', emoji: '✨' },
]
