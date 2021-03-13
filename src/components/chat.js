import React from 'react';
import '../css/chat.css'
import { Link } from 'react-router-dom';

export default function Chat() {
    return(
        <div className="container">
            <div className="bar">
            <text className="barTitle">
                Chat
            </text>
           <Link to="friends">
            <text className="back">← Friends</text>
            </Link>
            </div>
        </div>
    )
}