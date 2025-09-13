import { useCallback, useEffect, useState } from "react";

export function useTimer(seconds: number, onExpire: () => void) {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) {
            if (timeLeft <= 0 && isRunning) {
                onExpire();
            }
            return;
        }

        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, onExpire, isRunning]);

    const reset = useCallback(() => {
        setTimeLeft(seconds);
        setIsRunning(true);
    }, [seconds]);

    const stop = useCallback(() => {
        setIsRunning(false);
    }, []);

    return { timeLeft, reset, stop, isRunning };
}