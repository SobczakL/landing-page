import { useEffect, useState } from "react";

export default function useCurrentTime() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        const updateTime = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(updateTime);
    }, []);

    return currentTime ? currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) : null;
}
