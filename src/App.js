import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    // this code will prevent the refresh on clicking on submit
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Testing Bro!!</h1>
      <form>
        <FormControl>
          <InputLabel>Enter Message....</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            type="submit"
            disabled={!input}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message, id) => (
        <p key={id}>{message}</p>
      ))}
    </div>
  );
}

export default App;
