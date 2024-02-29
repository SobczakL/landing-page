import { useEffect, useState } from "react"

export default function useCurrentTime() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateTime = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(updateTime);
    }, [])

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    return formattedTime;
}
