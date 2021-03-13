import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LogIn.css'

export default function PageOne() {
    return (
      <div className="container">
        <div className="titleContainer">
        <text className="title">LogIn</text>
        </div>
        <div className="emailContainer">
            <input className="input" placeholder="Please input EmailAddress"/>
        </div>
        <div className="passContainer">
            <input className="input" placeholder="Please input password" />
        </div>
        <Link to="/pageTwo" className="moveButtonContainer">
          <text className="moveButton">
            SignUp here !
          </text>
        </Link>
        <Link to="/home">
        <button className="submitButton">Submit!</button>
        </Link>
      </div>
    );  
  };
