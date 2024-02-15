import { useState } from "react";
const api_key = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

function WeatherApp() {
    const [city, setCity] = useState("");
    function handleChange(e) {
        const value = e.target.value;
        setCity(value);
        console.log(city);
    }
    return (
        <div>
            <h1>Weather App</h1>
            <div>
                <input type="text" name="city" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </div>
        </div>
    );
}
export default WeatherApp;
