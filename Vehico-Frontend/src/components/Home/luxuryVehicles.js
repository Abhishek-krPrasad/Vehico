export const luxuryVehicles = [
  {
    name: "Rolls-Royce Phantom",
    imageUrl:
      "https://images.pexels.com/photos/6445342/pexels-photo-6445342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "An epitome of luxury, the Phantom redefines automotive opulence with its handcrafted interiors and ultra-smooth ride.",
    pricePerDay: 250000, // INR
    make: "Rolls-Royce",
    model: "Phantom",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 5, // assuming it’s a 5-seater
    isAvailable: true,
  },
  {
    name: "Bentley Continental GT",
    imageUrl:
      "https://images.pexels.com/photos/8641224/pexels-photo-8641224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A grand tourer that combines breathtaking performance with unmatched elegance.",
    pricePerDay: 180000, // INR
    make: "Bentley",
    model: "Continental GT",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 4, // assuming 4-seater
    isAvailable: true,
  },
  {
    name: "Mercedes-Benz S-Class",
    imageUrl:
      "https://images.pexels.com/photos/18369292/pexels-photo-18369292/free-photo-of-a-mercedes-benz-s-class.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The ultimate expression of sophistication and advanced technology in a luxury sedan.",
    pricePerDay: 150000, // INR
    make: "Mercedes-Benz",
    model: "S-Class",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 5, // assuming it’s a 5-seater
    isAvailable: true,
  },
  {
    name: "BMW 7 Series",
    imageUrl:
      "https://images.pexels.com/photos/10020075/pexels-photo-10020075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A luxury sedan that balances performance, technology, and opulence.",
    pricePerDay: 140000, // INR
    make: "BMW",
    model: "7 Series",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Audi A8",
    imageUrl:
      "https://images.pexels.com/photos/1005634/pexels-photo-1005634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Flagship sedan offering high-tech features and unmatched ride comfort.",
    pricePerDay: 130000, // INR
    make: "Audi",
    model: "A8",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Lexus LS",
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lexus/LS/4924/1622802604706/front-left-side-47.jpg?tr=w-664",
    description:
      "A full-size luxury sedan with cutting-edge design and advanced hybrid technology.",
    pricePerDay: 120000, // INR
    make: "Lexus",
    model: "LS",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Hybrid",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Jaguar XJ",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jaguar_XJ_vs._Jetman_-_World-First_Desert_Drag_Race_%2822928441043%29_%28cropped%29.jpg/1200px-Jaguar_XJ_vs._Jetman_-_World-First_Desert_Drag_Race_%2822928441043%29_%28cropped%29.jpg",
    description:
      "A performance-focused luxury sedan with innovative design and advanced tech features.",
    pricePerDay: 110000, // INR
    make: "Jaguar",
    model: "XJ",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Diesel",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Maserati Quattroporte",
    imageUrl:
      "https://www.autonation.com/~/media/Images/Landingpage%20-%20Car%20Research/maserati-ghibli-vs-quattroporte/maserati-ghibli-comparison",
    description:
      "A luxury sedan that exudes elegance with Italian styling and powerful performance.",
    pricePerDay: 105000, // INR
    make: "Maserati",
    model: "Quattroporte",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Porsche Panamera",
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/Panamera/11350/1701081788330/front-left-side-47.jpg",
    description:
      "An iconic luxury sedan that offers both high performance and refined comfort.",
    pricePerDay: 95000, // INR
    make: "Porsche",
    model: "Panamera",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 4,
    isAvailable: true,
  },
  {
    name: "Aston Martin DB11",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/8BECR78XsmSev59JbRSju3-1200-80.jpg",
    description:
      "A luxury sports car that offers powerful performance combined with elegant styling.",
    pricePerDay: 90000, // INR
    make: "Aston Martin",
    model: "DB11",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 2, // assuming it’s a 2-seater
    isAvailable: true,
  },
  {
    name: "Ferrari GTC4Lusso",
    imageUrl:
      "https://cdn.ferrari.com/cms/network/media/img/resize/5eb1664adf172d0efc0d363e-01_ferrari-125s_gtc4lusso_esterni?width=750&height=550",
    description:
      "A stunning luxury sports car that blends style and power, perfect for high-speed enthusiasts.",
    pricePerDay: 85000, // INR
    make: "Ferrari",
    model: "GTC4Lusso",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 4,
    isAvailable: true,
  },
  {
    name: "Lamborghini Huracán",
    imageUrl:
      "https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2021/09/IMG_2919-1.jpg?quality=85",
    description:
      "A striking supercar that offers extreme performance and bold Italian styling.",
    pricePerDay: 80000, // INR
    make: "Lamborghini",
    model: "Huracán",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 2, // assuming it’s a 2-seater
    isAvailable: true,
  },
  {
    name: "Bugatti Chiron",
    imageUrl:
      "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/mn38trhc0kmxndtglsue",
    description:
      "An extreme performance hypercar, renowned for its top-tier speed and luxurious features.",
    pricePerDay: 500000, // INR
    make: "Bugatti",
    model: "Chiron",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 2, // assuming it’s a 2-seater
    isAvailable: true,
  },
  {
    name: "McLaren 720S",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/1200px-2018_McLaren_720S_V8_S-A_4.0.jpg",
    description:
      "A high-performance supercar, designed for thrill-seekers and track enthusiasts.",
    pricePerDay: 450000, // INR
    make: "McLaren",
    model: "720S",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 2, // assuming it’s a 2-seater
    isAvailable: true,
  },
  {
    name: "Tesla Model S",
    imageUrl:
      "https://cdn.euroncap.com/media/72827/tesla-model-s.png",
    description:
      "An all-electric luxury sedan offering exceptional performance and advanced features.",
    pricePerDay: 250000, // INR
    make: "Tesla",
    model: "Model S",
    type: "CAR", // Assuming VEHICLE_TYPE enum
    fuelType: "Electric",
    capacity: 5, // assuming it’s a 5-seater
    isAvailable: true,
  },
  {
    name: "Rolls-Royce Cullinan",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg/1200px-2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg",
    description:
      "The pinnacle of luxury SUVs, offering unparalleled comfort, power, and elegance.",
    pricePerDay: 300000, // INR
    make: "Rolls-Royce",
    model: "Cullinan",
    type: "SUV", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Land Rover Range Rover",
    imageUrl:
      "https://www.v3cars.com/media/model-imgs/1657708673-Range%20Rover.webp",
    description:
      "A luxurious off-road SUV, perfect for those who demand style and capability.",
    pricePerDay: 200000, // INR
    make: "Land Rover",
    model: "Range Rover",
    type: "SUV", // Assuming VEHICLE_TYPE enum
    fuelType: "Diesel",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Porsche Cayenne",
    imageUrl:
      "https://www.carlelo.com/_next/image?url=https%3A%2F%2Fcontent.carlelo.com%2Fuploads%2Fmodel%2Fporsche-cayenne-coupe-1.webp&w=1920&q=75",
    description:
      "A luxury SUV with outstanding performance, blending practicality with elegance.",
    pricePerDay: 180000, // INR
    make: "Porsche",
    model: "Cayenne",
    type: "SUV", // Assuming VEHICLE_TYPE enum
    fuelType: "Petrol",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "BMW X7",
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/10571/1732947969390/front-view-118.jpg",
    description:
      "A luxury SUV that combines modern technology, spaciousness, and supreme comfort.",
    pricePerDay: 160000, // INR
    make: "BMW",
    model: "X7",
    type: "SUV", // Assuming VEHICLE_TYPE enum
    fuelType: "Diesel",
    capacity: 7, // assuming 7-seater
    isAvailable: true,
  },
  {
    name: "Mercedes-Benz G-Class",
    imageUrl:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/g-class/class-page/series/2025-G-SUV-CT-1-5-1-DR.jpg",
    description:
      "An iconic luxury SUV with unmatched off-road capabilities and a distinctive design.",
    pricePerDay: 220000, // INR
    make: "Mercedes-Benz",
    model: "G-Class",
    type: "SUV", // Assuming VEHICLE_TYPE enum
    fuelType: "Diesel",
    capacity: 5,
    isAvailable: true,
  },
  {
    name: "Audi Q7",
    imageUrl:
      "https://gaadiwaadi.com/wp-content/uploads/2024/01/2024-audi-Q7-2-1278x720.jpg",
    description:
      "A luxury SUV with a spacious cabin, high-tech features, and a comfortable ride.",
    pricePerDay: 150000, // INR
    make: "Audi",
    model: "Q7",
    type: "SUV", // Assuming VEHICLE_TYPE enum 
    fuelType: "Diesel",
    capacity: 7, // assuming 7-seater
    isAvailable: true,
  }
];








