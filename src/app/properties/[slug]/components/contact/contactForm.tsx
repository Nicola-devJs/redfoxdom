"use client";
import { MoreButton } from "@/shared/UI/button";
import { Input } from "@/shared/UI/input";
import { Textarea } from "@/shared/UI/textarea";
import React from "react";

export const ContactForm = () => {
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
      <MoreButton className="mt-3 font-normal">Send Message</MoreButton>
    </form>
  );
};
