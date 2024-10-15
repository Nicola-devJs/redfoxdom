import { FacebookIcon } from "@/app/icons/facebook";
import { GoogleIcon } from "@/app/icons/google";
import { NextImage } from "@/shared/components/NextImage";
import { CloseIcon } from "@/shared/icons/close";
import { SocialButton } from "@/shared/UI/button";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type SubLinkType = { text: string; link: string; pageName: string };

interface IProps {
  onClose: () => void;
  img: string | StaticImageData;
  children: ReactNode;
  sublink: SubLinkType;
  title: string;
}

export const AuthModal = ({
  onClose,
  children,
  img,
  sublink,
  title,
}: IProps) => {
  return (
    <div className="grid w-[900px] grid-cols-[40%_60%] overflow-hidden rounded-2xl bg-white dark:bg-dark-second">
      <NextImage src={img} className="rounded-r-none" />
      <div className="p-10">
        <div className="flex items-start justify-between">
          <h4 className="mb-8 text-3xl font-semibold">{title}</h4>
          <CloseIcon
            className="size-6 cursor-pointer fill-dark/50 dark:fill-gray-second"
            onClick={onClose}
          />
        </div>

        {children}
        <div className="mb-8 text-center text-sm">
          <span className="">{sublink.text} </span>
          <Link
            href={sublink.link}
            className="text-sm text-primary hover:underline hover:underline-offset-2"
          >
            {sublink.pageName}
          </Link>
        </div>
        <hr className="mb-8 overflow-visible border-gray text-center after:relative after:-top-[14px] after:bg-white after:px-4 after:text-sm after:text-dark/70 after:content-['or_login_with'] dark:border-gray-second dark:after:bg-dark-second dark:after:text-gray-second" />
        <div className="flex gap-3">
          <SocialButton className="dark:border-dark">
            <GoogleIcon className="size-6" />
            <span>Google</span>
          </SocialButton>
          <SocialButton className="dark:border-dark">
            <FacebookIcon className="size-6" />
            <span>Facebook</span>
          </SocialButton>
        </div>
      </div>
    </div>
  );
};
