import { useEffect, useCallback, useRef } from "react";

export const useTimeout = (
  callback: () => void,
  timeout: number = 0
): (() => void) => {
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const cancel = useCallback(() => {
    const timeoutId = timeoutIdRef.current;
    if (timeoutId) {
      timeoutIdRef.current = undefined;
      clearTimeout(timeoutId);
    }
  }, [timeoutIdRef]);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, timeout);
    return cancel;
  }, [callback, timeout, cancel]);

  return cancel;
};

export const useInterval = (
  callback: () => void,
  interval: number = 0
): (() => void) => {
  const intervalIdRef = useRef<NodeJS.Timeout>();
  const cancel = useCallback(() => {
    const timeoutId = intervalIdRef.current;
    if (timeoutId) {
      intervalIdRef.current = undefined;
      clearInterval(timeoutId);
    }
  }, [intervalIdRef]);

  useEffect(() => {
    intervalIdRef.current = setInterval(callback, interval);
    return cancel;
  }, [callback, interval, cancel]);

  return cancel;
};
