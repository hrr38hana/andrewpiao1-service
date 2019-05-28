//names/types
const brand = [
  'Adidas',
  'Nike',
  'Bontrager',
  'Giant',
  'Specialized',
  'Trek',
  'Scott',
  'Cannondale',
  'GT',
  'Bianchi',
  'Fuji',
  'BMC',
  'Assos',
  'Attaquer',
  'Cadence',
  'Ornot',
  'Pedla',
  'Timbuk',
  'Zacro'
]

const name = [
  'Specter',
  'Wavecel',
  'Blaze',
  'Luminite',
  'Circuit',
  'Rally',
  'Starvos',
  'Quantum',
  'Dipper',
  'Commute',
  'Gel',
  'Flare',
  'Ion',
  'Connect',
  'Moxy',
  'Aeolus',
  'Carbon',
  'Arvada',
  'Ajna',
  'Pro Carbon',
  'Boulevard',
  'Aero',
  'IsoCore',
  'IsoZone',
  'Elite',
  'Concept',
  'Race Lite',
  'CrossRip'
]


const type = [
  'helmet',
  // 'LED light',
  // 'jacket',
  // 'tights',
  // 'shirt',
  // 'leg warmers',
  // 'gloves',
  // 'kickstand',
  // 'handlebar'
]

//colors
const colorGroup = [
  'black',
  'yellow'
]

//descriptions
// a ___ [type] designed for ___
const itemAdj = [
  'Aerodynamic',
  'Robust',
  'Sturdy',
  'Protective',
  'Stylish',
  'Streamlined',
  'Sleek',
  'Powerful',
  'Practical',
  'Light-weight',
  'High quality',
  'Stunning',
  'High-performing',
  'Trail-tested',
  'Road-tested',
  'Affordable',
  'Secure',
  'Advanced'
]

const designAdj = [
  'comfort',
  'durability',
  'commutes',
  'daily use',
  'competitive riders',
  'protection',
  'use on the trail',
  'use on the road',
  'easy integration',
  'rider experience',
  'performance riders',
  'ease of use'
]

const images = {
  helmet: {
    black: [
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-black/helm1-b.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-black/helm2-b.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-black/helm3-b.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-black/helm4-b.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-black/helm5-b.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-black/helm6-b.jpeg',
    ],
    yellow: [
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-yellow/helm1-y.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-yellow/helm2-y.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-yellow/helm3-y.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-yellow/helm4-y.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-yellow/helm5-y.jpeg',
      'https://s3.us-east-2.amazonaws.com/fechrr38hana/helmet-yellow/helm6-y.jpeg',
    ]
  }
}



module.exports = {brand, name, type, colorGroup, itemAdj, designAdj, images}
