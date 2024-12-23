import { useCallback, useRef } from "react";

export const useDebounce = <T>(
  callback: (...args: T[]) => void,
  delay = 300,
): ((...args: T[]) => void) => {
  const timer = useRef<NodeJS.Timeout>();

  const debounceHandler = useCallback((...args: T[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  }, []);

  return debounceHandler;
};
