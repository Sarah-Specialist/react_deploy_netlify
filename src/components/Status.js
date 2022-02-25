import { useState, useEffect } from "react"

export default function Status() {
    const [status, setStatus] = useState("Processing...");

    useEffect(() => {
        setTimeout(()=> {
            setStatus("On the way");
        }, 3000);
        return () => clearTimeout();
    }, []);

    return <span>{status}</span>
}
