"use client";
import { SendMailIcon } from "@/shared/icons/sendMail";
import { Input } from "@/shared/UI/input";
import React from "react";

export const SendMail = () => {
  return (
    <Input
      className="h-10 border-dark-second bg-dark-second text-white placeholder:text-gray-second dark:border-dark dark:bg-dark"
      handlerPost={() => console.log("send mail")}
      placeholder="Your email address"
      postIcon={<SendMailIcon className="cursor-pointer fill-primary" />}
    />
  );
};
