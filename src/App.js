import React, {useState} from 'react';
import {fetchWeather} from "./api/fetchWeather"
import "./App.css"

function App() {

    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({})
    const search = async (e) => {
        if(e.key === "Enter") {
            const data = await fetchWeather()
            setWeather(data)
            setQuery("")
            console.log(weather);
        }
    }  

    return (
        <div className="main-container">
            <input 
                type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weather.info ? <div><h2>{weather.info.count}</h2></div> : null}
        </div>
    )
}

export default App;
