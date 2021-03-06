import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

// Instructions: https://www.youtube.com/watch?v=ScDWrogElmo&feature=youtu.be

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:room" component={SingleRoom}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
