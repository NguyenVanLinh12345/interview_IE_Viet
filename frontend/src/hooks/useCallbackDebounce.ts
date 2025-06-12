import { useCallback, useRef } from "react";

export const useCallbackDebounce = (callback: (...args: any) => void | Promise<void>, delay: number = 500): {
    debouncedCallback: (...args: any) => Promise<void> | void
} => {
    const timeoutId = useRef<any>();

    const debouncedCallback = useCallback(async (...args: any) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(async () => {
            await callback(...args);
        }, delay);
    }, [callback, delay]);

    return { debouncedCallback };
}