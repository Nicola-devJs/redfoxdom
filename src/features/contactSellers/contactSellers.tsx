import { ContentSubstrate, NextImage } from "@/shared/ui/index";
import { mockTestImages } from "@/shared/constants/mockData";
import { MailIcon, PhoneIcon } from "@/shared/icons";
import React from "react";
import { ContactSellersForm } from "./ui/index";

interface IProps {
  onCloseSidebar: () => void;
}

export const ContactSellers = ({ onCloseSidebar }: IProps) => {
  return (
    <ContentSubstrate isBorder>
      <h4 className="mb-4 text-xl font-semibold capitalize">Contact Sellers</h4>
      <div className="mb-6 flex items-center">
        <NextImage
          src={mockTestImages.meleniko}
          alt={mockTestImages.meleniko.src}
          className="size-[100px] rounded-full"
        />
        <div className="ml-4">
          <span className="mb-3 inline-block font-semibold capitalize">
            Shara Conner
          </span>
          <div className="mb-1 flex items-center gap-2">
            <PhoneIcon className="size-4 fill-dark/50 dark:fill-gray-second" />
            <a
              href="tel:+37388451235"
              className="text-sm text-dark/50 dark:text-gray-second"
            >
              +37388451235
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="size-4 fill-dark/50 dark:fill-gray-second" />
            <a
              href="mailto:themeison@gmail.com"
              className="text-sm text-dark/50 dark:text-gray-second"
            >
              themeison@gmail.com
            </a>
          </div>
        </div>
      </div>
      <ContactSellersForm onCloseSidebar={onCloseSidebar} />
    </ContentSubstrate>
  );
};
