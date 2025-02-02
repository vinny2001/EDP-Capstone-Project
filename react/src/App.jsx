import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import GameList from './components/GameList';
import CategoryList from './components/CategoryList';
import Game from "./components/Game";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
  

function App() {

  const [data, setData] = useState([]);
  async function fetchData() {
    try{
      fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((games) => {
          setData(games)
      
      }).catch((error) => {
        console.error(error)
      });
    } catch(error){
      console.log(error)
    }

  };
  useEffect(() =>{
    fetchData();
    console.log("Data" + data);
  }, []);
  

  return (
    <>
    <Router>
      <Navbar setData={setData}/>
      <div className="container-fluid">

        
        <Routes>
          <Route path="/" element={<GameList data={data} />} />
          <Route path="/:id" element={<Game data={data} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cat/:category" element={<CategoryList />} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
