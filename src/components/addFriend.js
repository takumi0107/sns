import React, {useEffect} from 'react'
import  { useLocation } from 'react-router-dom'
import '../css/addFriend.css'
import history from '../history'
import firebase from 'firebase'


export default function Add() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.state.userName); 
    console.log(location.state.userId);
 }, [location]);

      function handlePress() {
        const db = firebase.firestore()
        const ref = db.collection('group')
        ref.add({createdAt: new Date()})
        history.push({
           pathname: '/home',
           state: {yes: 'yes'},
        })
      }
    return(
        <div className="addContainer">
         <div className="Area">
         <text className="title">Add {location.state.userName} as your friend</text>
         </div>
         <div className="titleContent">
         <div className="yesContainer">
         <button className="yes" onClick={handlePress}>Yes</button>
         </div>
         <div className="noContainer">
         <button className="no" onClick={() => history.push('/home')}>No</button>
         </div>
        </div>
        </div>
    )
}
    

