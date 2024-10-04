import { HeadingSection } from "@/shared/components/headingSection";
import { mockTestImages } from "@/shared/constants/property";
import { PropertyIcon } from "@/shared/icons";
import { KeyIcon } from "@/shared/icons/key";
import { LocationIcon } from "@/shared/icons/location";
import Image from "next/image";
import React from "react";
import { BenifitDesctiptionItem } from "./benifitDescriptionItem";
import { BenifitTag } from "./benifitTag";
import { NextImage } from "@/shared/components/NextImage";

export const Benifit = () => {
  return (
    <div className="bg-light py-[80px] dark:bg-dark-second">
      <div className="container-block-large flex max-xl:flex-col-reverse">
        <div className="relative mr-[80px] flex w-[60%] items-center justify-center pb-[80px] pt-[120px] max-xl:mx-auto max-xl:w-full max-xl:max-w-[780px] max-phone:hidden">
          <BenifitTag
            text="costomized solutions"
            className="left-[40px] top-[260px] max-md:left-[5.208vw] max-md:top-[33.854vw]"
          />
          <BenifitTag
            text="proven expertise"
            className="right-[200px] top-[160px] max-md:right-[26.042vw] max-md:top-[20.833vw]"
          />
          <BenifitTag
            text="local area knowledge"
            className="bottom-[60px] left-[170px] max-md:bottom-[7.813vw] max-md:left-[22.135vw]"
          />
          <BenifitTag
            text="transparent partnerships"
            className="right-[0px] top-[50%]"
          />

          <NextImage
            src={mockTestImages.meleniko}
            alt="benifit"
            className="absolute right-0 top-0 size-[260px] rounded-3xl shadow-lg max-md:size-[33.854vw]"
          />

          <NextImage
            src={mockTestImages.plovdiv}
            alt="benifit"
            className="h-[560px] w-[520px] rounded-3xl max-md:h-[72.917vw] max-md:w-[67.708vw]"
          />

          <NextImage
            src={mockTestImages.varna}
            alt="benifit"
            className="absolute bottom-0 left-0 size-[200px] rounded-3xl shadow-lg max-md:size-[26.042vw]"
          />
        </div>
        <HeadingSection
          supTitle="our benifit"
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          className="mb-[80px] mt-0 w-[40%] max-w-none max-xl:w-full max-md:mb-[40px] max-phone:mb-0"
          align="left"
        >
          <div className="-mt-6">
            <span className="mb-10 block text-sm text-dark/60 dark:text-gray-second">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate laboriosam maiores quibusdam rerum atque magni aperiam
              esse alias aut accusamus?
            </span>
            <div className="flex flex-col gap-4 max-xl:flex-row max-lg:flex-col">
              <BenifitDesctiptionItem
                ComponentIcon={PropertyIcon}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae iusto commodi impedit."
                title="buy a new home"
              />
              <BenifitDesctiptionItem
                ComponentIcon={KeyIcon}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae iusto commodi impedit."
                title="Rent a home"
              />
              <BenifitDesctiptionItem
                ComponentIcon={LocationIcon}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae iusto commodi impedit."
                title="Sell a home"
              />
            </div>
          </div>
        </HeadingSection>
      </div>
    </div>
  );
};
