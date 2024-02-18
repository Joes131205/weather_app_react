function Info({ id, temp, feels_like, humidity, weather, description, img }) {
    return (
        <div className="w-52 h-72 border-5 flex flex-col items-center justify-center gap-10">
            <h1 className="font-bold text-2xl">Temp: {temp}°C</h1>
            <h2 className="font-bold">Feels like: {feels_like}°C</h2>
            <h2 className="font-bold">Humidity: {humidity}%</h2>
            <h2 className="font-bold">Current Weather: {weather}</h2>
            <h2 className="font-bold">{description}</h2>
            <img src={img} className="w-24 h-24" />
        </div>
    );
}

export default Info;
