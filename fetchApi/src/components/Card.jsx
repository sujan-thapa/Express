import React, { useState, useEffect } from "react";
import "../styles/card.css";


const Card = () => {
    const [data, setData] = useState([]); //state for the data
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                const filteredData = result.slice(0, 4);
                setData(filteredData);


            } catch (error) {
                seterror(error.message);


            } finally {
                setloading(false);
            }
        }

        fetchData();
    }), []; //fetching the data from the api

    if(loading) return <div>Loading....</div>
    if (error) return <div>Error: {error}</div>

    

    return (
        <>
            <div className="card">

                {data.slice(0, 4).map(item => (
                    <div key={item.id} className="card-item">
                        <img
                            className="cardImage"
                            src="https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?cs=srgb&dl=pexels-jessbaileydesign-934011.jpg&fm=jpg"
                            alt="Sample Image"
                        />
                        <h2>ID: {item.id}</h2>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))
                }

            </div>
        </>


    )
}

export default Card;