import "./styles.css";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";
import TeamCounter from "./components/TeamCounter";

export default function App() {
  return (
    <div className="App">
      <Clock />
      <h1>Start Game</h1>
      <Stopwatch />
      <TeamCounter team="A" />
      <TeamCounter team="B" />
    </div>
  );
}
