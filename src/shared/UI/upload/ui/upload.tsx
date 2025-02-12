"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Button, ErrorMessageField } from "@/shared/ui";
import { CopyIcon } from "@/shared/icons";
import { cn } from "@/shared/helpers/cn";
import { UploadImagesList } from "./uploadImagesList";
import { UploadImgType, UploadProps } from "../model/types";
import "../assets/upload.style.css";
import { UploadImageItem } from "./uploadImageItem";
import { generateUUID } from "@/shared/helpers/generateIDs";
import { Label } from "../../label";

export const Upload = forwardRef<HTMLInputElement, UploadProps>(
  (
    {
      className,
      buttonIcon,
      buttonText = "Choose file",
      label,
      images = [],
      onChangeImages,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const ButtonIconComponent = buttonIcon || CopyIcon;
    const uploadImageRef = useRef<HTMLInputElement>(null);
    const dropZoneRef = useRef<HTMLDivElement>(null);
    const limitExceededImages = images.length >= 10;
    const uploadOneImage = images[0] as UploadImgType | undefined;

    const handlePreparedOneFile = (files: FileList) => {
      const currentFile = files[0];

      if (!currentFile) {
        return;
      }

      const preparedImage: UploadImgType = {
        fileName: currentFile.name,
        file: currentFile,
        id: generateUUID(),
        order: 1,
        url: URL.createObjectURL(currentFile),
      };

      onChangeImages([preparedImage]);
    };

    const handlePreparedManyFiles = (files: FileList) => {
      if (limitExceededImages) {
        return;
      }

      const preparedImages: Omit<UploadImgType, "order">[] = Array.from(
        files,
      ).map((file) => ({
        url: URL.createObjectURL(file),
        file,
        fileName: file.name,
        id: generateUUID(),
      }));

      const newUploadImages = [...images, ...preparedImages]
        .slice(0, 10)
        .map((img, id) => ({ ...img, order: id + 1 }));

      onChangeImages(newUploadImages);
    };

    const changeUploadImages = (files: FileList) => {
      if (!props.multiple) {
        handlePreparedOneFile(files);
      } else {
        handlePreparedManyFiles(files);
      }
    };

    const handleUploadImages: React.ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      if (event.target.files) {
        changeUploadImages(event.target.files);
      }
    };

    const handleDropZoneForUploadImages: React.DragEventHandler<
      HTMLDivElement
    > = (e) => {
      e.preventDefault();
      e.stopPropagation();

      changeUploadImages(e.dataTransfer.files);
      dropZoneRef.current?.classList.remove("drop-zone-active");
    };

    const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      if (!limitExceededImages) {
        dropZoneRef.current?.classList.add("drop-zone-active");
      }
    };

    const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      dropZoneRef.current?.classList.remove("drop-zone-active");
    };

    const handleDeleteUploadImage = (deleteImg: UploadImgType) => {
      const clearedUrlImages = images.filter((img) => img.id !== deleteImg.id);
      URL.revokeObjectURL(deleteImg.url);
      onChangeImages(clearedUrlImages);
    };

    useEffect(() => {
      return () => {
        images.forEach((img) => URL.revokeObjectURL(img.url));
      };
    }, []);

    return (
      <div className="relative">
        {label && <Label label={label} htmlFor={props.id} />}
        <div
          ref={dropZoneRef}
          className={cn(
            "flex h-[280px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray dark:border-gray-second",
            { "mb-3": Boolean(images.length) },
            className,
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropZoneForUploadImages}
        >
          <Button
            className="mb-3 px-8 py-3 font-medium"
            onClick={() => uploadImageRef.current?.click()}
            disabled={limitExceededImages}
            type="button"
          >
            <input
              ref={uploadImageRef}
              type="file"
              accept=".png,.jpeg,.jpg,.webp"
              className="hidden"
              onChange={handleUploadImages}
              {...props}
            />
            <ButtonIconComponent
              className={cn({ "fill-white/80": limitExceededImages })}
            />{" "}
            {buttonText}
          </Button>
          {props.multiple ? (
            <>
              <span className="text-sm font-normal">or drag photos here</span>
              <span className="text-sm font-normal text-gray-second">
                {images.length > 0
                  ? `(${images.length} to 10 photos)`
                  : "(Up to 10 photos)"}
              </span>
            </>
          ) : (
            <span className="text-sm font-normal">or drag file here</span>
          )}
        </div>
        {props.multiple ? (
          <UploadImagesList
            listImages={images}
            setListImages={onChangeImages}
            onDeleteImg={handleDeleteUploadImage}
          />
        ) : (
          uploadOneImage && (
            <UploadImageItem
              imgUrl={uploadOneImage.url}
              onDelete={() => handleDeleteUploadImage(uploadOneImage)}
              name={uploadOneImage.fileName}
              className="w-[100%] max-w-[240px]"
            />
          )
        )}
        {errorMessage && <ErrorMessageField errorMessage={errorMessage} />}
      </div>
    );
  },
);
