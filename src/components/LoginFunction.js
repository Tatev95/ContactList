import React, { useState } from "react";
import { useEffect } from "react";


function LoginFunction() {
    const [time, setTime] = useState(0)

    const timer = setInterval(() => {
        setTime(time + 1)

    }, 1000);
    useEffect(() => {
        return () => {
            console.log('component will unmount')
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="login" style={{ border: '1px solid black', borderRadius: '25px', marginLeft: '20px', backgroundColor: 'chocolate' }}>
            <form>
                <input type="text" placeholder="login" style={{ border: '1px solid black', borderRadius: '25px' }} />
                <input type="text" placeholder="password" style={{ border: '1px solid black', borderRadius: '25px' }} />
                <div> {time}</div>
            </form>
        </div>
    )


}


export default LoginFunction