import React, {useState, useEffect} from 'react';
import '../css/home.css';
import history from '../history';
import firebase from 'firebase';

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      const db = firebase.firestore();
      const {currentUser} = firebase.auth();
      const ref = db.collection(`users/${currentUser?.uid}/posts`)
      const unsubscribe = ref.onSnapshot((snapshot) => {
        const postArray = []
        snapshot.forEach((doc) => {
          const data = doc.data();
          postArray.push({
            body: data.body,
            time: data.time,
          })
        })
        setPosts(postArray)
      })
      return unsubscribe
    })
  

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
          {posts.map((home, index) =>
          <React.Fragment>
          <div className="nameContainer">
         <text className="userName">{home.body}</text>
         </div>
         <div className="contentContainer">
         <text className="content">{index}</text>
         </div>
         </React.Fragment>
        )}
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={() => history.push('/create')}>+</button>
            </div>
        </div>
    )
    }
  