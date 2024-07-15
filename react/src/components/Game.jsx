import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Game = ({ data }) => {

    let { id } = useParams();
    const [gameData, setGameData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function goBack() {
        window.history.back();
    }

    function addToCart() {
        
        // 1. Extract game title and price from gameData
        if (data[id]) {
            const { game_title, product_information: { price } } = gameData;

            // Save to localStorage
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ game_title, price });
            localStorage.setItem('cart', JSON.stringify(cart));

            // Navigate to cart page
            navigate('/cart');

            alert(`${game_title} added to cart.`);
        } else {
            console.error('gameData or its attributes are not available.');
        }
    };

    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
            try {
                // Simulate a fetch call with a delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setGameData(data[id]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id, data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!gameData) {
        return <div>Game data not found.</div>;
    }
    console.log("Game Data: " + gameData.game_title);

    return (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <h1>{gameData.game_title}</h1>
                <hr />

                <p>{"Released: " + gameData.product_information.release_date}</p>
                <p>{"Genre: " + gameData.product_information.genre}</p>
                <p>{"Rating: " + gameData.product_information.rating}</p>
                <p>{"Popularity: " + gameData.product_information.popularity}</p>

                <h6><p>{"In Stock: " + gameData.inventory}</p></h6>
                <h5 className='fw-bold'>{"$" + gameData.product_information.price}</h5>
                
            </div>
            
        </div>

        <div className="row text-center">

            <div className="col">
                <button className=" btn btn-primary mt-3" onClick={goBack}><i class="fas fa-arrow-left"></i> Back</button>
            </div>
            <div className="col">
                <button className=" btn btn-secondary mt-3" onClick={addToCart}> Add to cart <i class="fas fa-shopping-cart"></i></button>
            </div>
           
        </div>

    </div>

        
        
    );
};

export default Game;
