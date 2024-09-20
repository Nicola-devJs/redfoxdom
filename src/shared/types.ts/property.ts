import { StaticImageData } from "next/image";

export type PropertyType = "house" | "apartment" | "office" | "villa";
export type PropertyParamsType = "bed" | "bath" | "sqft";

export interface IPropertyCard {
  img: string | StaticImageData;
  name: string;
  price: number;
  location: {
    coods: google.maps.LatLngLiteral;
    name: string;
  };
  property: { type: PropertyType; name: string };
  params: { type: PropertyParamsType; value: number; name: string }[];
}
