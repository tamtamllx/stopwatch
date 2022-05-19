import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    // const intervalSecId = setInterval(() => {
    //   setSeconds((seconds) => seconds+1);
    // }, 1000);
    // const intervalMilliSecId = setInterval(() => {
    //   setMilliseconds((milliseconds) => milliseconds+1);
    // }, 1);
    // return () => {
    //   clearInterval(intervalSecId, intervalMilliSecId);
    // };
  }, []);
  function handleReset() {
    setSeconds(0);
    setMilliseconds(0);
  }
  return (
    <div>
      <div>Seconds: {seconds}</div>
      <div>Milliseconds: {milliseconds}</div>
      <Button variant="contained" onClick={() => setStarted(!started)}>
        {started ? "pause" : "start"}
      </Button>
      <Button variant="contained" onClick={() => handleReset()}>
        reset
      </Button>
    </div>
  );
}
