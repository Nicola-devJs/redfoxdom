import React from "react";
import { mockTestImages } from "@/shared/constants/mockData";
import { List } from "@/shared/ui/index";
import { Post } from "./ui/index";

const mockPosts = [
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

export const PostList = () => {
  return <List list={mockPosts} ItemList={Post} keyProp="name" />;
};
