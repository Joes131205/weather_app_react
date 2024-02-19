function Info({
    id,
    temp,
    feels_like,
    humidity,
    weather,
    description,
    img,
    name,
    country,
}) {
    return (
        <div className="w-[90%] md:w-[40rem] h-96 border-4 border-black rounded-lg flex flex-col items-center justify-center gap-3 font-bold bg-[#ffffff9d] backdrop-blur-sm">
            <p className="my-3">
                {name}, {country}
            </p>
            <p className="text-4xl">{weather}</p>
            <p>{description[0].toUpperCase() + description.slice(1)}</p>
            <img src={img} className="w-24 h-24" />
            <p>Temp: {temp}°C</p>
            <p>Feels like: {feels_like}°C</p>
            <p>Humidity: {humidity}%</p>
        </div>
    );
}

export default Info;
