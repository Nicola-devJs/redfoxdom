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
import { FileAttachments } from "./components/fileAttachments";
import { ContactSellers } from "./components/contact/contact";
import { FindPanel } from "@/shared/components/findPanel/findPanel";

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
      <div className="container-block mt-2 grid grid-cols-[65%_35%]">
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
              className="mb-4 h-[450px] overflow-hidden rounded-3xl"
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
            secondBlock={{
              heading: "File attachments",
              body: <FileAttachments />,
            }}
          >
            <PropertyCollapse
              collapses={[
                {
                  id: "first",
                  name: "First room",
                  body: (
                    <NextImage
                      src={mockPropertyCards[0].img}
                      alt={mockPropertyCards[0].name}
                      className="h-[400px]"
                    />
                  ),
                  optional: (
                    <div className="flex items-center gap-3">
                      {params.map((param) => (
                        <PropertyParametr
                          key={param.type}
                          name={param.name}
                          param={param.type}
                          value={param.value}
                        />
                      ))}
                    </div>
                  ),
                },
                {
                  id: "second",
                  name: "Second room",
                  body: (
                    <NextImage
                      src={mockPropertyCards[2].img}
                      alt={mockPropertyCards[2].name}
                      className="h-[400px]"
                    />
                  ),
                  optional: (
                    <div className="flex items-center gap-3">
                      {params.map((param) => (
                        <PropertyParametr
                          key={param.type}
                          name={param.name}
                          param={param.type}
                          value={param.value}
                        />
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </PropertySection>
        </div>
        <div className="mt-8 flex flex-col gap-10">
          <ContactSellers />
          <FindPanel />
        </div>
      </div>
    </div>
  );
}
