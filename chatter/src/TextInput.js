import React from 'react';
import "./TextInput.css";
import { useState } from "react";

function TextInput(props) {
    const [text, setText] = useState("");

    // send message and reset text input
    function send() {
        props.sendMessage(text);
        setText("");    // resets text input
    }

    // if user hits 'enter' key, send message
    function onKeyPress(e) {
        if (e.key === "Enter") {
            send();
        }
    }

    return (
        <footer className="footer">
            <input
                className="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onKeyPress}
            />
            <button className="send" onClick={send}>
                ➤
            </button>
        </footer>
    );
}

export default TextInput;