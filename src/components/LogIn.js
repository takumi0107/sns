import React, {useState, useEffect} from 'react';
import '../css/LogIn.css';
import history from '../history';
import firebase from 'firebase'

export default function PageOne() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    const unsubscribe =firebase.auth().onAuthStateChanged((user) => {
      if(user) {history.replace('/home')}
    })
    return unsubscribe
  }, [])
  function handlePress() {
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => history.replace('/home'))
    .catch((error) => console.log(error))
  }
    return (
      <div className="first_container">
        <div className="titleContainer">
        <text className="title">LogIn</text>
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
          <text className="moveButton" onClick={() => history.push('/SignUp')}>
            SignUp here !
          </text>
        <button className="submitButton" onClick={handlePress}>Submit!</button>
      </div>
    );  
  };
