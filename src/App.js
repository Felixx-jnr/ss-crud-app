import { useSelector, useDispatch } from "react-redux";
import {
  addToWaitlist,
  deleteFromWaitlist,
  updateMailOnWaitlist,
} from "./redux/Waitlist";
import { useState } from "react";
import "./App.css";

function App() {
  const waitlist = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [newMail, setNewMail] = useState("");

  return (
    <div className="App">
      {waitlist.map((item) => (
        <div key={item.id}>
          <div>
            <h1>{item.name}</h1>
            <p> {item.mail} </p>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(deleteFromWaitlist({ id: item.id }));
              }}
            >
              Delete
            </button>

            <div>
              <input
                type="text"
                placeholder="New mail..."
                onChange={(event) => {
                  setNewMail(event.target.value);
                }}
              />
              <button
                onClick={() =>
                  dispatch(updateMailOnWaitlist({ id: item.id, mail: newMail }))
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="add">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Mail..."
          onChange={(event) => {
            setMail(event.target.value);
          }}
        />

        <button
          onClick={() => {
            dispatch(
              addToWaitlist({
                id: waitlist[waitlist.length - 1].id + 1,
                name,
                mail,
              })
            );
          }}
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
}

export default App;
