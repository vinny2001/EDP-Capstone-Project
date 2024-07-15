import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Cart.css'; // Import the custom CSS file

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);

        // Calculate total price
        const totalPrice = storedCart.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotal(totalPrice.toFixed(2)); // To get the total with two decimal places
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Update total price
        const totalPrice = updatedCart.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotal(totalPrice.toFixed(2));
    };

    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <div className="cart-container">
            <h1 className='mb-5'>Cart</h1>
            
            {cart.length > 0 ? (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <p className="item-title">{item.game_title}</p>
                        <p className="item-price">${item.price}</p>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeFromCart(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No items in the cart.</p>
            )}

            <h4 className='text-start mt-4'>Total: ${total}</h4>

            <div className='text-start mt-5'>
                <button className="btn btn-primary" onClick={handleReturnHome}>Home</button>
            </div>

        </div>
    );
};

export default Cart;