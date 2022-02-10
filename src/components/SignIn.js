import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className = "wrap" >
          <div className = "main" >
            <h1>Here we are, To help you connect with your loved ones</h1>
            <br/>
            <button className = "sign-in" onClick={signInWithGoogle}>Sign In With Google</button>
          </div>
        </div>
    )
}

export default SignIn
