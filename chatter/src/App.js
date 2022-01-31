import './App.css';
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]);

  function sendMessage(text) {
    // message details
    const newMessage = {
      text,
      time: Date.now(),
      user: "Annie"
    };
    // add new message to beginning of array
    setMessages([newMessage, ...messages]);
  }
  // log messages array in console to keep track
  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">chatter</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;