//   {
//     name: "Rolls-Royce Phantom",
//     imageUrl:
//       "https://images.pexels.com/photos/6445342/pexels-photo-6445342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "An epitome of luxury, the Phantom redefines automotive opulence with its handcrafted interiors and ultra-smooth ride.",
//     pricePerDay: 250000, // INR
//   },
//   {
//     name: "Bentley Continental GT",
//     imageUrl:
//       "https://images.pexels.com/photos/8641224/pexels-photo-8641224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "A grand tourer that combines breathtaking performance with unmatched elegance.",
//     pricePerDay: 180000, // INR
//   },
//   {
//     name: "Mercedes-Benz S-Class",
//     imageUrl:
//       "https://images.pexels.com/photos/18369292/pexels-photo-18369292/free-photo-of-a-mercedes-benz-s-class.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "The ultimate expression of sophistication and advanced technology in a luxury sedan.",
//     pricePerDay: 150000, // INR
//   },
//   {
//     name: "BMW 7 Series",
//     imageUrl:
//       "https://images.pexels.com/photos/10020075/pexels-photo-10020075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "A luxury sedan that balances performance, technology, and opulence.",
//     pricePerDay: 140000, // INR
//   },
//   {
//     name: "Audi A8",
//     imageUrl:
//       "https://images.pexels.com/photos/1005634/pexels-photo-1005634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "Flagship sedan offering high-tech features and unmatched ride comfort.",
//     pricePerDay: 130000, // INR
//   },
//   {
//     name: "Lexus LS",
//     imageUrl:
//       "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lexus/LS/4924/1622802604706/front-left-side-47.jpg?tr=w-664",
//     description:
//       "A full-size luxury sedan with cutting-edge design and advanced hybrid technology.",
//     pricePerDay: 120000, // INR
//   },
//   {
//     name: "Jaguar XJ",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jaguar_XJ_vs._Jetman_-_World-First_Desert_Drag_Race_%2822928441043%29_%28cropped%29.jpg/420px-Jaguar_XJ_vs._Jetman_-_World-First_Desert_Drag_Race_%2822928441043%29_%28cropped%29.jpg",
//     description:
//       "A luxury sedan that offers dynamic performance and British sophistication.",
//     pricePerDay: 110000, // INR
//   },
//   {
//     name: "Porsche Panamera",
//     imageUrl:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/165641/panamera-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
//     description:
//       "A sports sedan that blends luxury, technology, and Porsche's driving dynamics.",
//     pricePerDay: 150000, // INR
//   },
//   {
//     name: "Tesla Model S",
//     imageUrl: "https://cdn.euroncap.com/media/72827/tesla-model-s.png",
//     description:
//       "An all-electric luxury sedan with extraordinary acceleration and futuristic design.",
//     pricePerDay: 120000, // INR
//   },
//   {
//     name: "Aston Martin DB11",
//     imageUrl:
//       "https://media.astonmartin.com/wp-content/uploads/2017/02/962123-500x334.jpg.webp",
//     description:
//       "A grand tourer that combines breathtaking performance with elegant craftsmanship.",
//     pricePerDay: 200000, // INR
//   },
//   {
//     name: "Ferrari Roma",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2021_Ferrari_Roma_in_Rosso_Fiorano%2C_front_right.jpg/1200px-2021_Ferrari_Roma_in_Rosso_Fiorano%2C_front_right.jpg",
//     description:
//       "A sleek and modern Ferrari offering a thrilling drive with Italian flair.",
//     pricePerDay: 300000, // INR
//   },
//   {
//     name: "Maserati Quattroporte",
//     imageUrl:
//       "https://maserati.scene7.com/is/image/maserati/maserati/international/model-page/quattroporte/design/214300M-exterior%20(1).jpg?$1400x2000$&fit=constrain",
//     description:
//       "A luxury sports sedan combining Italian style and exhilarating performance.",
//     pricePerDay: 160000, // INR
//   },
//   {
//     name: "Lamborghini Urus",
//     imageUrl:
//       "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2024/model_chooser/Model%3DUrus%20SE%2C%20Type%3DMobile.png",
//     description:
//       "A high-performance SUV blending Lamborghini's signature style with practicality.",
//     pricePerDay: 250000, // INR
//   },
//   {
//     name: "Range Rover Autobiography",
//     imageUrl:
//       "https://jlr.scene7.com/is/image/jlr/L460_22MY_074_GLHD_AUTOBIOGRAPHY_LWB_DX_2560x1440",
//     description:
//       "A luxury SUV offering exceptional comfort, performance, and off-road capabilities.",
//     pricePerDay: 180000, // INR
//   },
//   {
//     name: "Bugatti Chiron",
//     imageUrl:
//       "https://www.motortrend.com/uploads/sites/5/2016/02/2017-Bugatti-Chiron-front-three-quarter.jpg?w=768&width=768&q=75&format=webp",
//     description:
//       "One of the fastest and most exclusive hypercars in the world.",
//     pricePerDay: 1000000, // INR
//   },
//   {
//     name: "McLaren GT",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtyKlDSlwgQJpbDzvx02FwPu0Fl4NjwdbKQ&s",
//     description:
//       "A supercar designed for long journeys with unmatched comfort and speed.",
//     pricePerDay: 300000, // INR
//   },
//   {
//     name: "Pagani Huayra",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/3/36/Pagani%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0023%29.jpg",
//     description:
//       "A handcrafted hypercar known for its bespoke design and exhilarating performance.",
//     pricePerDay: 900000, // INR
//   },
//   {
//     name: "Koenigsegg Jesko",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0833%29.jpg/800px-GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0833%29.jpg",
//     description: "A hypercar built for extreme speed and track performance.",
//     pricePerDay: 1200000, // INR
//   },
//   {
//     name: "Rolls-Royce Cullinan",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg/1200px-2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg",
//     description:
//       "The ultimate luxury SUV offering unparalleled comfort and refinement.",
//     pricePerDay: 300000, // INR
//   },
//   {
//     name: "Bentley Flying Spur",
//     imageUrl:
//       "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.Bj4m.V11iQ/v1/-1x-1.webp",
//     description:
//       "A luxury sedan offering world-class craftsmanship and dynamic performance.",
//     pricePerDay: 190000, // INR
//   },
//   {
//     name: "Maybach GLS 600",
//     imageUrl:
//       "https://www.financialexpress.com/wp-content/uploads/2021/06/Mercedes-Benz-GLS_600_Maybach-2021-1600-4e.jpeg",
//     description:
//       "An ultra-luxury SUV offering premium features and a smooth ride.",
//     pricePerDay: 250000, // INR
//   },
//   {
//     name: "Cadillac Escalade V",
//     imageUrl:
//       "https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/2024/crossover-suvs/escalade/escalade-v/my24-escalade-v-design-fierce-styling.jpg?imwidth=1200",
//     description:
//       "A full-size luxury SUV offering advanced technology and bold design.",
//     pricePerDay: 150000, // INR
//   },
//   {
//     name: "Mercedes-Benz G-Class",
//     imageUrl:
//       "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/g-class/class-page/series/2025-G-SUV-CT-1-5-2-DR.jpg",
//     description:
//       "An iconic luxury SUV known for its off-road capability and timeless style.",
//     pricePerDay: 200000, // INR
//   },
//   {
//     name: "Tesla Model X",
//     imageUrl:
//       "https://www.cnet.com/a/img/resize/50a2b0406834f3b07d90495e3fac989d6bf51af3/hub/2016/04/28/5a91e8fc-14bc-4c22-abe4-b990073328d2/2016-tesla-model-s-19-of-43.jpg?auto=webp&width=768",
//     description:
//       "A futuristic electric SUV with impressive performance and unique Falcon Wing doors.",
//     pricePerDay: 150000, // INR
//   },
//   {
//     name: "Lexus RX 500h",
//     imageUrl:
//       "https://www.lexusindia.co.in/content/dam/lexus-v3-blueprint/models/suv/rx/rx-500h-fsport-performance/my23/gallery/unused/gallery-ext-03-d.jpg",
//     description:
//       "A premium hybrid SUV offering sporty performance and modern styling.",
//     pricePerDay: 50000, // INR
//   },
//   {
//     name: "Volvo XC90 Excellence",
//     imageUrl:
//       "https://imgd.aeplcdn.com/664x374/cw/ec/18626/Volvo-XC90-Left-Side-View-76952.jpg?v=201711021421&wm=1&q=80",
//     description:
//       "A plug-in hybrid luxury SUV offering sustainable elegance and advanced safety.",
//     pricePerDay: 80000, // INR
//   },
//   {
//     name: "Land Rover Defender V8",
//     imageUrl:
//       "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230426025944_DEF_24MY_OUTBOUND_260423_01.jpg&w=700&c=1",
//     description:
//       "A rugged luxury SUV offering immense off-road capability and modern features.",
//     pricePerDay: 120000, // INR
//   },
//   {
//     name: "Alfa Romeo Stelvio Quadrifoglio",
//     imageUrl:
//       "https://ridesanddrives.com/wp-content/uploads/2023/01/SVB-Alfa-008.jpg",
//     description:
//       "A performance-focused luxury SUV with Italian flair and precision.",
//     pricePerDay: 90000, // INR
//   },
// ];
