type productType2 = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

type productsType2 = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
}

type cartType2 = {
    id: number;
    products: productsType2[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

type usersType2 = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender?: "male" | "female" | "other"; // literal type
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height?: number;
    weight?: number;
    eyeColor?: string;
    hair: hairType;
    domain: string;
    ip: string;
    address: addressType;
    macAddress: string;
    university: string;
    bank: bankType;
    company: companyType;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: cryptoType;
}
type hairType = {
    color: string;
    type: string;
}
type addressType = {
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    postalCode: string;
    state: string;
}
type bankType = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
type companyType = {
    address: addressType;
    department: string;
    name: string;
    title: string;
}
type cryptoType = {
    coin: string;
    wallet: string;
    network: string;
}

const users: usersType2 = {
    id: 27,
    firstName: "Piper",
    lastName: "Schowalter",
    maidenName: "Wuckert",
    age: 47,
    gender: "female",
    email: "fokillq@amazon.co.jp",
    phone: "0987643456 ",
    username: "fokillq",
    password: "xZnWSWnqH",
    birthDate: "1983-06-07",
    image: "https://robohash.org/Piper.png?set=set4",
    bloodGroup: "A-",
    height: 197,
    weight: 71.5,
    eyeColor: "Brown",
    hair: {
        color: "Black",
        type: "Curly"
    },
    domain: "toplist.cz",
    ip: "100.159.51.104",
    address: {
        address: "1208 Elkader Court North",
        city: "Nashville",
        coordinates: {
            lat: 36.080049,
            lng: -86.60116099999999
        },
        postalCode: "37013",
        state: "TN"
    },
    macAddress: "1F:42:5D:8C:66:3D",
    university: "Sultanah Bahiyah Polytechnic",
    bank: {
        cardExpire: "09/22",
        cardNumber: "6762169351744592",
        cardType: "maestro",
        currency: "Ringgit",
        iban: "BH05 STDW HECU HD4S L8U1 C6"
    },
    company: {
        address: {
            address: "600 West 19th Avenue",
            city: "Anchorage",
            coordinates: {
                lat: 61.203115,
                lng: -149.894107
            },
            postalCode: "99503",
            state: "AK"
        },
        department: "Human Resources",
        name: "O'Hara and Sons",
        title: "Sales Representative"
    },
    ein: "11-3129153",
    ssn: "408-90-5986",
    userAgent: "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36",
    crypto: {
        coin: "Bitcoin",
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        network: "Ethereum (ERC20)"
    }
}
console.log(users);

const user3: productType2 = {
    id: 2,
    title: "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
}
console.log(user3);

const cart: cartType2 = {
    id: 9,
    products: [
        {
            "id": 74,
            "title": "Leather Hand Bag",
            "price": 57,
            "quantity": 3,
            "total": 171,
            "discountPercentage": 11.19,
            "discountedPrice": 152,
            "thumbnail": "https://cdn.dummyjson.com/product-images/74/thumbnail.jpg"
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "price": 1099,
            "quantity": 3,
            "total": 3297,
            "discountPercentage": 6.18,
            "discountedPrice": 3093,
            "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
        },
        {
            "id": 19,
            "title": "Skin Beauty Serum.",
            "price": 46,
            "quantity": 2,
            "total": 92,
            "discountPercentage": 10.68,
            "discountedPrice": 82,
            "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
        },
        {
            "id": 53,
            "title": "printed high quality T shirts",
            "price": 35,
            "quantity": 1,
            "total": 35,
            "discountPercentage": 7.54,
            "discountedPrice": 32,
            "thumbnail": "https://cdn.dummyjson.com/product-images/53/thumbnail.jpg"
        },
        {
            "id": 13,
            "title": "Fog Scent Xpressio Perfume",
            "price": 13,
            "quantity": 1,
            "total": 13,
            "discountPercentage": 8.14,
            "discountedPrice": 12,
            "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp"
        }
    ],
    "total": 3608,
    "discountedTotal": 3371,
    "userId": 91,
    "totalProducts": 5,
    "totalQuantity": 10
}
console.log(cart);