import { cn } from "@/shared/helpers/cn";
import { ContentSubstrate } from "@/shared/ui";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export const FormBody = ({ children, className, title }: IProps) => {
  return (
    <ContentSubstrate title={title}>
      <div className={cn("flex flex-col gap-y-5", className)}>{children}</div>
    </ContentSubstrate>
  );
};
