import React from 'react';
import { Router, Route } from 'react-router-dom';
import PageOne from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/home';
import Friends from './components/friends';
import Chat from './components/chat';
import Create from './components/create';
import {firebaseConfig} from './env';
import firebase from 'firebase'
import history from './history';

require ('firebase/firestore')

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({experimentalForceLongPolling: true})
}


export default function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/SignUp"  component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/friends" component={Friends} />
          <Route path="/chat" component={Chat} />
          <Route path="/create" component={Create} />
        </div>
      </Router>
    </div>
  );
};
