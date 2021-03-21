import React, {useState} from 'react';
import '../css/create.css';
import history from '../history'
import firebase from 'firebase'

export default function Create() {
    const [content, setContent] = useState('')
    function handlePress() {
        const {currentUser} = firebase.auth();
        const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser?.uid}/posts`);
        ref.add({
            body: content,
            time: new Date(),
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