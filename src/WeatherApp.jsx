import { useState } from "react";
import Info from "./Info.jsx";
const api_key = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState({});
    function handleChange(e) {
        const value = e.target.value;
        setCity(value);
    }

    async function handleSubmit() {
        console.log(city);
        const response = await fetch();
        const data = await response.json();
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center text-center items-center gap-10 bg-black text-white">
            <h1>Weather App</h1>
            <form
                className="flex gap-20 items-center justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    className="px-10 py-2 border"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="px-20 py-5 border-5 text-xl "
                />
            </form>
            <Info />
        </div>
    );
}
export default WeatherApp;
