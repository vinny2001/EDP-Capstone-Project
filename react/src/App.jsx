import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import GameList from './components/GameList';
import Game from "./components/Game";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
  

function App() {

  const [data, setData] = useState([]);
  async function fetchData() {
    try{
      fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((games) => {
          console.log("Games:" + games)
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
      <div className="container-fluid">

        
        <Routes>
          <Route path="/" element={<GameList data={data} />} />
          <Route path="/:id" element={<Game data={data} />} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
