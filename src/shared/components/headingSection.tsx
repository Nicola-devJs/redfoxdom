import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  supTitle: string;
  title: string;
}

export const HeadingSection = ({ children, title, supTitle }: IProps) => {
  return (
    <section className="container-block mt-[80px]">
      <h3 className="mb-2 text-center text-sm font-medium uppercase text-primary">
        {supTitle}
      </h3>
      <h2 className="mb-8 text-center text-4xl font-bold capitalize max-md:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
};
