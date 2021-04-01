import React, {useEffect, useState} from 'react';
import '../css/friends.css';
import history from '../history'
import firebase from 'firebase'

export default function Friends() {
    const [friendArray, setFriend] = useState([])
    useEffect(() => {
        const db = firebase.firestore()
        const { currentUser } = firebase.auth()
        const ref = db.collection(`friends/${currentUser?.uid}/info`).orderBy('time', 'desc')
        const unsubscribe = ref.onSnapshot((snapshot) => {
            const array = []
            snapshot.forEach((doc) => {
                const data = doc.data();
                array.push({
                    name: data.userName,
                    id: data.userId
                })
                setFriend(array)
            })
        })
        return unsubscribe
    }, [])
    return(
        <div className="container">
            <div className="bar">
                 <text className="back" onClick={() => history.push('/home')}>← Home</text>
            <text className="barTitle">
                Friends
            </text>
            </div>
            {friendArray.map(info => 
                <div className="list">
                <text className="friend" onClick={() => history.push({
                    pathname: '/chat',
                    state: {userId: info.id}
                })}>{info.name}</text>
                </div>
                )}
        </div>
    )
}