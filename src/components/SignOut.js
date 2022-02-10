import React from 'react'
import { auth } from '../firebase.js'


function SignOut() {
    return (
        <div className="wrap-sign">
            <button className = "sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
