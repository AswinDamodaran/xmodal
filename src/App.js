import { Button, Modal } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const check = email.split("");
      if (!check.includes("@")) {
        alert("Invalid email");
        return;
      }
    }
    if(mobileNo){
      if(mobileNo.length<11){
        alert("Invalid phone number")
        return
      }
    }
    handleModal();
  };

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <Button onClick={handleModal} variant="contained">
        Open Form
      </Button>
      <Modal open={isOpen} onClose={handleModal} className="modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit} className="forms">
            <label for="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="email">Email Address:</label>
            <input
              id="email"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="phone">Phone Number:</label>
            <input
              id="phone"
              type="text"
              value={mobileNo}
              required
              onChange={(e) => setMobileNo(e.target.value)}
            />
            <Button className="submit-button" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
