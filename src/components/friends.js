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
            <text className="friend" onClick={() => history.push('/chat')}>pop smoke</text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>j cole</text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>lil baby</text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>lil mosey</text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>jarvis</text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>future</text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>joey badass</text>
            </div>
            <div className="list">
            <text className="friend" onClick={() => history.push('/chat')}>juice world</text>
            </div>
        </div>
    )
}