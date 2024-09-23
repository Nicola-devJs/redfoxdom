import { PropertyParametr } from "@/shared/components/propertyParametr";
import { WrapperBlock } from "@/shared/components/wrapperBlock";
import { mockPropertyCards, mockTestImages } from "@/shared/constants";
import { HeartEmptyIcon } from "@/shared/icons/heart/heartEmpty";
import { LocationIcon } from "@/shared/icons/location";
import { ShareIcon } from "@/shared/icons/share";
import React from "react";
import { PropertyGallery } from "./components/gallery";
import { PropertySection } from "./components/propertySection";
import { List } from "@/shared/components/list";
import { PropertyOverview } from "./components/overview";
import { PropertyDetails } from "./components/details";
import { PropertyFeatures } from "./components/features";
import { Map } from "@/shared/components/map/map";
import { PropertyCollapse } from "./components/collapse";
import Image from "next/image";
import { NextImage } from "@/shared/components/NextImage";
import { HeadBlock } from "./components/headBlock";

export default function Property() {
  const { img, location, name, params, price, property } = mockPropertyCards[0];

  return (
    <div className="mt-3">
      <HeadBlock
        location={location.name}
        name={name}
        params={params}
        price={price}
      />
      <PropertyGallery images={Object.values(mockTestImages)} />
      <div className="container-block mt-2 grid grid-cols-[75%_25%]">
        <div className="mr-[50px]">
          <PropertySection
            heading="Description"
            secondBlock={{
              heading: "Overview",
              body: (
                <List
                  list={params}
                  ItemList={PropertyOverview}
                  className="grid-cols-4"
                />
              ),
            }}
          >
            <span className="text-sm text-dark/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              laudantium enim atque dolores inventore tempore odio molestias
              nemo minus voluptas omnis, repellendus cumque dolore culpa, natus
              ipsam quis architecto harum.
            </span>
            <span className="mt-3 inline-block cursor-pointer font-medium capitalize underline hover:no-underline">
              view more
            </span>
          </PropertySection>

          <PropertySection heading="Property details">
            <PropertyDetails details={[{ name: "ID", value: "#1234" }]} />
          </PropertySection>
          <PropertySection heading="Amentinest and features">
            <List
              list={[
                { featured: "Hangles" },
                { featured: "Consectetur adipisicing" },
                { featured: "Dolore culpa" },
                { featured: "Architecto harum" },
              ]}
              ItemList={PropertyFeatures}
              className="grid-cols-3 gap-3"
            />
          </PropertySection>
          <PropertySection heading="Map location">
            <Map
              initialMarkerProperties={[mockPropertyCards[0]]}
              className="mb-4 h-[500px] overflow-hidden rounded-3xl"
            />
            <PropertyDetails
              details={[
                { name: "ID", value: "#1234" },
                { name: "Price", value: "$10000" },
                { name: "Size", value: "150 sqft" },
              ]}
            />
          </PropertySection>
          <PropertySection
            heading="Floor plans"
            secondBlock={{ heading: "File attachments", body: <>you</> }}
          >
            <div className="flex flex-col gap-4">
              <PropertyCollapse name="First floor" optional={<>wait</>}>
                <NextImage
                  src={mockPropertyCards[0].img}
                  alt={mockPropertyCards[0].name}
                  className="h-[450px]"
                />
              </PropertyCollapse>
              <PropertyCollapse name="Second floor" optional={<>wait</>}>
                <NextImage
                  src={mockPropertyCards[0].img}
                  alt={mockPropertyCards[0].name}
                  className="h-[450px]"
                />
              </PropertyCollapse>
            </div>
          </PropertySection>
        </div>
      </div>
    </div>
  );
}
