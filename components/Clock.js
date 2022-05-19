import { useEffect, useState } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new Date(Date.now()).toLocaleTimeString("it-IT")
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date(Date.now()).toLocaleTimeString("it-IT"));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h3>Clock: {currentTime}</h3>
    </div>
  );
}
