import './Clock.css'
import React, { useEffect ,useState} from "react";

function Clock() {
    
    const [msg, setMsg] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            const hour = time.getHours();
            const minute = time.getMinutes();
            setMsg(`${hour}:${minute}`);
        },500);
        return () => {
            clearInterval(interval);
        };
    },[]);

    return (
        <div className="Clock">
            <p>{msg}</p>
        </div>
    )
}

export default Clock;