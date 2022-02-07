import React from "react";
import "./NamePicker.css";
import { useState } from "react";
import { FiEdit } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState("Set Username");

    // set name and reset text input
    function set() {
        props.updateName(name);
        setEditName(false);
    }

    // if user hits 'enter' key, submit name
    function onKeyPress(e) {
        if (e.key === "Enter") {
            set();
        }
    }

    if (editName) {
        return <div className="NamePicker">
            <input
                className="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={onKeyPress}
            />
            <button className="send" onClick={set}>
                <FiCheck />
            </button>
        </div>
    } else {
        return <div className="NamePicker">
            <div className="name">
                {name}
            </div>
            <button className="send" onClick={() => setEditName(true)}>
                <FiEdit />
            </button>
        </div>
    }
}


export default NamePicker;