import React, {useState, useEffect} from 'react';
import '../css/create.css';
import history from '../history'
import firebase from 'firebase'

export default function Create() {
    const [content, setContent] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        const db = firebase.firestore();
        const {currentUser} = firebase.auth();
        const nameRef = db.collection(`users/${currentUser?.uid}/userName`)   
        const unsubscribe = nameRef.onSnapshot((snapshot) => {
            const nameArray = []
            snapshot.forEach((doc) => {
               const data = doc.data()
               const name = data.userName
               nameArray.push(name)
            })
            setName(nameArray)
        })
        return unsubscribe
    }, [])

    function handlePress() {
        const db = firebase.firestore();
        const {currentUser} = firebase.auth();
        const ref = db.collection(`posts`);
        ref.add({
            body: content,
            time: new Date(),
            name: name[0],
            userId: currentUser.uid
        })
         .then(() => history.push('/home'))
         .catch((error) => console.log(error));
    }
    return (
        <div className="container">
            <div className="bar">
                 <text className="back" onClick={() => history.push('/home')}>← Home</text>
            <text className="barTitle">
                Create
            </text>
            </div>
            <div className="createArea">
                <textarea 
                className="textArea"
                defaultValue={content}
                onChange={e => setContent(e.target.value)}/>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={handlePress}>Post</button>
            </div>
        </div>
    )
    }