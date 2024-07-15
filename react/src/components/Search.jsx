import React, { useState } from 'react';

const Search = (props) => {
    // console.log("In search", props);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/search`, {
            method: "POST",
            body: JSON.stringify({ searchTerm }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                props.setData(data);
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    return (
        <form className="d-flex me-2" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search"
                placeholder="Search" aria-label="Search"
                value={searchTerm} onChange={handleChange}></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
};

export default Search;