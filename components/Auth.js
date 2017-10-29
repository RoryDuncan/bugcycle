import React from "react"
import Link from "next/link"
import dynamic from 'next/dynamic'
import Head from 'next/head'

import firebaseApp from '../authentication/firebase';
import firebase from 'firebase'
import SimpleStateMachine from '../helpers/SimpleStateMachine';

const authInstance = firebaseApp.auth()

class AuthState extends SimpleStateMachine {
  constructor() {
    super();
    // set initialState
    this.state = {signedIn: false};

    authInstance.onAuthStateChanged((user) => {
      // user can be user|null, indicating signed in state
      this.state = {user, signedIn: !!user};

    });

  }

}

export const elementID = "auth-container"
export const auth = new AuthState();
console.log("auth", auth)



export class AuthRegion extends React.Component {

  constructor(props) {
    super(props);
    this.state = auth.state;
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {

    // FirebaseUI configuration
    let firebaseui = this.firebaseui = require("firebaseui")
    this.authUI = new firebaseui.auth.AuthUI(authInstance);
    this.uiConfig = {
      signInSuccessUrl: '',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      // tosUrl: '<your-tos-url>'
    };

    this.authUI.start(`#${elementID}`, this.uiConfig);
    auth.events.on("changed", this.onChange);
  }

  componentWillUnmount() {
    this.authUI.reset();
    auth.events.removeListener("changed", this.onChange)
  }

  onChange() {
    this.authUI.reset();
    this.setState(auth.state);
  }

  render() {

    if (this.state.signedIn) {
      return React.cloneElement(this.props.children, { auth: this.state })
    }

    return (
      <div>
        <Head>
          <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.4.1/firebaseui.css" />
        </Head>
        <div id={elementID} />
        <style jsx>{`

          #${elementID} {
            padding-top: 10rem;
          }

      `}</style>
      </div>
    )
  }

}