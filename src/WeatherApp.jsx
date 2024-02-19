import { useState } from "react";
import Info from "./Info.jsx";
const api_key = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
const backgroundGroup = {
    Thunderstorm: {
        desktop: `md:bg-[url("../public/images/desktop/thunder_storm.png")]`,
        mobile: `bg-[url("../public/images/mobile/thunder_storm.png")]`,
    },
    "Shower Rain": {
        desktop: `md:bg-[url("../public/images/desktop/shower_rain.png")]`,
        mobile: `bg-[url("../public/images/mobile/shower_rain.png")]`,
    },
    "Clear Sky": {
        desktop: `md:bg-[url("../public/images/desktop/clear_sky.png")]`,
        mobile: `bg-[url("../public/images/mobile/clear_sky.png")]`,
    },
    "Few Clouds": {
        desktop: `md:bg-[url("../public/images/desktop/few_clouds.png")]`,
        mobile: `bg-[url("../public/images/mobile/few_clouds.png")]`,
    },
    "Scattered Clouds": {
        desktop: `md:bg-[url("../public/images/desktop/scattered_clouds.png")]`,
        mobile: `bg-[url("../public/images/mobile/scattered_clouds.png")]`,
    },
    "Broken Clouds": {
        desktop: `md:bg-[url("../public/images/desktop/broken_clouds.png")]`,
        mobile: `bg-[url("../public/images/mobile/broken_clouds.png")]`,
    },
    Rain: {
        desktop: `md:bg-[url("../public/images/desktop/rain.png")]`,
        mobile: `bg-[url("../public/images/mobile/rain.png")]`,
    },
    Snow: {
        desktop: `md:bg-[url("../public/images/desktop/snow.png")]`,
        mobile: `bg-[url("../public/images/mobile/snow.png")]`,
    },
    Mist: {
        desktop: `md:bg-[url("../public/images/desktop/mist.png")]`,
        mobile: `bg-[url("../public/images/mobile/mist.png")]`,
    },
};

const group = {
    200: {
        description: "thunderstorm with light rain",
        background: backgroundGroup.Thunderstorm,
    },
    201: {
        description: "thunderstorm with rain",
        background: backgroundGroup.Thunderstorm,
    },
    202: {
        description: "thunderstorm with heavy rain",
        background: backgroundGroup.Thunderstorm,
    },
    210: {
        description: "light thunderstorm",
        background: backgroundGroup.Thunderstorm,
    },
    211: {
        description: "thunderstorm",
        background: backgroundGroup.Thunderstorm,
    },
    212: {
        description: "heavy thunderstorm",
        background: backgroundGroup.Thunderstorm,
    },
    221: {
        description: "ragged thunderstorm",
        background: backgroundGroup.Thunderstorm,
    },
    230: {
        description: "thunderstorm with light drizzle",
        background: backgroundGroup.Thunderstorm,
    },
    231: {
        description: "thunderstorm with drizzle",
        background: backgroundGroup.Thunderstorm,
    },
    232: {
        description: "thunderstorm with heavy drizzle",
        background: backgroundGroup.Thunderstorm,
    },
    300: {
        description: "light intensity drizzle",
        background: backgroundGroup["Shower Rain"],
    },
    301: {
        description: "drizzle",
        background: backgroundGroup["Shower Rain"],
    },
    302: {
        description: "heavy intensity drizzle",
        background: backgroundGroup["Shower Rain"],
    },
    310: {
        description: "light intensity drizzle rain",
        background: backgroundGroup["Shower Rain"],
    },
    311: {
        description: "drizzle rain",
        background: backgroundGroup["Shower Rain"],
    },
    312: {
        description: "heavy intensity drizzle rain",
        background: backgroundGroup["Shower Rain"],
    },
    313: {
        description: "shower rain and drizzle",
        background: backgroundGroup["Shower Rain"],
    },
    314: {
        description: "heavy shower rain and drizzle",
        background: backgroundGroup["Shower Rain"],
    },
    321: {
        description: "shower drizzle",
        background: backgroundGroup["Shower Rain"],
    },
    500: {
        description: "light rain",
        background: backgroundGroup.Rain,
    },
    501: {
        description: "moderate rain",
        background: backgroundGroup.Rain,
    },
    502: {
        description: "heavy intensity rain",
        background: backgroundGroup.Rain,
    },
    503: {
        description: "very heavy rain",
        background: backgroundGroup.Rain,
    },
    504: {
        description: "extreme rain",
        background: backgroundGroup.Rain,
    },
    511: {
        description: "freezing rain",
        background: backgroundGroup.Snow,
    },
    520: {
        description: "light intensity shower rain",
        background: backgroundGroup["Shower Rain"],
    },
    521: {
        description: "shower rain",
        background: backgroundGroup["Shower Rain"],
    },
    522: {
        description: "heavy intensity shower rain",
        background: backgroundGroup["Shower Rain"],
    },
    531: {
        description: "ragged shower rain",
        background: backgroundGroup["Shower Rain"],
    },
    600: {
        description: "light snow",
        background: backgroundGroup.Snow,
    },
    601: {
        description: "snow",
        background: backgroundGroup.Snow,
    },
    602: {
        description: "heavy snow",
        background: backgroundGroup.Snow,
    },
    611: {
        description: "sleet",
        background: backgroundGroup.Snow,
    },
    612: {
        description: "light shower sleet",
        background: backgroundGroup.Snow,
    },
    613: {
        description: "shower sleet",
        background: backgroundGroup.Snow,
    },
    615: {
        description: "light rain and snow",
        background: backgroundGroup.Snow,
    },
    616: {
        description: "rain and snow",
        background: backgroundGroup.Snow,
    },
    620: {
        description: "light shower snow",
        background: backgroundGroup.Snow,
    },
    621: {
        description: "shower snow",
        background: backgroundGroup.Snow,
    },
    622: {
        description: "heavy shower snow",
        background: backgroundGroup.Snow,
    },
    701: {
        description: "mist",
        background: backgroundGroup.Mist,
    },
    711: {
        description: "smoke",
        background: backgroundGroup.Mist,
    },
    721: {
        description: "haze",
        background: backgroundGroup.Mist,
    },
    731: {
        description: "sand/dust whirls",
        background: backgroundGroup.Mist,
    },
    741: {
        description: "fog",
        background: backgroundGroup.Mist,
    },
    751: {
        description: "sand",
        background: backgroundGroup.Mist,
    },
    761: {
        description: "dust",
        background: backgroundGroup.Mist,
    },
    762: {
        description: "volcanic ash",
        background: backgroundGroup.Mist,
    },
    771: {
        description: "squalls",
        background: backgroundGroup.Mist,
    },
    781: {
        description: "tornado",
        background: backgroundGroup.Mist,
    },
    800: {
        description: "clear sky",
        background: backgroundGroup["Clear Sky"],
    },
    801: {
        description: "few clouds: 11-25%",
        background: backgroundGroup["Few Clouds"],
    },
    802: {
        description: "scattered clouds: 25-50%",
        background: backgroundGroup["Scattered Clouds"],
    },
    803: {
        description: "broken clouds: 51-84%",
        background: backgroundGroup["Broken Clouds"],
    },
    804: {
        description: "overcast clouds: 85-100%",
        background: backgroundGroup["Broken Clouds"],
    },
};

