import React, {useState, useEffect} from 'react';
import '../css/chat.css';
import history from '../history';
import firebase from 'firebase';

export default function Chat() {
    const [message, setMessage] = useState('')
    const [view, setView] = useState([])
    useEffect(() => {
        const db = firebase.firestore();
        const {currentUser} = firebase.auth();
        const ref = db.collection(`users/${currentUser?.uid}/messages`)
        const unsubscribe = ref.onSnapshot((snapshot) => {
            const messageArray = []
            snapshot.forEach((doc) => {
                const data = doc.data();
                messageArray.push({
                    message: data.message,
                    time: data.time,
                })
            })
            setView(messageArray)
        })
        return unsubscribe
    })

    function handlePress() {
        const {currentUser} = firebase.auth();
        const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser?.uid}/messages`);
        ref.add({
            message,
            time: new Date(),
        })
         .then(() => history.push('/friends'))
         .catch((error) => console.log(error));
    }
    return(
        <div className="container">
            <div className="bar">
            <text className="barTitle">
                Chat
            </text>
            <text className="back" onClick={() => history.push('/friends')}>← Friends</text>
            </div>
            <div className="chatBox">
             <div className="friendsMessage">
                 <text>hello</text>
             </div>
             {view.map(home => 
                    <div className="myMessage">
                        <text>{home.message}</text>
                    </div>
                )}


             <div className="sendContainer">
                <input 
                className="input"
                defaultValue={message}
                onChange={e => setMessage(e.target.value)}/>
                <button className="send" onClick={handlePress}>Send</button>
             </div>
            </div>
        </div>
    )
}