import React from "react";
import { List } from "./list";
import { QuoteIcon } from "../icons/quote";

const Testimonial = () => {
  return (
    <div className="w-full rounded-xl border-1 border-gray p-6">
      <QuoteIcon className="fill-primary" />
    </div>
  );
};

export const TestimonialList = () => {
  return <List list={[{}]} ItemList={Testimonial} />;
};
