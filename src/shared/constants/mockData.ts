import burgasImage from "@/shared/assets/burgas.jpg";
import melenikoImage from "@/shared/assets/Meleniko.jpg";
import obzorImage from "@/shared/assets/Obzor.jpg";
import nesebrImage from "@/shared/assets/nesebr.jpg";
import plovdivImage from "@/shared/assets/plovdiv.webp";
import sofiaImage from "@/shared/assets/sofia.jpg";
import varnaImage from "@/shared/assets/varna.jpg";
import { IPropertyCard } from "../types/property";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

// TODO temp mock data
export const mockTestImages = {
  burgas: burgasImage,
  meleniko: melenikoImage,
  obzor: obzorImage,
  nesebr: nesebrImage,
  plovdiv: plovdivImage,
  sofia: sofiaImage,
  varna: varnaImage,
};

// TODO temp mock data
export const mockPropertyCards: IPropertyCard[] = [
  {
    img: mockTestImages.burgas,
    name: "Costa rika",
    location: {
      coods: { lat: 42.503701480508234, lng: 27.470214576721176 },
      name: "123 Chekalova, Burgase",
    },
    params: [
      { name: "Beds", type: "bed", value: 2 },
      { name: "Baths", type: "bath", value: 3 },
      { name: "Square", type: "sqft", value: 1150 },
    ],
    price: 1100,
    property: { name: "Apartment", type: "apartment" },
  },
  {
    img: mockTestImages.meleniko,
    name: "Costa rika",
    location: {
      coods: { lat: 42.514980749099045, lng: 27.458799095153793 },
      name: "123 Chekalova, Burgase",
    },
    params: [
      { name: "Beds", type: "bed", value: 2 },
      { name: "Baths", type: "bath", value: 3 },
      { name: "Square", type: "sqft", value: 1150 },
    ],
    price: 1100,
    property: { name: "Villa", type: "villa" },
  },
  {
    img: mockTestImages.nesebr,
    name: "Costa rika",
    location: {
      coods: { lat: 42.5106785226839, lng: 27.47532150268553 },
      name: "123 Chekalova, Burgase",
    },
    params: [
      { name: "Beds", type: "bed", value: 2 },
      { name: "Baths", type: "bath", value: 3 },
      { name: "Square", type: "sqft", value: 1150 },
    ],
    price: 1100,
    property: { name: "House", type: "house" },
  },
];

export const users = [
  { email: "test@age.com", password: "12345", username: "Danil Nicolaev" },
];
