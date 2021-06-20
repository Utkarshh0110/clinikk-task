import "./App.css";
import Navigation from "./Components/NavigationBar/Navigation";
import MiddleLayout  from "./Components/MiddleLayout/MiddleLayout";
import RightLayout from "./Components/RightLayout/RightLayout";
import firebase from './firebase'
import React from 'react'
function App() {

  React.useEffect(() => {
    const message = firebase.messaging();
    message.requestPermission().then(() => {
      return message.getToken();
    }).then((data) => {
      console.log("TOKEN ", data );
    })
  }, [])
  return (
    <div className="app__container">
      <Navigation />
      <MiddleLayout/>
      <RightLayout />
    </div>
  );
}

export default App;
