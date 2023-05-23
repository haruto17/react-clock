import './Clock.css'
import React, { useEffect ,useState} from "react";

function Clock() {
    
    const [date,setDate] = useState("");
    const [dow, setdow] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const year = now.getFullYear();
            const dayofweek = now.getDay();
            let month = String(now.getMonth() + 1);
            let day = String(now.getDate());
            let hour = String(now.getHours());
            let minute = String(now.getMinutes());

            // 桁が一桁だったら0を先頭に追加する
            if(month.length === 1) {
                month = "0" + month;
            } 
            if (day.length === 1) {
                day = "0" + day;
            }
            if(hour.length === 1) {
                hour = "0" + hour;
            }
            if (minute.length === 1) {
                minute = "0" + minute;
            }

            setDate(`${year}/${month}/${day}`);
            setdow(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][dayofweek])
            setTime(`${hour}:${minute}`);
        },500);
        return () => {
            clearInterval(interval);
        };
    },[]);

    return (
        <div className="Clock">
            <div className='Date'>
                <p>{date}</p>
            </div>
            <div className='DayOfWeek'>
                <p>{dow}</p>
            </div>
            <div className='Time'>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default Clock;