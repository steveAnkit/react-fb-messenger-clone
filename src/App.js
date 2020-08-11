import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  const sendMessage = (event) => {
    // this code will prevent the refresh on clicking on submit
    event.preventDefault();
    setMessages([...messages, { userName: userName, text: input }]);
    setInput("");
  };

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const messagesList = messages.map((content, id) => {
    return <Message message={content} loggedIn={userName} key={id} />;
  });

  return (
    <div className="App">
      <h1>Welcome {userName}</h1>
      <form>
        <FormControl>
          <InputLabel>Type a message </InputLabel>
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

      {messagesList}
    </div>
  );
}

export default App;
