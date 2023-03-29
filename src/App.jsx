import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
    <MyNav  brand="EpiBooks Libreria Online"/>
    <Welcome />
    <AllTheBooks />
    <MyFooter />
    </>
  );
}

export default App;
