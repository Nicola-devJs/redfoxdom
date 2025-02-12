import { ComponentType, InputHTMLAttributes } from "react";

export type UploadImgType = {
  url: string;
  file: File | null;
  fileName: string;
  order: number;
  id: string;
};

export interface UploadProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  className?: string;
  buttonText?: string;
  buttonIcon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  images?: UploadImgType[];
  onChangeImages: (value: UploadImgType[]) => void;
  errorMessage?: string;
}
