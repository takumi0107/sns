import React, {useState, useEffect} from 'react';
import '../css/home.css';
import history from '../history';
import firebase from 'firebase';

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      const db = firebase.firestore();
      const ref = db.collection(`posts`).orderBy('time', 'desc');
      const unsubscribe = ref.onSnapshot((snapshot) => {
        const postArray = []
        snapshot.forEach((doc) => {
          const data = doc.data();
          postArray.push({
            body: data.body,
            time: data.time,
            name: data.name,
            userId: data.userId
          })
        })
        setPosts(postArray)
      })
      return unsubscribe
    }, [])
  

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
              HOME
            </text>
            <text className="friends" onClick={() => history.push('/friends')}>Friends</text>
            </div>
            <div className="postingArea">
          {posts.map(info =>
          <React.Fragment>
          <div className="nameContainer">
            <text>user name : </text>
         <text className="userName" onClick={() => history.push({pathname: '/add', state: { userName: info.name, userId: info.userId }})}>{info.name}</text>
         </div>
         <div className="contentContainer">
         <text className="content">{info.body}</text>
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
  