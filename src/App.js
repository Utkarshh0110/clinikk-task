import "./App.css";
import Navigation from "./Components/NavigationBar/Navigation";
import MiddleLayout  from "./Components/MiddleLayout/MiddleLayout";

function App() {
  return (
    <div className="app__container">
      <Navigation />
      <MiddleLayout/>
    </div>
  );
}

export default App;
