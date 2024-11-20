import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const waitlist = useSelector((state) => state.users.value);
  return (
    <div className="App">
      {waitlist.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p> {item.mail} </p>
        </div>
      ))}
    </div>
  );
}

export default App;
