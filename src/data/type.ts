export type MenuListType = {
  link: string;
  name: string;
  subMenu?: {
    link: string;
    name: string;
  }[];
};


export interface Produit {
  id: number;
  name: string;
  price: number;
  category: "Men" | "Women";
  image: string;
  description: string;
}


 

export const products = [
 
    {
      id: 1,
      name: "T-Shirt Name 10",
      price: "$23.00 – $28.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-200", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "T-Shirt Name 9",
      price: "$23.00 – $28.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-100", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "T-Shirt Name 8",
      price: "$21.00 – $25.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-blue-200"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 4,
      name: "T-Shirt Name 7",
      price: "$18.00 – $22.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-gray-800", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 5,
      name: "T-Shirt Name 8",
      price: "$21.00 – $25.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-blue-200"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 6,
      name: "T-Shirt Name 7",
      price: "$18.00 – $22.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-gray-800", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
     {
      id: 7,
      name: "T-Shirt Name 10",
      price: "$23.00 – $28.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-200", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 8,
      name: "T-Shirt Name 9",
      price: "$23.00 – $28.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-100", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
  ];

  export const saleProducts = [
  { id: 1, name: "T-Shirt Name 1", price: "$18.00 – $20.00", category: "Women", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80", discount: "-10%" },
  { id: 2, name: "T-Shirt Name 4", price: "$17.00 – $19.00", category: "Men", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80", discount: "-15%" },
  { id: 3, name: "T-Shirt Name 5", price: "$18.00 – $22.00", category: "Men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80", discount: "-20%" },
  { id: 4, name: "T-Shirt Name 7", price: "$28.00 – $32.00", category: "Women", image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=500&q=80", discount: "-10%" },
];


export const Menproduits = [
    {
      id: 1,
      name: "T-Shirt Name 10",
      price: "$23.00 – $28.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-200", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "T-Shirt Name 7",
      price: "$18.00 – $22.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-gray-800", "bg-white"],
      sizes: ["XS", "S", "M"]
    },
    {
      id: 3,
      name: "T-Shirt Name 7",
      price: "$18.00 – $22.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-gray-800", "bg-white"],
      sizes: ["XS", "S", "M"]
    },
     {
      id: 4,
      name: "T-Shirt Name 10",
      price: "$23.00 – $28.00",
      category: "Men",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-200", "bg-white"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 5,
      name: "T-Shirt Name 10",
      price: "$23.00 – $28.00",
      category: "Men",
      image: "https://images.pexels.com/photos/29138675/pexels-photo-29138675.jpeg",
      colors: ["bg-black", "bg-pink-200", "bg-blue-700"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    
  ];

  export const Womenproduits = [
    {
      id: 1,
      name: "T-Shirt Name 9",
      price: "$23.00 – $28.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-100", "bg-white"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "T-Shirt Name 8",
      price: "$21.00 – $25.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-blue-200"],
      sizes: ["M", "L", "XL"]
    },
    {
      id: 3,
      name: "T-Shirt Name 8",
      price: "$21.00 – $25.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-blue-200"],
      sizes: ["M", "L", "XL"]
    },
    {
      id: 4,
      name: "T-Shirt Name 9",
      price: "$23.00 – $28.00",
      category: "Women",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=500&q=80",
      colors: ["bg-black", "bg-pink-100", "bg-white"],
      sizes: ["S", "M", "L"]
    },
    {
      id: 5,
      name: "T-Shirt Name 9",
      price: "$23.00 – $28.00",
      category: "Women",
      image: "https://images.pexels.com/photos/8217291/pexels-photo-8217291.jpeg",
      colors: ["bg-black", "bg-pink-100", "bg-white"],
      sizes: ["S", "M", "L"]
    },
  ];