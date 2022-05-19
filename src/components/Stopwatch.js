import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  startButton: {
    marginTop: "15px",
    marginRight: "7px",
    backgroundColor: "#81c784",
    "&:hover": {
      backgroundColor: "#a5d6a7"
    }
  },
  resetButton: {
    marginTop: "15px",
    marginLeft: "7px",
    backgroundColor: "#e57373",
    "&:hover": {
      backgroundColor: "#ef9a9a"
    }
  }
});

export default function Stopwatch(props) {
  const classes = useStyles(props);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let intervalSecId;
    let intervalMilliSecId;
    if (started) {
      intervalSecId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      intervalMilliSecId = setInterval(() => {
        setMilliseconds((milliseconds) => milliseconds + 5);
      }, 5);
    }
    return () => {
      clearInterval(intervalSecId);
      clearInterval(intervalMilliSecId);
    };
  }, [started]);

  function handleReset() {
    setSeconds(0);
    setMilliseconds(0);
  }

  return (
    <div>
      <div>Seconds: {seconds}</div>
      <div>Milliseconds: {milliseconds}</div>
      <Button
        className={classes.startButton}
        variant="contained"
        onClick={() => setStarted(!started)}
      >
        {started ? "pause" : "start"}
      </Button>
      <Button
        className={classes.resetButton}
        variant="contained"
        onClick={() => handleReset()}
      >
        reset
      </Button>
    </div>
  );
}
