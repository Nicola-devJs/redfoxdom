import { PropertyParametr } from "@/shared/components/propertyParametr";
import { mockPropertyCards, mockTestImages } from "@/shared/constants";
import React from "react";
import { PropertyGallery } from "./components/gallery";
import { PropertySection } from "./components/propertySection";
import { List } from "@/shared/components/list";
import { PropertyOverview } from "./components/overview";
import { PropertyDetails } from "./components/details";
import { PropertyFeatures } from "./components/features";
import { Map } from "@/shared/components/map/map";
import { PropertyCollapse } from "./components/collapse";
import { NextImage } from "@/shared/components/NextImage";
import { HeadBlock } from "./components/headBlock";

import { Video } from "@/shared/components/video";
import { Sidebar } from "./components/sidebar/sidebar";
import { FileAttachment } from "./components/fileAttachment";

export default function Property() {
  const { img, location, name, params, price, property } = mockPropertyCards[0];

  return (
    <div className="mt-3 max-md:mt-0">
      <HeadBlock
        location={location.name}
        name={name}
        params={params}
        price={price}
      />
      <PropertyGallery images={Object.values(mockTestImages)} />
      <div className="container-block relative mt-2 grid grid-cols-[65%_35%] overflow-hidden max-lg:grid-cols-1">
        <div className="mr-[50px] max-lg:mr-0">
          <PropertySection
            heading="Description"
            secondBlock={{
              heading: "Overview",
              body: (
                <List
                  list={params}
                  ItemList={PropertyOverview}
                  className="grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-3"
                />
              ),
            }}
          >
            <span className="text-sm text-dark/60 dark:text-gray-second">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              laudantium enim atque dolores inventore tempore odio molestias
              nemo minus voluptas omnis, repellendus cumque dolore culpa, natus
              ipsam quis architecto harum.
            </span>
            <span className="mt-3 block cursor-pointer font-medium capitalize underline hover:no-underline">
              view more
            </span>
          </PropertySection>
          <PropertySection heading="Video">
            <Video
              src="/videos/spartak.mp4"
              className="h-[400px] max-md:h-[300px] max-phone:h-[60vw]"
            />
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
              className="grid-cols-3 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-phone:grid-cols-1"
            />
          </PropertySection>
          <PropertySection heading="Map location">
            <Map
              initialMarkerProperties={[mockPropertyCards[0]]}
              className="mb-4 h-[450px] overflow-hidden rounded-3xl max-md:h-[450px]"
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
              body: (
                <List
                  className="grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1"
                  ItemList={FileAttachment}
                  list={[
                    {
                      name: "Villa-Document.pdf",
                      path: "Villa-Document.pdf",
                    },
                    {
                      name: "Villa-Document.doc",
                      path: "Villa-Document.doc",
                    },
                  ]}
                />
              ),
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
                      className="max-h-[400px] max-phone:max-h-[300px]"
                    />
                  ),
                  optional: (
                    <div className="flex flex-wrap items-center gap-3">
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
                      className="max-h-[400px] max-phone:max-h-[300px]"
                    />
                  ),
                  optional: (
                    <div className="flex flex-wrap items-center gap-3">
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
        <Sidebar />
      </div>
    </div>
  );
}
