import logo from './logo.svg';
import './App.css';
import MyRestoNavBar from "./components/MyRestoNavBar";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <MyRestoNavBar />
      <Home/>
    </div>
  );
}

export default App;
