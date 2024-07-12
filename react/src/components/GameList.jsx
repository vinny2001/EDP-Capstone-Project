import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GameList = (props) => {
  
  return (
    <div className="container">
      <div className="row">
        {props.data.map(props => (
          <div key={props.game.id} className="col-md-4 col-sm-6 col-xs-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{props.game.game_title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameList;