import "./App.css";
import Navigation from "./Components/NavigationBar/Navigation";
import MiddleLayout  from "./Components/MiddleLayout/MiddleLayout";
import RightLayout from "./Components/RightLayout/RightLayout";
function App() {
  return (
    <div className="app__container">
      <Navigation />
      <MiddleLayout/>
      <RightLayout />
    </div>
  );
}

export default App;
