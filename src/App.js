import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageOne from './components/LogIn';
import PageTwo from './components/SignUp';
import Home from './components/home';
import Friends from './components/friends';
import Chat from './components/chat';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pageTwo"  component={PageTwo} />
          <Route path="/home" component={Home} />
          <Route path="/friends" component={Friends} />
          <Route path="/chat" component={Chat} />
        </div>
      </BrowserRouter>
    </div>
  );
};
