import { ICardDetails, IProdutDetails, IUserDetails } from "./libs/Type";
import { IUser } from "./Type";

export const productDetailParams : IProdutDetails ={
  id: +(""),
  title: "",
  description: "",
  price: +(""),
  discountPercentage: +(""),
  rating: +(""),
  stock: +(""),
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
 
}

  export const cardDetailsParams: ICardDetails={
    id: +(""),
    products: [
      {
        id: +(""),
        title: "",
        price: +(""),
        quantity: +(""),
        total: +(""),
        discountPercentage: +(""),
        discountedPrice: +("")
      },
    ]
  }

  export const userDetails1: IUserDetails={
    id: +(""),
    firstName: "",
    lastName: "",
    maidenName: "",
    age: +(""),
    gender: "",
    email: "",
    phone: "",
    image: "",
    address: {
      address: "",
      city: "",
      state: ""
    },
    userAgent: ""
  }

  export const userLogin:IUser={
    email: "",
    firstName: "",
    gender:"",
    id: 0,
    image:"",
    lastName:"",
    token: "",
    username: ""
  }