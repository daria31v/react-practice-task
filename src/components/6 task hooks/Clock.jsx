
import { useState, useRef, useEffect } from "react"

export const Clock = () => {
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
        console.log('Interval 1000ms' + Date.now());
        setTime(new Date());
        }, 1000);

        return () => {
            console.log('befor useEffect');
            stop();
        };
    }, []);

    const stop = () => {
        clearInterval(intervalId.current);
    };

    
    return (
        <div>
            <button onClick={() => setTime(new Date())}>UPDATE TIME</button>

            <p>Current time: {time.toLocaleTimeString()}</p>
            <button type="button" onClick={stop}>Stop time!</button>
        </div>
    );
}