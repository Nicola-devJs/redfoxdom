import React from "react";
import { Form, Input, Select, Textarea, Upload } from "@/shared/ui/index";
import { propertyCreateAction } from "../../model/actions/propertyCreateAction";
import { FormAmenities, FormBody, FormFloor, FormLocation } from "./ui";

export const PropertyForm = () => {
  return (
    <Form serverAction={propertyCreateAction} className="flex flex-col gap-y-5">
      <FormBody title="Upload media">
        <Upload buttonText="Select photos" multiple />
      </FormBody>

      <FormBody title="Information">
        <Input label="Title" required id="title" name="title" />
        <Textarea
          label="Description"
          id="descriptrion"
          name="description"
          className="h-[120px]"
          placeholder="Description property..."
        />
        <div className="grid grid-cols-3 items-end gap-5">
          <Input
            label="Full address"
            required
            id="address"
            name="full_address"
          />
          <Input label="Zip code" required id="code" name="zip_code" />
          <Select
            label="Country"
            required
            options={[{ value: "country", label: "mock country" }]}
            name="country"
            id="country"
            className="z-[2]"
          />
        </div>

        <FormLocation />
      </FormBody>

      <FormBody title="Price">
        <Input label="Price" required type="number" id="price" name="price" />
      </FormBody>

      <FormBody title="Addtional Information">
        <div className="grid grid-cols-3 gap-5">
          <Input
            label="Size (SqFt)"
            required
            type="number"
            id="sqft"
            name="sqft"
          />

          <Input label="Rooms" required type="number" id="rooms" name="rooms" />
        </div>
      </FormBody>

      <FormBody title="Amenities">
        <FormAmenities
          amenitiesData={[
            {
              name: "Bedroom",
              items: [{ label: "Handgers", name: "handgers" }],
            },
          ]}
        />
      </FormBody>
      <FormBody title="Floors">
        <FormFloor />
      </FormBody>
    </Form>
  );
};
