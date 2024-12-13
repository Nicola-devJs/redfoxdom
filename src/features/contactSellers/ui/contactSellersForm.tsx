import { MoreButton, Input, Textarea } from "@/shared/ui/index";
import React from "react";

interface IProps {
  onCloseSidebar: () => void;
}

export const ContactSellersForm = ({ onCloseSidebar }: IProps) => {
  const handleSubmit = () => {
    onCloseSidebar();
  };

  return (
    <form
      action="#"
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3"
    >
      <Input placeholder="Full Name" />
      <Input type="tel" placeholder="Phone Number" />
      <Input type="email" placeholder="Email Address" />
      <Textarea placeholder="Your Message:" />
      <MoreButton onClick={handleSubmit} className="mt-3 font-normal">
        Send Message
      </MoreButton>
    </form>
  );
};
