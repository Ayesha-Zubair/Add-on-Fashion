const SHOP_DATA = [
  {
    title: 'Jewellery',
    items: [
      {
        id: 1,
        name: 'Gold Ring',
        imageUrl: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 25,
      },
      {
        id: 2,
        name: 'Silver Plated Ring',
        imageUrl: 'https://images.unsplash.com/photo-1607703829739-c05b7beddf60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 18,
      },
      {
        id: 3,
        name: 'Stylish Silver Necklace',
        imageUrl: 'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80',
        price: 35,
      },
      {
        id: 4,
        name: 'Chain Set',
        imageUrl: 'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        price: 25,
      },
      {
        id: 5,
        name: 'Silver Stone Bracelet',
        imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80',
        price: 18,
      },
      {
        id: 6,
        name: 'Star & Moon Chain Set',
        imageUrl: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 14,
      },
      {
        id: 8,
        name: 'Necklace Set',
        imageUrl: 'https://images.unsplash.com/photo-1630918489189-9e42244de485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        price: 14,
      },
      {
        id: 9,
        name: 'Golden Chain',
        imageUrl: 'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        price: 16,
      },
    ],
  },
  {
    title: 'HandBags',
    items: [
      {
        id: 18,
        name: 'Black Sling Bag',
        imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        price: 125,
      },
      {
        id: 19,
        name: 'Mini Bag',
        imageUrl: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        price: 90,
      },
      {
        id: 20,
        name: 'Clutch Bag',
        imageUrl: 'https://images.unsplash.com/photo-1603567364858-8e3362d9f040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown HandBag',
        imageUrl: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
        price: 165,
      },
      {
        id: 22,
        name: 'Women Handbag',
        imageUrl: 'https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 185,
      },
    ],
  },
  {
    title: 'Others',
    items: [
      {
        id: 23,
        name: 'Round Sunglasses',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 25,
      },
      {
        id: 24,
        name: 'Women Sunglasses',
        imageUrl: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
        price: 20,
      },
      {
        id: 25,
        name: 'Rectangular Sunglasses',
        imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 80,
      },
      {
        id: 26,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 135,
      },
    ],
  },
  {
    title: 'Footwear',
    items: [
      {
        id: 10,
        name: 'Peep Toes',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 220,
      },
      {
        id: 11,
        name: 'White Shoes',
        imageUrl: 'https://images.unsplash.com/photo-1620114884229-65d21f8c9423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        price: 280,
      },
      {
        id: 12,
        name: 'Leather Boots',
        imageUrl: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        price: 110,
      },
      {
        id: 13,
        name: 'Women Flip Flops',
        imageUrl: 'https://images.unsplash.com/photo-1627388484741-74dcc56ec343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        price: 160,
      },
      {
        id: 14,
        name: 'Women Shoes',
        imageUrl: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 160,
      },
      {
        id: 15,
        name: 'Jimmy Choo Heels',
        imageUrl: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 160,
      },
      {
        id: 16,
        name: 'Ballet Flat',
        imageUrl: 'https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80',
        price: 190,
      },
      {
        id: 17,
        name: 'Floral Print Block Heels',
        imageUrl: 'https://images.unsplash.com/photo-1519707574798-77140649cfe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        price: 200,
      },
    ],
  },
  {
    title: 'Watches',
    items: [
      {
        id: 30,
        name: 'Black Belt Watch',
        imageUrl: 'https://images.unsplash.com/photo-1658973070926-4b1511f7ec83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        price: 325,
      },
      {
        id: 31,
        name: 'Silver Watch',
        imageUrl: 'https://images.unsplash.com/photo-1655693487677-683764e20c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 20,
      },
      {
        id: 32,
        name: 'Wrist Watch',
        imageUrl: 'https://images.unsplash.com/photo-1528968620-57e0257ff360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        price: 25,
      },
      {
        id: 33,
        name: 'Women Smart Watch',
        imageUrl: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 25,
      },
      {
        id: 34,
        name: 'White Smart Watch',
        imageUrl: 'https://images.unsplash.com/photo-1617043983671-adaadcaa2460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        price: 40,
      },
    ],
  },
];

export default SHOP_DATA;
