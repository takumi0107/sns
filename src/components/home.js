import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div className="container">
            <div className="bar">
            <Link to="/">
            <text className="back">Log Out</text>
            </Link>
            <text className="barTitle">
                Home
            </text>
           <Link to="friends">
            <text className="friends">Friends</text>
            </Link>
            </div>
            <div className="postingArea">
                <div className="nameContainer">
                <text className="userName">user name</text>
                </div>
                <div className="contentContainer">
                <text className="content">content</text>
                </div>
            </div>
        </div>
    )
}