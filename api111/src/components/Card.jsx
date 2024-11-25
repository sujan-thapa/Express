import React, { useState, useEffect } from 'react'
import '../css/Card.css'


const Card = () => {
    const [data, setData] = useState([]); // State for storing API data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        // Fetch data when component mounts
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();


                // Extract only the first 4 items
                const filteredData = result.slice(0, 4);
                setData(filteredData);


            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(data);
    console.log(typeof(data));





    return (
        <>
        <div className="card">

            {data.map(item => (
                <div key={item.id} className="singleCard">
                    <img
                        className="cardImage"
                        src="https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?cs=srgb&dl=pexels-jessbaileydesign-934011.jpg&fm=jpg"
                        alt="Sample Image"
                    />
                    <p>ID: {item.id}</p>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>



        </>
    )
}

export default Card