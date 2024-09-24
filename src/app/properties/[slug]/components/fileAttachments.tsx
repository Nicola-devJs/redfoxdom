import React from "react";
import { DownloadIcon } from "../icons/download";
import pdfFile from "../icons/files/pdf.png";
import docFile from "../icons/files/doc.png";
import { NextImage } from "@/shared/components/NextImage";

export const FileAttachments = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-2">
      <div>
        <a
          href="#"
          download="Villa-Document.pdf"
          className="inline-flex items-center gap-2"
        >
          <div className="flex size-[60px] items-center justify-center rounded-lg bg-light-second">
            <NextImage src={pdfFile} className="size-10" variant="contain" />
          </div>
          <span className="text-sm">Villa-Document.pdf</span>
          <DownloadIcon className="size-6 fill-dark/80" />
        </a>
      </div>
      <div>
        <a
          href="#"
          download="Villa-Document.doc"
          className="inline-flex items-center gap-2"
        >
          <div className="flex size-[60px] items-center justify-center rounded-lg bg-light-second">
            <NextImage src={docFile} className="size-10" variant="contain" />
          </div>
          <span className="text-sm">Villa-Document.doc</span>
          <DownloadIcon className="size-6 fill-dark/80" />
        </a>
      </div>
    </div>
  );
};
