const plants = [
  {
    name: 'Tulsi',
    slug: 'tulsi-holy-basil',
    scientificName: 'Ocimum sanctum',
    category: 'Ayurvedic',
    description: 'Known as the Queen of Herbs, Tulsi is widely used in Ayurvedic medicine for its adaptogenic properties.',
    uses: ['Tea', 'Essential Oil', 'Raw leaves'],
    benefits: ['Reduces stress', 'Improves immunity', 'Fights respiratory infections'],
    region: 'Indian Subcontinent',
    imageUrl: 'tulsi.jpg'
  },
  {
    name: 'Ashwagandha',
    slug: 'ashwagandha-indian-ginseng',
    scientificName: 'Withania somnifera',
    category: 'Medicinal',
    description: 'An ancient medicinal herb classified as an adaptogen, meaning it can help your body manage stress.',
    uses: ['Powder', 'Capsules', 'Extract'],
    benefits: ['Reduces anxiety', 'Lowers blood sugar', 'Improves brain function'],
    region: 'India, Middle East, Africa',
    imageUrl: 'ashwagandha.jpg'
  },
  {
    name: 'Neem',
    slug: 'neem-tree',
    scientificName: 'Azadirachta indica',
    category: 'Other',
    description: 'A tree native to the Indian subcontinent, famous for its antibacterial and antifungal properties.',
    uses: ['Oil', 'Soap', 'Powder'],
    benefits: ['Clears acne', 'Promotes healthy hair', 'Detoxifies the blood'],
    region: 'India',
    imageUrl: 'neem.jpg'
  }
];

module.exports = plants;