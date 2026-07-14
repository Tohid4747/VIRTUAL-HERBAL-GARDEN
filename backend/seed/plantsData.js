const plantsData = [
  {
    name: "Tulsi",
    scientificName: "Ocimum sanctum",
    category: "Ayurvedic",
    description: "Known as the Holy Basil, Tulsi is a sacred plant in Hinduism and a highly valued herb in Ayurvedic medicine. It is classified as an adaptogen, helping the body adapt to stress.",
    region: "Indian Subcontinent",
    uses: ["Tea", "Essential Oils", "Supplements"],
    benefits: ["Reduces stress and anxiety", "Lowers blood sugar", "Reduces inflammation"],
    imageUrl: "https://images.unsplash.com/photo-1629853903102-17a47db3a137?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    category: "Ayurvedic",
    description: "An ancient medicinal herb classified as an adaptogen. Its roots and orange-red fruit have been used for hundreds of years for medicinal purposes, known primarily for stress relief.",
    region: "India, Middle East, Africa",
    uses: ["Powder", "Capsules", "Tinctures"],
    benefits: ["Reduces stress and cortisol levels", "Improves brain function", "Increases muscle mass"],
    imageUrl: "https://images.unsplash.com/photo-1611078747761-4cb50c4815a5?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Neem",
    scientificName: "Azadirachta indica",
    category: "Medicinal",
    description: "A fast-growing tree native to the Indian subcontinent, Neem is famous for its strong antibacterial and antifungal properties. Almost every part of the tree is used in traditional medicine.",
    region: "India",
    uses: ["Skincare", "Pest Control", "Dental Care"],
    benefits: ["Treats acne and skin issues", "Promotes dental health", "Boosts immunity"],
    imageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Peppermint",
    scientificName: "Mentha × piperita",
    category: "Aromatic",
    description: "A hybrid mint cross between watermint and spearmint. It is widely cultivated for its fragrant oil, which is used in flavorings, cosmetics, and traditional medicine.",
    region: "Europe, Middle East",
    uses: ["Tea", "Aromatherapy", "Flavoring"],
    benefits: ["Relieves digestive issues", "Eases headaches", "Freshens breath"],
    imageUrl: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    category: "Aromatic",
    description: "A heavily branched short shrub known for its highly fragrant purple flowers. It is widely used in perfumery, baking, and natural therapies for relaxation.",
    region: "Mediterranean",
    uses: ["Essential Oils", "Teas", "Bath Products"],
    benefits: ["Improves sleep", "Reduces anxiety", "Heals minor burns"],
    imageUrl: "https://images.unsplash.com/photo-1595982855112-259837fbf930?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Rosemary",
    scientificName: "Salvia rosmarinus",
    category: "Culinary",
    description: "An aromatic evergreen shrub with needle-like leaves. It is a staple herb in Mediterranean cuisine and is also known for its strong memory-enhancing aroma.",
    region: "Mediterranean",
    uses: ["Cooking", "Perfumes", "Essential Oils"],
    benefits: ["Improves digestion", "Enhances memory", "Protects immune system"],
    imageUrl: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    category: "Medicinal",
    description: "A succulent plant species with thick, fleshy leaves. The clear gel inside the leaves has been used topically for thousands of years to treat wounds, burns, and skin conditions.",
    region: "Arabian Peninsula",
    uses: ["Skincare gels", "Juice", "Cosmetics"],
    benefits: ["Soothes sunburns", "Improves skin health", "Aids digestion"],
    imageUrl: "https://images.unsplash.com/photo-1596547609652-9fc5d8d38b25?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    category: "Medicinal",
    description: "A daisy-like plant famous for its gentle, apple-like aroma. It is one of the most ancient medicinal herbs known to mankind, primarily consumed as a calming tea.",
    region: "Europe, Western Asia",
    uses: ["Teas", "Extracts", "Topical creams"],
    benefits: ["Promotes sleep", "Relieves stomach aches", "Reduces muscle spasms"],
    imageUrl: "https://images.unsplash.com/photo-1608677271978-6874e4cbf351?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Turmeric",
    scientificName: "Curcuma longa",
    category: "Ayurvedic",
    description: "A flowering plant of the ginger family, the roots of which are used in cooking. Its active ingredient, curcumin, has powerful biological properties.",
    region: "Southeast Asia",
    uses: ["Cooking spice", "Supplements", "Skincare"],
    benefits: ["Powerful anti-inflammatory", "Strong antioxidant", "Improves brain function"],
    imageUrl: "https://images.unsplash.com/photo-1615486511484-92e172cb42d1?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  },
  {
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    category: "Culinary",
    description: "A delicate looking plant with a penetrating fragrance. Beyond culinary uses, it has a history of medicinal applications due to its active compound, thymol.",
    region: "Mediterranean",
    uses: ["Cooking", "Cough syrups", "Mouthwashes"],
    benefits: ["Fights acne", "Lowers blood pressure", "Boosts immunity"],
    imageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800",
    audioUrl: ""
  }
];

module.exports = plantsData;