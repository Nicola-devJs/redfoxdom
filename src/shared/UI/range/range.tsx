"use client";
import React, { useState } from "react";
import "./style.css";
import { cn } from "@/shared/utils/cn";

interface IProps {
  max: number;
  rangeInfo: string;
  prefixRange?: string;
  postfixRange?: string;
  initialRange?: { min: number; max: number };
  className?: string;
}

export const InputRange = ({
  max,
  rangeInfo,
  postfixRange,
  prefixRange,
  initialRange,
  className,
}: IProps) => {
  const min = 0;
  const { initMin, initMax } = getInitialRange(
    initialRange?.min ?? min,
    initialRange?.max ?? max,
  );
  const [minRange, setMinRange] = useState(initMin);
  const [maxRange, setMaxRange] = useState(initMax);
  const gapRange = max * 0.1;
  const step = max * 0.01;

  function getInitialRange(initialMinRange: number, initialMaxRange: number) {
    const gapInitRange = max * 0.1;
    const initMin =
      initialMinRange < min || initialMinRange >= max ? min : initialMinRange;
    const initMax =
      initialMaxRange > max || initialMaxRange <= min ? max : initialMaxRange;

    if (initMin > initMax) {
      return {
        initMin: initMin,
        initMax: initMin + gapInitRange,
      };
    }
    if (initMax - initMin < gapInitRange) {
      return {
        initMin: initMin,
        initMax: initMin + gapInitRange,
      };
    }

    return { initMin, initMax };
  }

  const changeValuesRange = (className: string, value: number) => {
    let minVal = minRange;
    let maxVal = maxRange;

    if (className === "range-min") {
      minVal = value;
      if (maxVal - minVal < gapRange) {
        minVal = maxVal - gapRange;
      }
      setMinRange(minVal);
    } else {
      maxVal = value;
      if (maxVal - minVal < gapRange) {
        maxVal = minVal + gapRange;
      }
      setMaxRange(maxVal);
    }
  };

  const handleRangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    changeValuesRange(e.target.className, value);
  };

  const getProcentLeft = (range: number) => (range / max) * 100 + "%";
  const getProcentRight = (range: number) => 100 - (range / max) * 100 + "%";

  return (
    <div className={cn("w-full", className)}>
      <span className="mb-2 inline-block font-medium">
        {rangeInfo}: {prefixRange}
        {minRange}
        {postfixRange} - {prefixRange}
        {maxRange}
        {postfixRange}
      </span>
      <div className="relative h-1 rounded-sm bg-light dark:bg-gray-second">
        <div
          className={cn("absolute h-full rounded-sm bg-primary")}
          style={{
            left: getProcentLeft(minRange),
            right: getProcentRight(maxRange),
          }}
        ></div>
      </div>
      <div className="relative">
        <input
          type="range"
          className="range-min"
          min={min}
          max={max}
          value={minRange}
          step={step}
          onChange={handleRangeInput}
        />
        <input
          type="range"
          className="range-max"
          min={min}
          max={max}
          value={maxRange}
          step={step}
          onChange={handleRangeInput}
        />
      </div>
    </div>
  );
};
