export class Product {
  id;
  name;
  image;
  priceCents;
  rating;
  discount;
  keywords;
  category;
  dateAdded;
  description;

  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.image = product.image;
    this.priceCents = product.priceCents;
    this.rating = product.rating;
    this.discount = product.discount;
    this.keywords = product.keywords;
    this.category = product.category;
    this.dateAdded = product.dateAdded;
    this.description = product.description;
  }

  getRatingStar() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getRatingCount() {
    return this.rating.count;
  }
  
}

export const products = [
  {
    id: 'a824b81b-8eb2-4829-80bd-90c4bd7faef2',
    name: 'Havit Hv-G92 Gamepad',
    image: 'images/products-img/Havit HV-G92 Gamepad.png',
    priceCents: 16000,
    rating: {
      stars: 5,
      count: 86
    },
    discount: .4,
    keywords: [
      'gamepad',
      'controller',
      'joypad',
      'joystick'
    ],
    category: 'gaming',
    dateAdded: new Date().toJSON().slice(0, 10),
    description: "Enhance gaming with Havit Hv-G92 Gamepad: ergonomic, precise control, 5-star rating, 40% discount, ideal for immersive gaming experiences."
  },
  {
    id: 'bbab19f2-e8f5-43da-839c-06b59c09c9cf',
    name: 'AK-900 Wired Keyboard',
    image: 'images/products-img/AK-900 Wired Keyboard.png',
    priceCents: 11600,
    rating: {
      stars: 4,
      count: 75
    },
    discount: .35,
    keywords: [
      'keyboard',
      'mechanical keyboard',
      'wired keyboard',
    ],
    categoryP: 'computer',
    dateAdded: new Date().toJSON().slice(0, 10),
    description: 'Introducing the AK-900 Wired Keyboard: mechanical precision, 4-star rating, 35% discount. Elevate your typing experience with this durable, responsive keyboard.'
  },
  {
    id: '1ccb8332-a304-4395-8723-ab8c1018776f',
    name: 'Ips LCD Gaming Monitor',
    image: 'images/products-img/Ips LCD Gaming Monitor.png',
    priceCents: 40000,
    rating: {
      stars: 5,
      count: 99
    },
    discount: .30,
    keywords: [
      'monitor',
      'Gaming montinor',
      'screen display'
    ],
    category: 'computer',
    dateAdded: new Date().toJSON().slice(0, 10),
    description: 'Introducing the IPS LCD Gaming Monitor: Immerse yourself in vivid visuals with its 5-star quality, 99 ratings. Enhance your gaming setup with a 30% discount!'
  },
  {
    id: 'e7494dbf-f32c-4ce8-b782-4af1044b461c',
    name: 'S-Series Comfort Chair',
    image: 'images/products-img/S-Series Comfort Chair.png',
    priceCents: 40000,
    rating: {
      stars: 4.5,
      count: 99
    },
    discount: .25,
    keywords: [
      'chair',
      'furniture',
      'ergonomic'
    ],
    category: 'furniture',
    dateAdded: new Date().toJSON().slice(0, 10),
    description: "S-Series Comfort Chair: Ergonomic furniture providing superior comfort with a sleek design. Elevate your seating experience with style and support."
  },
  {
    id: '71d5ce22-f2cd-4373-9dfb-7cd4170f2f6c',
    name: 'Raider GE67 HX - 12U',
    image: 'images/products-img/Raider GE67 HX - 12U.png',
    priceCents: 250000,
    rating: {
      stars: 5,
      count: 10
    },
    discount: .20,
    keywords: [
      'Gaming Laptop',
      'Laptop',
      'Computer'
    ],
    category: 'computer',
    dateAdded: new Date().toJSON().slice(0, 10),
    description: "Raider GE67 HX - 12U: Power-packed gaming laptop with stellar performance, sleek design, and high-resolution display. Ultimate gaming companion."
  },
  {
    id: 'b230501f-fdd6-4401-8bc8-23e605981a9b',
    name: 'IPhone 13 Pro Max (128 Gb)',
    image: 'images/products-img/IPhone 13 Pro Max.png',
    priceCents: 6010,
    rating: {
      stars: 4.5,
      count: 58
    },
    discount: .20,
    keywords: [
      'iphone',
      'smartphone',
      'cellphone'
    ],
    category: 'cellphone',
    dateAdded: new Date().toJSON().slice(0, 10),
    description: "iPhone 13 Pro Max (128GB): Cutting-edge smartphone with exceptional performance, stunning camera capabilities, and sleek design. Redefine your mobile experience."
  },
  {
    id: '305fb42f-c325-47bb-8b7b-e52529f9ee8e',
    name: 'Samsung Galaxy Watch 4',
    image: 'images/products-img/Samsung Galaxy Watch 4.png',
    priceCents: 42999,
    rating: {
      stars: 3.5,
      count: 91
    },
    discount: .45,
    keywords: [
      'smart watch',
      'samsung',
      'watch'
    ],
    category: 'watch',
    description: "Samsung Galaxy Watch 4: Next-gen smartwatch blending style with functionality. Stay connected and track your fitness with precision and elegance."
  },
  {
    id: '57972769-5210-41c4-90ba-42b4616536f5',
    name: 'Playstation 4',
    image: 'images/products-img/Play Station 4.png',
    priceCents: 32895,
    rating: {
      stars: 4.5,
      count: 152
    },
    discount: .20,
    keywords: [
      'playstation',
      'gaming',
      'console'
    ],
    category: 'gaming',
    description: "PlayStation 4: Dive into the world of gaming with immersive experiences and top-notch performance. Elevate your gaming setup today!"
  },
  {
    id: '5ce2fefd-e5dc-4c91-9b81-c4b359369cb3',
    name: 'The North Coat',
    image: 'images/products-img/The North Coat.png',
    priceCents: 36000,
    rating: {
      stars: 5,
      count: 65
    },
    discount: .30,
    keywords: [
      'fashion',
      'outerwear',
      'style'
    ],
    category: 'fashion',
    description: "The North Coat: Embrace style and warmth with this fashionable outerwear. Elevate your wardrobe with timeless elegance and exceptional comfort."
  },
  {
    id: 'b4445c85-9035-421b-900d-b2018c160a45',
    name: 'Gucci Duffle Bag',
    image: 'images/products-img/Gucci Duffle Bag.png',
    priceCents: 11600,
    rating: {
      stars: 4.5,
      count: 65
    },
    discount: .25,
    keywords: [
      'luxury',
      'travel',
      'bag',
      'fashion Bag'
    ],
    category: 'fashion',
    description: "Gucci Duffle Bag: Experience luxury and functionality in one exquisite accessory. Elevate your travel style with timeless sophistication and practicality."
  },
  {
    id: '46db07c2-4951-42bd-ba7e-d443ea2cef81',
    name: 'RGB liquid CPU Cooler',
    image: 'images/products-img/RGB liquid CPU Cooler.png',
    priceCents: 17000,
    rating: {
      stars: 4.5,
      count: 65
    },
    discount: .10,
    keywords: [
      'cooling',
      'gaming',
      'computer',
      'cooler',
      'rgb cooler'
    ],
    category: 'computer',
    description: "RGB Liquid CPU Cooler: Keep your gaming rig cool in style. Enhance performance with advanced cooling technology and vibrant RGB lighting."
  },
  {
    id: '46db07c2-4951-42bd-ba7e-d443ea2cef81',
    name: 'Small Bookshelf',
    image: 'images/products-img/Small Bookshelf.png',
    priceCents: 36000,
    rating: {
      stars: 5,
      count: 65
    },
    discount: .05,
    keywords: [
      'book shelf',
      'organizer',
      'storage',
    ],
    category: 'furniture',
    description: "Small Bookshelf: Organize and display your books with elegance. Maximize space and add style to any room with this versatile piece."
  },
  {
    id: 'bf7f062a-228b-481b-93f9-138f7ebcc073',
    name: 'Breed Dry Dog Food',
    image: 'images/products-img/Breed Dry Dog Food.png',
    priceCents: 10000,
    rating: {
      stars: 3,
      count: 35
    },
    discount: 0,
    keywords: [
      'dog food',
      'dog nutrition',
      'dog',
    ],
    category: 'animals',
    description: "Breed Dry Dog Food provides balanced nutrition for your dog. With a 3-star rating, it's a reliable choice for pet owners."
  },
  {
    id: '5a9a6145-00d2-4cc2-826b-b07d833877a2',
    name: 'Canon Eos Dlsr Camera',
    image: 'images/products-img/Canon Eos Dlsr Camera.png',
    priceCents: 36000,
    rating: {
      stars: 4,
      count: 95
    },
    discount: 0,
    keywords: [
      'camera',
      'canon',
      'picture',
      'photo',
    ],
    category: 'camera',
    description: "Capture stunning photos with the Canon Eos DSLR Camera. Rated 4 stars by 95 users, it's perfect for photography enthusiasts."
  },
  {
    id: '21f97eca-4358-46c8-9380-917afced7b32',
    name: 'Asus Fhd Gaming Laptop',
    image: 'images/products-img/Asus Fhd Gaming Laptop.png',
    priceCents: 70000,
    rating: {
      stars: 5,
      count: 325
    },
    discount: 0,
    keywords: [
      'gaming laptop',
      'asus',
      'laptop',
      'gaming',
    ],
    category: 'computer',
    description: "Experience top-tier performance with the Asus FHD Gaming Laptop. Boasting a 5-star rating from 325 users, it's ideal for gamers."
  },
  {
    id: '042ce308-b265-4b9e-8d50-291f0dd8ec69',
    name: 'Curology Product Set',
    image: 'images/products-img/Curology Product Set.png',
    priceCents: 50000,
    rating: {
      stars: 4,
      count: 145
    },
    discount: 0,
    keywords: [
      'skin care',
      'personalized',
      'treatment',
    ],
    category: 'skin care',
    description: "Achieve flawless skin with the Curology Product Set. Rated 4 stars by 145 users, it's personalized for your skincare needs."
  },
  {
    id: '665b7b10-64f6-4ec0-b0b8-260fe3a3be89',
    name: 'Kids Electric Car',
    image: 'images/products-img/Kids Electric Car.png',
    priceCents: 96000,
    rating: {
      stars: 5,
      count: 65
    },
    discount: 0,
    keywords: [
      'small car',
      'car',
      'kids',
    ],
    category: 'toys',
    description: "Delight your child with the Kids Electric Car. With a 5-star rating from 65 users, it's the ultimate toy experience."
  },
  {
    id: 'ca6e8089-2550-4d3a-9ee7-676d5651a537',
    name: 'Jr. Zoom Soccer Cleats',
    image: 'images/products-img/Jr. Zoom Soccer Cleats.png',
    priceCents: 116000,
    rating: {
      stars: 5,
      count: 35
    },
    discount: 0,
    keywords: [
      'soccer shoes',
      'Lightweight',
      'Agility',
    ],
    category: 'sports',
    description: "Enhance your game with Jr. Zoom Soccer Cleats. Rated 5 stars by 35 users, these lightweight shoes boost agility on the field."
  },
  {
    id: 'e7be0ebe-b23a-4fcf-be2a-9e9e3f0e6078',
    name: 'GP11 Shooter USB Gamepad',
    image: 'images/products-img/GP11 Shooter USB Gamepad.png',
    priceCents: 66000,
    rating: {
      stars: 4.5,
      count: 55
    },
    discount: 0,
    keywords: [
      'controller',
      'gaming',
      'joystick',
      'joypad',
    ],
    category: 'gaming',
    description: "Elevate your gaming with the GP11 Shooter USB Gamepad. With a 4.5-star rating from 55 users, it's a top-tier controller."
  },
  {
    id: '972893a4-886a-4c5d-ac7d-a6d4fef1ccc5',
    name: 'Quilted Satin Jacket',
    image: 'images/products-img/Quilted Satin Jacket.png',
    priceCents: 45000,
    rating: {
      stars: 4.5,
      count: 55
    },
    discount: 0,
    keywords: [
      'jacket',
      'winter',
      'cpat',
      'leather',
    ],
    category: 'fashion',
    description: "Stay stylish and warm with the Quilted Satin Jacket. Rated 4.5 stars by 55 users, it's perfect for winter fashion."
  },
  {
    id: '6a709284-52bf-42fb-8343-b21b8eaedb3e',
    name: 'HyperX Cloud Alpha',
    image: 'images/products-img/HyperX Cloud Alpha.png',
    priceCents: 11489,
    rating: {
      stars: 4.5,
      count: 105
    },
    discount: .25,
    keywords: [
      'headset',
      'gaming',
      'wirless headset',
      'gaming headset',
    ],
    category: 'headset',
    description: "Experience superior sound with the HyperX Cloud Alpha. With a 4.5-star rating from 105 users and a 25% discount, it's a gaming essential."
  },
  {
    id: 'b239e10a-c102-46b3-931e-dce5ad55fb83',
    name: 'Corsair HS55 Stereo',
    image: 'images/products-img/Corsair HS55 Stereo.png',
    priceCents: 59999,
    rating: {
      stars: 4,
      count: 4061
    },
    discount: .15,
    keywords: [
      'headset',
      'gaming',
      'wirless headset',
      'gaming headset',
    ],
    category: 'headset',
    description: "Enjoy immersive audio with the Corsair HS55 Stereo. Rated 4 stars by 4061 users and available at a 15% discount, it's ideal for gamers."
  },
  {
    id: 'b239e10a-c102-46b3-931e-dce5ad55fb83',
    name: 'DT 900 Pro X',
    image: 'images/products-img/DT 900 Pro X.png',
    priceCents: 23299,
    rating: {
      stars: 4.5,
      count: 923
    },
    discount: .20,
    keywords: [
      'headset',
      'gaming',
      'wirless headset',
      'gaming headset',
    ],
    category: 'headset',
    description: "Upgrade your gaming experience with the DT 900 Pro X headset. Rated 4.5 stars by 923 users and now 20% off."
  },
  {
    id: '1d12835f-fbee-40b1-9d92-cb2564abb34d',
    name: 'Audio-Technica ATH-M50xSTS StreamSet',
    image: 'images/products-img/Audio-Technica ATH-M50xSTS StreamSet.png',
    priceCents: 19900,
    rating: {
      stars: 4.5,
      count: 82
    },
    discount: .30,
    keywords: [
      'headset',
      'gaming',
      'wirless headset',
      'gaming headset',
    ],
    category: 'headset',
    description: "Immerse yourself in gaming with the Audio-Technica ATH-M50xSTS StreamSet. Rated 4.5 stars by 82 users, now with a 30% discount."
  },
  {
    id: 'bbd198ca-c653-48f8-a955-504c89ff73ef',
    name: 'Samsung Galaxy S24',
    image: 'images/products-img/Samsung Galaxy S24.png',
    priceCents: 165999,
    rating: {
      stars: 4.5,
      count: 5182
    },
    discount: .30,
    keywords: [
      'cellphone',
      'phone',
      'samsung',
      'camera phone',
    ],
    category: 'cellphone',
    description: "Experience innovation with the Samsung Galaxy S24. Rated 4.5 stars by 5182 users, now with a 30% discount."
  },
  {
    id: '73747dd5-b81a-4c6f-84df-5f6fb84d72ae',
    name: 'HUAWEI Pura 70 Ultra',
    image: 'images/products-img/HUAWEI Pura 70 Ultra.png',
    priceCents: 162200,
    rating: {
      stars: 4.5,
      count: 1422
    },
    discount: .25,
    keywords: [
      'cellphone',
      'phone',
      'huawei',
      'smart phone',
    ],
    category: 'cellphone',
    description: "The HUAWEI Pura 70 Ultra seems like a sleek device! With its 4.5-star rating from 1422 reviews, it's certainly popular. Plus, a 25% discount makes it even more enticing. This smartphone is perfect for anyone looking for a high-quality device with advanced features."
  },
  {
    id: '23b5324e-11f3-4fa4-b453-485d78e74017',
    name: 'Xiaomi Redmi 12C',
    image: 'images/products-img/Xiaomi Redmi 12C.png',
    priceCents: 14499,
    rating: {
      stars: 4.5,
      count: 624
    },
    discount: .20,
    keywords: [
      'cellphone',
      'phone',
      'xiami',
      'redmi',
      'smart phone',
    ],
    category: 'cellphone',
    description: "The Xiaomi Redmi 12C looks like a great choice for those who want a reliable smartphone without breaking the bank. With a 4.5-star rating from 624 reviews and a 20% discount, it offers fantastic value for money. It's packed with features and is sure to satisfy anyone looking for a budget-friendly option."
  },
  {
    id: '23f198e6-4828-4cac-bddf-3c36b9f0a2bd',
    name: 'Honor X7a',
    image: 'images/products-img/Honor X7a.png',
    priceCents: 10929,
    rating: {
      stars: 4,
      count: 514
    },
    discount: .30,
    keywords: [
      'cellphone',
      'phone',
      'honor',
      'smart phone',
    ],
    category: 'cellphone',
    description: "The Honor X7a seems like a solid option for those looking for a budget-friendly smartphone. With a 4-star rating from 514 reviews and a generous 30% discount, it offers good value for its price. The Honor brand is known for delivering reliable devices, and the X7a appears to continue that tradition."
  },  
  {
    id: 'ea55bb83-d352-44cc-88e0-e82ffb81fc53',
    name: 'Intel Core i9-14900k',
    image: 'images/products-img/Intel Core i9-14900k.png',
    priceCents: 54899,
    rating: {
      stars: 5,
      count: 142
    },
    discount: .15,
    keywords: [
      'intel core',
      'processor',
      'intel',
      'gaming processor',
    ],
    category: 'computer',
    description: "The Intel Core i9-14900k is a powerhouse processor, perfect for gaming and high-performance computing tasks. With a perfect 5-star rating from 142 reviews and a 15% discount, it offers top-of-the-line performance at a slightly reduced price. This processor is a fantastic choice for anyone looking to build a high-end gaming or workstation PC."
  },  
  {
    id: 'f63216d3-f526-4342-97fc-162f177aaf60',
    name: 'Intel Core i7-13700',
    image: 'images/products-img/Intel Core i7-13700.png',
    priceCents: 37199,
    rating: {
      stars: 4.5,
      count: 3122
    },
    discount: .15,
    keywords: [
      'intel core',
      'processor',
      'intel',
      'gaming processor',
    ],
    category: 'computer',
    description: "The Intel Core i7-13700 is another excellent choice for high-performance computing needs, especially for gaming enthusiasts. With a 4.5-star rating from 3122 reviews and a 15% discount, it provides exceptional value for its price. This processor offers a great balance of performance and affordability, making it a popular option among gamers and professionals alike."
  },
  {
    id: 'fade02ed-7af9-4385-ad70-6ceaa6318e7d',
    name: 'Ryzen 5 5600x',
    image: 'images/products-img/Ryzen 5 5600x.png',
    priceCents: 14430,
    rating: {
      stars: 4.5,
      count: 1235
    },
    discount: .30,
    keywords: [
      'ryzen',
      'processor',
      'ryzen 5',
      'gaming processor',
    ],
    category: 'computer',
    description: "The Ryzen 5 5600x is a fantastic processor for both gaming and multitasking. With a 4.5-star rating from 1235 reviews and a generous 30% discount, it offers excellent performance at a compelling price point. This processor is known for its efficiency and power, making it a popular choice among gamers and content creators alike."
  },
  {
    id: '344ed19b-2faf-4cec-b788-4b1820ecc9f5',
    name: 'Ryzen 7 7700x',
    image: 'images/products-img/Ryzen 7 7700x.png',
    priceCents: 14430,
    rating: {
      stars: 4.5,
      count: 1235
    },
    discount: .30,
    keywords: [
      'ryzen',
      'processor',
      'ryzen 7',
      'gaming processor',
    ],
    category: 'computer',
    description: "The Ryzen 7 7700x appears to be a powerful processor suitable for gaming and high-performance computing tasks. With a 4.5-star rating from 1235 reviews and a substantial 30% discount, it offers impressive performance at an attractive price point. This processor is likely to appeal to gamers and professionals seeking a balance of power and affordability."
  },
].map(product => new Product(product));
