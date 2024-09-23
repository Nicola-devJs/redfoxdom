import React from "react";
import { Logo } from "../logo";
import { FacebookIcon } from "@/shared/icons/social/facebook";
import { InstagramIcon } from "@/shared/icons/social/instagram";
import Link from "next/link";
import { LocationIcon } from "@/shared/icons/location";
import { PhoneIcon } from "@/shared/icons/phone";
import { MailIcon } from "@/shared/icons/mail";
import { SendMail } from "./sendMail";

export const Footer = () => {
  return (
    <div className="mt-[80px] w-full border-t-1 border-dark-second bg-dark text-white dark:bg-dark-second">
      <div className="container-block">
        <div className="flex items-center justify-between py-12">
          <Logo className="border-white text-white" />
          <div className="flex items-center gap-3">
            <span className="text-sm capitalize">follow us:</span>
            <div className="flex gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-dark-second dark:bg-dark">
                <FacebookIcon className="h-4 w-4 fill-white" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-full bg-dark-second dark:bg-dark">
                <InstagramIcon className="h-4 w-4 fill-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-dark-second dark:bg-dark"></div>
      <div className="container-block">
        <div className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-10 border-b-1 border-dark-second py-10 max-lg:grid-cols-2 max-sm:gap-x-4 dark:border-dark">
          <div className="max-sm:col-span-2">
            <span className="mb-3 block text-sm text-gray-second">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
              a.
            </span>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <LocationIcon className="size-4 fill-gray-second" />
                <a
                  href="geo:37.7749,-122.4194"
                  className="text-sm font-light text-gray"
                >
                  Open example location
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="size-4 fill-gray-second" />
                <a
                  href="tel:+37388451235"
                  className="text-sm font-light text-gray"
                >
                  +37388451235
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="size-4 fill-gray-second" />
                <a
                  href="mailto:themeison@gmail.com"
                  className="text-sm font-light text-gray"
                >
                  themeison@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <dl className="">
            <dt className="mb-3 text-base text-white">Categories</dt>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              <Link href={"#"}>About us</Link>
            </dd>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              <Link href={"#"}>About us</Link>
            </dd>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              <Link href={"#"}>About us</Link>
            </dd>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              <Link href={"#"}>About us</Link>
            </dd>
          </dl>
          <dl className="">
            <dt className="mb-3 text-base text-white">Properties</dt>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              property for rent
            </dd>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              property for sale
            </dd>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              property for buy
            </dd>
            <dd className="mb-2 text-sm capitalize text-gray-second">
              our agents
            </dd>
          </dl>
          <div className="flex flex-col max-sm:col-span-2">
            <span className="mb-3 block text-base text-white">
              Send your message to our email
            </span>
            <span className="mb-3 block flex-grow text-sm text-gray-second max-sm:mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
            <SendMail />
          </div>
        </div>
        <div className="text flex items-center justify-between gap-2 py-8 text-sm capitalize text-gray-second max-md:flex-col">
          <span className="">© 2024, website create by Nikola devJs</span>

          <div className="items-centre flex gap-2">
            {["Terms of services", "Privacy policy", "Cookie policy"].map(
              (legal, id) => (
                <Link
                  key={id}
                  href={"#"}
                  className="flex items-center after:ml-2 after:block after:h-3 after:w-[1px] after:bg-dark-second last:after:hidden hover:underline dark:after:bg-dark"
                >
                  {legal}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
