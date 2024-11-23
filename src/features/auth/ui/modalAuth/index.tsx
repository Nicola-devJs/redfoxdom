import { FacebookIcon } from "@/shared/icons/facebook";
import { GoogleIcon } from "@/shared/icons/google";
import { NextImage } from "@/shared/ui/nextImage";
import { Routes } from "@/shared/constants/routes";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";
import { CloseIcon } from "@/shared/icons/close";
import { SocialButton } from "@/shared/ui/button";
import { signIn } from "next-auth/react";

import { StaticImageData } from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  const callbackUrl = useGetQueryCallbackUrl();

  const handleLoginWithGoogleProvider = async () => {
    await signIn("google", { redirectTo: callbackUrl });
  };

  const handleLoginWithFacebookProvider = async () => {
    await signIn("facebook", { redirectTo: callbackUrl });
  };

  return (
    <div className="grid w-[900px] grid-cols-[40%_60%] overflow-hidden rounded-2xl bg-white shadow-[4px_4px_10px_0px_rgb(0_0_0_/_0.1),_4px_4px_10px_0px_rgb(0_0_0_/_0.1)] dark:bg-dark-blue">
      <NextImage src={img} className="rounded-r-none" alt="image" />
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
        <hr className="mb-8 overflow-visible border-gray text-center after:relative after:-top-[14px] after:bg-white after:px-4 after:text-sm after:text-dark/70 after:content-['or_login_with'] dark:border-dark dark:after:bg-dark-blue dark:after:text-gray-second" />
        <div className="flex gap-3">
          <SocialButton
            className="dark:border-dark dark:bg-dark"
            onClick={handleLoginWithGoogleProvider}
          >
            <GoogleIcon className="size-6" />
            <span>Google</span>
          </SocialButton>
          <SocialButton
            className="dark:border-dark dark:bg-dark"
            onClick={handleLoginWithFacebookProvider}
          >
            <FacebookIcon className="size-6" />
            <span>Facebook</span>
          </SocialButton>
        </div>
      </div>
    </div>
  );
};
