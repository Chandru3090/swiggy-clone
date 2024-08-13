import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState('Online');
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus('Offline');
        });

        window.addEventListener("online", () => {
            setOnlineStatus('Online');
        });
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;