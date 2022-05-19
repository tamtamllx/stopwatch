import "./styles.css";
import Clock from "../components/Clock";
import Stopwatch from "../components/Stopwatch";

export default function App() {
  return (
    <div className="App">
      <Clock />
      <h1>Start Game</h1>
      <Stopwatch />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
