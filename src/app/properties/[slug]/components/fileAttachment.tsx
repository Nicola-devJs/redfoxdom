import React from "react";
import { DownloadIcon } from "../icons/download";
import pdfFile from "../icons/files/pdf.png";
import docFile from "../icons/files/doc.png";
import txtFile from "../icons/files/txt.png";
import { NextImage } from "@/shared/components/NextImage";

interface IProps {
  name: string;
  path: string;
}

export const FileAttachment = ({ name, path }: IProps) => {
  const fileExt = path.split(".").at(-1);
  const iconFile =
    fileExt === "pdf" ? pdfFile : fileExt === "doc" ? docFile : txtFile;

  return (
    <div>
      <a href={path} download={name} className="inline-flex items-center gap-2">
        <div className="flex size-[60px] items-center justify-center rounded-lg bg-light-second dark:bg-dark-second">
          <NextImage src={iconFile} className="size-10" variant="contain" />
        </div>
        <span className="text-sm">{name}</span>
        <DownloadIcon className="size-6 fill-dark/80 dark:fill-gray" />
      </a>
    </div>
  );
};
