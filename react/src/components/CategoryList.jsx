import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

const CategoryList = () => {
const [data, setData] = useState([]);
const {category} = useParams();

  async function fetchData() {
    try{
      fetch(`http://localhost:3000/cat/${category}`)
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

export default CategoryList;