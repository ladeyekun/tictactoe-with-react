import { useEffect, useState } from "react";

export function useTime(seconds: number, onExpire: () => void) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        if (timeLeft <= 0) {
            onExpire();
            return
        }

        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, onExpire]);

    return timeLeft;
}