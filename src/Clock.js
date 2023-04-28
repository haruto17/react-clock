import React from "react";

function Clock() {

    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();

    return (
        <div>
            <p>{hour} : {minute}</p>
        </div>
    )
}

export default Clock;