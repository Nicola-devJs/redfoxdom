import Image, { StaticImageData } from "next/image";
import { Marker } from "@/shared/ui/marker";

interface IProps {
  date: string;
  img: string | StaticImageData;
  name: string;
  text: string;
}

export const Post = ({ date, img, name, text }: IProps) => {
  return (
    <div className="w-full">
      <div className="relative mb-4 h-[240px] w-full overflow-hidden rounded-xl">
        <Marker items={[["primary", date]]} />
        <Image className="h-full w-full object-cover" src={img} alt={name} />
      </div>
      <div className="mb-1 flex items-center gap-1">
        <span className="text-xs font-medium capitalize text-dark dark:text-white">
          Joremi Belize
        </span>
        <span className="inline-block h-3 w-[2px] bg-gray dark:bg-gray-second"></span>
        <span className="text-xs capitalize text-dark-second dark:text-gray-second">
          Furniture
        </span>
      </div>
      <h4 className="mb-1 line-clamp-2 text-ellipsis text-lg font-semibold capitalize text-dark dark:text-white">
        {name}
      </h4>
      <p className="line-clamp-2 text-ellipsis text-xs text-dark/50 dark:text-gray">
        {text}
      </p>
    </div>
  );
};
