import React, { DragEvent, useState } from "react";
import { UploadImgType } from "../model/types";
import { UploadImageItem } from "./uploadImageItem";

interface IProps {
  listImages: UploadImgType[];
  setListImages: (images: UploadImgType[]) => void;
  onDeleteImg: (img: UploadImgType) => void;
}

export const UploadImagesList = ({
  listImages,
  onDeleteImg,
  setListImages,
}: IProps) => {
  const [currentDragImg, setCurrentDragImg] = useState<UploadImgType | null>(
    null,
  );
  const handleDragStart = (
    e: DragEvent<HTMLDivElement>,
    img: UploadImgType,
  ) => {
    setCurrentDragImg(img);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("overlay-drag");
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("overlay-drag");
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, img: UploadImgType) => {
    e.preventDefault();
    e.currentTarget.classList.remove("overlay-drag");

    const sortedListImages = listImages
      .map((itemImg) => {
        if (!currentDragImg) {
          return itemImg;
        }
        if (itemImg.id === img.id) {
          return { ...itemImg, order: currentDragImg.order };
        }
        if (itemImg.id === currentDragImg.id) {
          return { ...itemImg, order: img.order };
        }

        return itemImg;
      })
      .sort(sortListImages);

    setListImages(sortedListImages);
  };

  const sortListImages = (imgA: UploadImgType, imgB: UploadImgType) =>
    imgA.order > imgB.order ? 1 : -1;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
      {listImages.map((img, id) => (
        <UploadImageItem
          onDragStart={(e) => handleDragStart(e, img)}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, img)}
          index={id}
          onDelete={() => onDeleteImg(img)}
          imgUrl={img.url}
          name={img.file.name}
          key={img.id}
        />
      ))}
    </div>
  );
};
