import React from 'react';
import '../css/chat.css'

export default function Chat() {
    return(
        <div className="container">
            <div className="bar">
            <text className="barTitle">
                Chat
            </text>
            <text className="back">← Friends</text>
            </div>
            <div className="chatBox">
             <div className="friendsMessage">
                 <text>hello</text>
             </div>
             <div className="myMessage">
                 <text>woo</text>
             </div>
             <div className="sendContainer">
                <input className="input"/>
                <button className="send">Send</button>
             </div>
            </div>
        </div>
    )
}