function WeatherApp() {
    const [city, setCity] = useState("");
    const [coor, setCoor] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    function handleChange(e) {
        const value = e.target.value;
        setCity(value);
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
    }
    async function getWeatherInfo() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coor.lat}&lon=${coor.lon}&units=metric&appid=${api_key}`
        );
        const data = await response.json();
        const { temp, feels_like, humidity } = data.main;
        const { id, main: weather, description, icon: img } = data.weather[0];
        const name = data.name;
        const country = data.sys.country;
        setWeatherInfo((prev) => ({
            id,
            temp,
            feels_like,
            humidity,
            weather,
            description,
            img,
            name,
            country,
        }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        await getCoor();
        await getWeatherInfo();
    }
    const background = `${
        weatherInfo.id
            ? `${group[weatherInfo.id].background.mobile}`
            : `bg-white`
    } ${
        weatherInfo.id
            ? `${group[weatherInfo.id].background.desktop}`
            : `bg-white`
    } bg-cover`;
    return (
        <div
            className={` w-screen h-screen flex flex-col justify-center text-center text-black items-center gap-20 ${background}`}
        >
            <h1 className="font-bold text-4xl md:text-5xl">Weather App</h1>
            <form
                className="flex gap-10 items-center justify-center flex-col md:flex-row"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="city"
                    placeholder="City..."
                    autoComplete="off"
                    onChange={handleChange}
                    className="transition px-5 py-1 border-2 bg-white border-black text-black rounded-xl focus:scale-105 outline-transparent"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="px-10 py-1 border-2 border-black bg-white rounded-xl font-bold cursor-pointer hover:scale-110 transition hover:bg-gray-100"
                />
            </form>
            <Info
                id={weatherInfo.id ?? 1}
                temp={weatherInfo.temp ?? "-"}
                feels_like={weatherInfo.feels_like ?? "-"}
                humidity={weatherInfo.humidity ?? "-"}
                weather={weatherInfo.weather ?? "-"}
                description={weatherInfo.description ?? "-"}
                img={
                    weatherInfo.img
                        ? `https://openweathermap.org/img/wn/${weatherInfo.img}@2x.png`
                        : "../public/images/placeholder.png"
                }
                name={weatherInfo.name ?? "-"}
                country={weatherInfo.country ?? "-"}
            />
        </div>
    );
}
export default WeatherApp;
