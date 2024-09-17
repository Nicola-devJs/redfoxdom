import Image, { StaticImageData } from "next/image";
import React from "react";
import { Marker } from "./marker";
import { mockTestImages } from "../constants";
import { List } from "./list";

const mockPosts: IProps[] = [
  {
    date: "January 26, 2024",
    img: mockTestImages.plovdiv,
    name: "Build success project every now by next js",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptates magni eos doloribus error officiis eius dolorum laudantium quibusdam alias!",
  },
  {
    date: "January 26, 2024",
    img: mockTestImages.meleniko,
    name: "Build success project every now by next js",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptates magni eos doloribus error officiis eius dolorum laudantium quibusdam alias!",
  },
  {
    date: "January 26, 2024",
    img: mockTestImages.burgas,
    name: "Build success project every now by next js",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptates magni eos doloribus error officiis eius dolorum laudantium quibusdam alias!",
  },
];

interface IProps {
  date: string;
  img: string | StaticImageData;
  name: string;
  text: string;
}

const Post = ({ date, img, name, text }: IProps) => {
  return (
    <div className="w-full">
      <div className="relative mb-4 h-[240px] w-full overflow-hidden rounded-xl">
        <Marker items={[["primary", date]]} />
        <Image className="h-full w-full object-cover" src={img} alt={name} />
      </div>
      <div className="mb-1 flex items-center gap-1">
        <span className="text-xs font-medium capitalize text-dark dark:text-white">
          Joremi Belize
        </span>
        <span className="inline-block h-3 w-[2px] bg-gray dark:bg-gray-second"></span>
        <span className="text-xs capitalize text-dark-second dark:text-gray-second">
          Furniture
        </span>
      </div>
      <h4 className="mb-1 line-clamp-2 text-ellipsis text-lg font-semibold capitalize text-dark dark:text-white">
        {name}
      </h4>
      <p className="line-clamp-2 text-ellipsis text-xs text-dark/50 dark:text-gray">
        {text}
      </p>
    </div>
  );
};

export const PostList = () => {
  return <List list={mockPosts} ItemList={Post} keyProp="name" />;
};
