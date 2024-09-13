import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  supTitle: string;
  title: string;
}

export const HeadingSection = ({ children, title, supTitle }: IProps) => {
  return (
    <section className="container-block mt-[100px]">
      <h3 className="text-primary mb-2 text-center text-sm font-medium uppercase">
        {supTitle}
      </h3>
      <h2 className="mb-10 text-center text-4xl font-bold capitalize">
        {title}
      </h2>
      {children}
    </section>
  );
};
