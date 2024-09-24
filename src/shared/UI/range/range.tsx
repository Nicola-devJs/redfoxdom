"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./style.css";
import { cn } from "@/shared/utils/cn";

interface IProps {
  min: number;
  max: number;
}

const min = 0;
const max = 10000;
const quotStep = 0.01;

export const RangeApp = () => {
  const inputFirstRef = useRef<HTMLInputElement>(null);
  const inputSecondRef = useRef<HTMLInputElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const priceGap = 1000;

  const changeValuesRange = (className: string) => {
    if (
      !inputFirstRef.current ||
      !inputSecondRef.current ||
      !progressRef.current
    ) {
      return;
    }

    let minVal = parseInt(inputFirstRef.current.value),
      maxVal = parseInt(inputSecondRef.current.value);

    if (maxVal - minVal < priceGap) {
      if (className === "range-min") {
        inputFirstRef.current.value = (maxVal - priceGap).toString();
      } else {
        inputSecondRef.current.value = (minVal + priceGap).toString();
      }
    } else {
      progressRef.current.style.left =
        (minVal / +inputFirstRef.current.max) * 100 + "%";
      progressRef.current.style.right =
        100 - (maxVal / +inputSecondRef.current.max) * 100 + "%";
    }
  };

  const handleRangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    changeValuesRange(e.target.className);
  };

  return (
    <div>
      <span className="mb-2 inline-block font-medium">
        Price: ${inputFirstRef.current?.value} - $
        {inputSecondRef.current?.value}
      </span>
      <div className="relative h-1 rounded-sm bg-light">
        <div
          ref={progressRef}
          className={cn("absolute h-full rounded-sm bg-primary")}
        ></div>
      </div>
      <div className="relative">
        <input
          type="range"
          className="range-min"
          min={min}
          max={max}
          value={inputFirstRef.current?.value}
          step={max * quotStep}
          ref={inputFirstRef}
          onChange={handleRangeInput}
        />
        <input
          type="range"
          className="range-max"
          min={min}
          max={max}
          value={inputSecondRef.current?.value}
          step={max * quotStep}
          ref={inputSecondRef}
          onChange={handleRangeInput}
        />
      </div>
    </div>
  );
};
