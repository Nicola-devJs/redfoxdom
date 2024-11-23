import { ArrowRightIcon } from "@/shared/icons/arrowRight";
import Link from "next/link";

interface IProps {
  ComponentIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  learnMoreHref?: string;
}

export const BenifitDesctiptionItem = ({
  ComponentIcon,
  text,
  title,
  learnMoreHref,
}: IProps) => {
  return (
    <div className="flex w-full rounded-xl bg-white p-6 dark:bg-dark">
      <ComponentIcon className="min-h-12 min-w-12 fill-primary" />
      <div className="ml-6">
        <h4 className="mb-2 text-xl font-semibold capitalize">{title}</h4>
        <span className="mb-2 block text-sm text-dark/60 dark:text-gray-second">
          {text}
        </span>
        <Link href={learnMoreHref || "#"} className="flex items-center gap-2">
          <span className="font-medium capitalize">learn more</span>
          <ArrowRightIcon className="size-4 fill-primary" />
        </Link>
      </div>
    </div>
  );
};
