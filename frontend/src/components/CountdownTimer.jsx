import React, { useState, useEffect } from "react";

const CountdownTimer = ({ duration, setWinner, currentBet, setBalance }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const getRoll = async () => {
      const response = await fetch("https://mongodb-starter-one-gamma.vercel.app/api/roll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentBet),
      });
      const { winner, balance } = await response.json();
      setWinner(winner);
      setBalance(balance);
    };
    if (timeLeft <= 0){
      getRoll();
    }
  }, [timeLeft]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft >= 0) {
        setTimeLeft(timeLeft - 10);
        setProgress((timeLeft / duration) * 100);
      } else {
        clearInterval(intervalId);
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, [timeLeft, duration]);

  return (
    <div>
      <div className="w-full p-2 h-[50px] bg-[#343B4A] rounded relative overflow-hidden">
        <div className="relative h-full w-full text-center overflow-hidden">
          <div
            className={`h-full bg-[#E6504B] rounded absolute left-0`}
            style={{ width: `${progress}%` }}
          />
          <div className="w-full h-full text-center py-1 text-sm absolute z-60">
            Rolling in {Math.max(timeLeft / 1000, 0).toFixed(2)} ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
