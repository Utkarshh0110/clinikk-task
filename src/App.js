import "./App.css";
import React, { lazy, Suspense } from "react";
import firebase from "./firebase";
import PacmanLoader from "react-spinners/PacmanLoader";
const Navigation = lazy(() => import("./Components/NavigationBar/Navigation"));
const MiddleLayout = lazy(() =>
  import("./Components/MiddleLayout/MiddleLayout")
);
const RightLayout = lazy(() => import("./Components/RightLayout/RightLayout"));

function App() {
  React.useEffect(() => {
    const message = firebase.messaging();
    message
      .requestPermission()
      .then(() => {
        return message.getToken();
      })
      .then((data) => {});
  }, []);
  return (
    <div className="app__container">
      <Suspense
        fallback={
          <div className="app__fallback">
            <PacmanLoader color="#F37A24" size={100} margin={2} />
          </div>
        }
      >
        <Navigation />
        <MiddleLayout />
        <RightLayout />
      </Suspense>
    </div>
  );
}

export default App;
