import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import GameList from './components/GameList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">

        <div className="row" id="main-row">
          <h1 className="header text-center mt-3">Game List</h1>
        </div>
        <GameList />

      </div>
    </>
  )
}

export default App
