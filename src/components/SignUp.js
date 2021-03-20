import React, {useState} from 'react';
import '../css/LogIn.css';
import firebase from "firebase"
import history from '../history';

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  function handlePress() {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => history.replace('/home'))
    .catch(console.log(email))
  }
    return (
      <div className="first_container">
        <div className="titleContainer">
        <text className="title">SignUp</text>
        </div>
        <div className="emailContainer">
            <input 
            className="input" 
            placeholder="Email Address" 
            defaultValue={email}
            onChange={e => setEmail(e.target.value)} 
            />
        </div>
        <div className="passContainer">
            <input 
            className="input" 
            placeholder="Password" 
            defaultValue={pass}
            onChange={e => setPass(e.target.value)}
            />
        </div>
          <text className="moveButton" onClick={() => history.push('/')}>
            LogIn here !
          </text>
        <button className="submitButton" onClick={handlePress}>Submit!</button>
      </div>
    );  
  };
