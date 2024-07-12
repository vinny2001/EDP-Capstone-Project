import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch games from the JSON file
    fetch('./games.json')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {games.map(game => (
          <div key={game.id} className="col-md-4 col-sm-6 col-xs-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{game.game_title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameList;