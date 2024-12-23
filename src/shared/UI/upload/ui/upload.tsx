"use client";
import React, {
  ComponentType,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "@/shared/ui";
import { CopyIcon } from "@/shared/icons";
import { cn } from "@/shared/helpers/cn";
import { UploadImagesList } from "./uploadImagesList";
import { UploadImgType } from "../model/types";
import "../assets/upload.style.css";
import { UploadImageItem } from "./uploadImageItem";
import { generateUUID } from "@/shared/helpers/generateUUID";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  buttonText?: string;
  buttonIcon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
}

export const Upload = ({
  className,
  buttonIcon,
  buttonText = "Choose file",
  label,
  ...props
}: IProps) => {
  const ButtonIconComponent = buttonIcon || CopyIcon;
  const [uploadImages, setUploadImages] = useState<UploadImgType[]>([]);
  const uploadImageRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const limitExceededImages = uploadImages.length >= 10;
  const uploadOneImage = uploadImages[0] as UploadImgType | undefined;

  const handlePreparedOneFile = (files: FileList) => {
    const currentFile = files[0];

    if (!currentFile) {
      return;
    }

    const preparedImage: UploadImgType = {
      file: currentFile,
      id: generateUUID(),
      order: 1,
      url: URL.createObjectURL(currentFile),
    };

    setUploadImages([preparedImage]);
  };

  const handlePreparedManyFiles = (files: FileList) => {
    if (limitExceededImages) {
      return;
    }

    const nameUploadImages = uploadImages.map((img) => img.file.name);

    const preparedImages = Array.from(files)
      .filter((file) => !nameUploadImages.includes(file.name))
      .map((file) => ({
        url: URL.createObjectURL(file),
        file,
        id: generateUUID(),
      }));

    const newUploadImages = [...uploadImages, ...preparedImages]
      .slice(0, 10)
      .map((img, id) => ({ ...img, order: id + 1 }));

    setUploadImages(newUploadImages);
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
    const clearedUrlImages = uploadImages.filter(
      (img) => img.id !== deleteImg.id,
    );
    URL.revokeObjectURL(deleteImg.url);
    setUploadImages(clearedUrlImages);
  };

  useEffect(() => {
    return () => {
      uploadImages.forEach((img) => URL.revokeObjectURL(img.url));
    };
  }, []);

  return (
    <div>
      {label && (
        <label
          htmlFor={props.id}
          className="mb-2 inline-block text-sm font-semibold capitalize"
        >
          {label}
        </label>
      )}
      <div
        ref={dropZoneRef}
        className={cn(
          "flex h-[280px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray dark:border-gray-second",
          { "mb-3": Boolean(uploadImages.length) },
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
              {uploadImages.length > 0
                ? `(${uploadImages.length} to 10 photos)`
                : "(Up to 10 photos)"}
            </span>
          </>
        ) : (
          <span className="text-sm font-normal">or drag file here</span>
        )}
      </div>
      {props.multiple ? (
        <UploadImagesList
          listImages={uploadImages}
          setListImages={setUploadImages}
          onDeleteImg={handleDeleteUploadImage}
        />
      ) : (
        uploadOneImage && (
          <UploadImageItem
            imgUrl={uploadOneImage.url}
            onDelete={() => handleDeleteUploadImage(uploadOneImage)}
            name={uploadOneImage.file.name}
            className="w-[100%] max-w-[240px]"
          />
        )
      )}
    </div>
  );
};
