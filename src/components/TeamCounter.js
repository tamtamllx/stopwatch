import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  scoreButton: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#9575cd",
    color: "white",
    "&:hover": {
      backgroundColor: "#b39ddb"
    }
  },
  title: {
    marginTop: "40px"
  }
});

export default function TeamCounter(props) {
  const classes = useStyles(props);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h3 className={classes.title}>Team {props.team}</h3>
      <div>{score}</div>
      <Button
        className={classes.scoreButton}
        variant="contained"
        onClick={() => setScore(score + 1)}
      >
        + team {props.team} score
      </Button>
    </div>
  );
}
