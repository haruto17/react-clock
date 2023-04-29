import './Clock.css'
import React, { useEffect ,useState} from "react";

function Clock() {
    
    const [date,setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const year = now.getFullYear();
            let month = String(now.getMonth() + 1);
            let day = String(now.getDate());
            const hour = now.getHours();
            const minute = now.getMinutes();

            // 月と日が一桁だったら0を先頭に追加する
            if(month.length === 1) {
                month = "0" + month;
            } else if (day.length === 1) {
                day = "0" + day;
            }

            setDate(`${year}/${month}/${day}`);
            setTime(`${hour}:${minute}`);
        },500);
        return () => {
            clearInterval(interval);
        };
    },[]);

    return (
        <div className="Clock">
            <p>{date}</p>
            <p>{time}</p>
        </div>
    )
}

export default Clock;