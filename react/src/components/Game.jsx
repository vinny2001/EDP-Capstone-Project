import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from "react-router-dom";

const Game = ({ data }) => {
    let {id} = useParams();
    console.log("Params: " + id)
    return (
        <div>
            {/* {data.map(game => (
                <div key={game.id} className="col-md-4 col-sm-6 col-xs-12 mb-3">
                    <div className="card">
                    <div className="card-body">
                        <a href={game.id}><h5 className="card-title">{game.game_title}</h5></a>
                    </div>
                    </div>
                </div>
            ))} */}
            {console.log(data[id].game_title)}
        </div>
    );
};

export default Game;