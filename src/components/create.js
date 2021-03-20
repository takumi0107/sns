import React from 'react';
import '../css/create.css';
import history from '../history'

export default function Create() {
    return (
        <div className="container">
            <div className="bar">
                 <text className="back">← Home</text>
            <text className="barTitle">
                Create
            </text>
            </div>
            <div className="createArea">
                <textarea className="textArea"/>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={() => history.push('/home')}>Post</button>
            </div>
        </div>
    )
}