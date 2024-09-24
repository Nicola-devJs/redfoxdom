import { BlockContent } from "@/shared/components/blockContent";
import { NextImage } from "@/shared/components/NextImage";
import { mockTestImages } from "@/shared/constants";
import { ArrowRightIcon } from "@/shared/icons/arrowRight";
import { MailIcon } from "@/shared/icons/mail";
import { PhoneIcon } from "@/shared/icons/phone";
import { Button, MoreButton } from "@/shared/UI/button";
import { Input } from "@/shared/UI/input";
import { Textarea } from "@/shared/UI/textarea";
import React from "react";
import { ContactForm } from "./contactForm";

export const ContactSellers = () => {
  return (
    <BlockContent>
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
            <PhoneIcon className="size-4 fill-dark/50" />
            <a href="tel:+37388451235" className="text-sm text-dark/50">
              +37388451235
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="size-4 fill-dark/50" />
            <a
              href="mailto:themeison@gmail.com"
              className="text-sm text-dark/50"
            >
              themeison@gmail.com
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </BlockContent>
  );
};
