import { List } from "@/shared/components/list";
import React from "react";

interface IProps {
  details: { name: string; value: string }[];
}

const Detail = ({ name, value }: IProps["details"][number]) => {
  return (
    <>
      <span className="font-medium">{name}</span>
      <span className="text-sm text-dark/80 dark:text-gray">{value}</span>
    </>
  );
};

export const PropertyDetails = ({ details }: IProps) => {
  const partDetails = Math.ceil(details.length / 2);

  return (
    <div className="grid grid-cols-2 items-start gap-3 max-phone:grid-cols-1">
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-2">
        {details.slice(0, partDetails).map((d) => (
          <Detail key={d.value} name={d.name} value={d.value} />
        ))}
      </div>
      {!!details.slice(partDetails).length && (
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-2">
          {details.slice(partDetails).map((d) => (
            <Detail key={d.value} name={d.name} value={d.value} />
          ))}
        </div>
      )}
    </div>
  );
};
