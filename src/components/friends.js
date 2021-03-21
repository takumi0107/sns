import React from 'react';
import '../css/friends.css';
import history from '../history'

export default function Friends() {
    return(
        <div className="container">
            <div className="bar">
                 <text className="back" onClick={() => history.push('/home')}>← Home</text>
            <text className="barTitle">
                Friends
            </text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
            <div className="list">
            <text className="friend">go</text>
            </div>
        </div>
    )
}