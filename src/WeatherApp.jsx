import { useState } from "react";
import Info from "./Info.jsx";
const api_key = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

function WeatherApp() {
    const [city, setCity] = useState("");
    const [coor, setCoor] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    function handleChange(e) {
        const value = e.target.value;
        setCity(value);
        console.log(city);
    }
    async function getCoor() {
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`
        );
        const data = await response.json();
        const currCoor = {
            lat: data[0].lat,
            lon: data[0].lon,
        };
        setCoor(currCoor);
        console.log(coor);
    }
    async function getWeatherInfo() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coor.lat}&lon=${coor.lon}&units=metric&appid=${api_key}`
        );
        const data = await response.json();
        const { temp, feels_like, humidity } = data.main;
        const { main: weather, description, icon: img } = data.weather[0];
        setWeatherInfo({
            temp,
            feels_like,
            humidity,
            weather,
            description,
            img,
        });
        console.log(weatherInfo);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        getCoor();
        getWeatherInfo();
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
                    className="px-5 py-1 border text-black"
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
