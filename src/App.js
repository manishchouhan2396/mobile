import logo from './logo.svg';
import './App.css';
import {Hello , Mob1 ,Mob2} from "./components/hello";

function App() {
  return (
    <div className="App">
        <Hello from = "Operating" ></Hello>
        <Mob1></Mob1>
        <Hello from = "Manufacturers" ></Hello>
        <Mob2></Mob2>
        

    </div>
  );
}

export default App;
