import './App.css';
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import React from 'react';
// import {EuiButton} from '@elastic/eui';
import Camera from 'react-snap-pic';

// this is a Component call App
function App() {
  // useState creates a magic variable
  // here its called "messages"
  // the initial value is an empty array []
  // "setMessages" is a function that is used to update "messages"
  const [messages, setMessages] = useState([]);

  // "setShowCamera" is a function to update "showCamera"
  const [showCamera, setShowCamera] = useState(false);

  function sendMessage(text) {
    // make sure text was typed in, so we don't send in empty bubbles
    if (!text) return;
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

  function takePicture(img) {
    console.log(img);
    setShowCamera(false);
  }

  return (
    <div className="App">
      {showCamera && <Camera takePicture={takePicture} />}
      <header className="header">
        <div className="logo" />
        <span className="title">chatter</span>
        {/* need to style button */}
        {/* <EuiButton 
        color={"accent"} 
        onClick={() => { }} 
        >
          THIS IS A BUTTON!
        </EuiButton> */}
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
          return <Message {...msg} key={i} />;
        })}
      </div>
      {/* unsure about why the following line doesn't work when i used 'sendMessage={text=> props.onSend(text)}' over 'sendMessage={sendMessage}' */}
      <TextInput sendMessage={sendMessage}
        showCamera={() => setShowCamera(true)}
      />
    </div>
  );
}

export default App;