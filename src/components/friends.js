import React from 'react';
import '../css/friends.css';
import { Link } from 'react-router-dom';

export default function Friends() {
    return(
        <div className="container">
            <div className="bar">
             <Link to="home">
                 <text className="back">← Home</text>
             </Link>
            <text className="barTitle">
                Friends
            </text>
            </div>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            <Link to="chat">
            <div className="list">
            <text className="friend">go</text>
            </div>
            </Link>
            
        </div>
    )
}