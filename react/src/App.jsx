import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import GameList from './components/GameList';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_GAMES_API_URL);
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            console.log("Response: " + JSON.stringify(response));
            const json_response = await response.json();
            console.log("Json response: " + json_response);
            setData(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    fetchData();
  }, []);


  return (
    <>
    <Router>
      <div className="container-fluid">

        <div className="row" id="main-row">
          <h1 className="header text-center mt-3">Game List</h1>
        </div>
        <Routes>
          <Route path="/" element={<GameList data={data} />} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
