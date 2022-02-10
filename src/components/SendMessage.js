import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(event) {
        event.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    const changeHandler = (event) => {
      setMsg(event.target.value);
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input style={{ width: '78%',height: '50px', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Enter Message' type="text" value={msg} onChange={changeHandler} />
                    <button className="btn btn-dark" style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
