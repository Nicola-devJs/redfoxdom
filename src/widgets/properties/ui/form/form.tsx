"use client";
import React from "react";
import {
  Button,
  ControlledInput,
  Input,
  ControlledTextarea,
  ControlledUpload,
} from "@/shared/ui/index";
import { FormAmenities, FormBody, FormFloor, FormLocation } from "./ui";
import { useForm } from "react-hook-form";
import { PropertyFormFields, schema } from "../../model/config";
import { zodResolver } from "@hookform/resolvers/zod";

export const PropertyForm = () => {
  const { control, handleSubmit } = useForm<PropertyFormFields>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: PropertyFormFields) => {};

  return (
    <form className="flex flex-col gap-y-5">
      <FormBody title="Upload media">
        <ControlledUpload
          control={control}
          buttonText="Select photos"
          id="photos"
          name="photos"
          multiple
        />
      </FormBody>

      <FormBody title="Information">
        <ControlledInput
          control={control}
          name="title"
          label="Title"
          required
          id="title"
        />

        <ControlledTextarea
          control={control}
          name="description"
          label="Description"
          id="descriptrion"
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
          {/* <ControlledSelect
            label="Country"
            required
            options={[{ value: "country", label: "mock country" }]}
            name=""
            id="country"
            className="z-[2]"
            control={control}
          /> */}
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
      <div className="flex justify-center gap-4">
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="px-[60px]"
        >
          Save
        </Button>
      </div>
    </form>
  );
};
