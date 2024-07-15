import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Navigate } from "react-router-dom";

const GameList = ({ data }) => {
  // let navigate = useNavigate();
  // const clickMe = (id) =>{
  //     navigate(`/${id}`)
  // }

  return (
    <div className="container">
      <div className="row" id="main-row">
          <h1 className="header text-center mt-3">Game List</h1>
      </div>
      <div className="row">
        {data.map(game => (
          <div key={game.id} className="col-md-4 col-sm-6 col-xs-12 mb-3">
            <div className="card">
              <div className="card-body">
                <a href={game.id}><h5 className="card-title">{game.game_title}</h5></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;