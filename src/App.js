import { Button, Modal } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username,setUsername]=useState("")
  const [mobileNo,setMobileNo]=useState("")



  const handleModal=()=>{
    setIsOpen(prev=> !prev)
  }

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <Button onClick={handleModal} variant="contained">Open Form</Button>
      <Modal open={isOpen} className="modal">
        <div className="modal-content">
          <form className="forms" >
            <label for="username" >Username:</label>
            <input id="username" type="text" value={username} />
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
