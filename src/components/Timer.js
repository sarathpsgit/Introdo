// src/components/Timer.js

import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import styles if needed

const Timer = () => {
    const [time, setTime] = useState(new Date());
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now);

            const startTime = new Date(now);
            startTime.setHours(14, 0, 0, 0); // 14:00

            const endTime = new Date(now);
            endTime.setHours(14, 59, 59, 999); // 14:59

            if (now >= startTime && now <= endTime) {
                const totalDuration = endTime - startTime;
                const elapsedDuration = now - startTime;
                const percentage = Math.min(100, (elapsedDuration / totalDuration) * 100);
                setProgress(percentage);
            } else if (now > endTime) {
                setProgress(80);
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <div className='timer'>
            <div className='timerlabel'>Hours Worked</div>
            <div className='time'>{formatTime(time)} Hours</div>
            <div className='progress-wrapper'>
                <div className='progress-bar' style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default Timer;
