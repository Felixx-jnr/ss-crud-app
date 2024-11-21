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
  const [newMail, setNewMail] = useState();

  return (
    <div className="App">
      <h1 className="header">THE WAITLIST</h1>
      <div className="container">
        <div className="add">
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Mail..."
            value={mail}
            onChange={(event) => {
              setMail(event.target.value);
            }}
          />

          <button
            onClick={() => {
              const maxId =
                waitlist.length > 0
                  ? Math.max(...waitlist.map((item) => item.id))
                  : 0;
              dispatch(
                addToWaitlist({
                  id: maxId + 1,
                  name,
                  mail,
                })
              );
              setMail("");
              setName("");
            }}
          >
            Join Waitlist
          </button>
        </div>
        <div className="waitlist-container">
          {waitlist.map((item) => (
            <div
              key={item.id}
              className="waitlist"
            >
              <div className=" waitlist-box">
                <div>
                  <h2>{item.name}</h2>
                  <p> {item.mail} </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(deleteFromWaitlist({ id: item.id }));
                    }}
                  >
                    <img
                      src="/trash_bin_icon-icons.com_67981.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="update">
                <input
                  type="text"
                  placeholder="New mail..."
                  onChange={(event) => {
                    setNewMail(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    dispatch(
                      updateMailOnWaitlist({ id: item.id, mail: newMail })
                    );
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
