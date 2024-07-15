import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Cart.css'; // Import the custom CSS file

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState('');
    const [payment, setPayment] = useState('');
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


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare data for MongoDB collection
        const formData = {
            items: cart.map(item => item.game_title),
            total: total,
            shipping: shipping,
            payment: payment
        };

        // Log/ Send formData to MongoDB
        console.log(formData);
        

        try {
            const response = await fetch(`http://localhost:3000/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            // Handle post submission logic (like showing a success message)
        } catch (error) {
            console.error("Error posting data", error);
            // Handle errors here
        }

        alert("Order has been confirmed!");

        // Clear form fields if needed
        setShipping('');
        setPayment('');
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

            <form onSubmit={handleSubmit}>
                <div className="row ">
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group mt-4">
                        <label htmlFor="shippingInput">Shipping:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="shippingInput"
                            value={shipping}
                            onChange={(e) => setShipping(e.target.value)}
                            required
                        />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                        <label htmlFor="paymentInput">Payment:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="paymentInput"
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                            required
                        />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-6 col-sm-12 text-end">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                
            </form>

            <div className='text-start mt-5'>
                <button className="btn btn-primary" onClick={handleReturnHome}>Home</button>
            </div>

        </div>
    );
};

export default Cart;