// src/components/CountdownTimer.js
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import moment from 'moment';
import '../assets/css/countDown.css'

const CountdownTimer = ({ startDate, endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  function calculateTimeRemaining() {
    const now = moment();
    const endTime = moment(endDate);
    const startTime = moment(startDate);

    if (now.isBefore(startTime)) {
      return startTime.diff(now, 'seconds');
    } else {
      return endTime.diff(now, 'seconds');
    }
  }

  return (
    <Countdown
      date={Date.now() + timeRemaining * 1000}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className='flex-wrapper-count'>
          <div className="count-set"><span className='countNum'>{days}</span> <span className='countName'>Days</span></div>
          <div className="count-set"><span className='countNum'>{hours}</span> <span className='countName'>Hours</span></div>
          <div className="count-set"><span className='countNum'>{minutes}</span> <span className='countName'>Min</span></div>
          <div className="count-set"><span className='countNum'>{seconds}</span> <span className='countName'>Sec</span></div>
        </div>
      )}
    />
  );
};

export default CountdownTimer;
