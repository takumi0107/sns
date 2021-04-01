import React from 'react'
import  { useLocation } from 'react-router-dom'
import '../css/addFriend.css'
import history from '../history'
import firebase from 'firebase'


export default function Add() {
  const location = useLocation();

      function handlePress() {
        const db = firebase.firestore()
        const {currentUser} = firebase.auth()
        const ref = db.collection(`friends/${currentUser?.uid}/info`)
        ref.add({
          userName: location.state.userName,
          userId: location.state.userId,
          time: new Date()
        })
        history.push({pathname: '/home',})
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
    

