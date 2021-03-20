import React from 'react';
import '../css/home.css';
import history from '../history';
import firebase from 'firebase';

export default function Home() {
    function handlePress() {
        firebase.auth().signOut()
        .then(() => history.push('/'))
        .catch((error) => console.log(error))
    }
    return(
        <div className="container">
            <div className="bar">
            <text className="back" onClick={handlePress}>Log Out</text>
            <text className="barTitle">
                Home
            </text>
            <text className="friends" onClick={() => history.push('/friends')}>Friends</text>
            </div>
            <div className="postingArea">
                <div className="nameContainer">
                <text className="userName">user name</text>
                </div>
                <div className="contentContainer">
                <text className="content">content</text>
                </div>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={() => history.push('/create')}>+</button>
            </div>
        </div>
    )
}