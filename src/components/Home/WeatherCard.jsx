export const WeatherCard = ({ item }) => {
  return (
    <>
      <ul className="weather__card">
        <h4 className="weather-card__header">
          {item.name}({item.sys.country})
        </h4>
        <img
          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
          alt="weather-icon"
          className="weather-card__icon"
        />
        <li className="weather-card__item">
          <span className="weather-card__descrpiption">t. C: </span>
          <p className="weather-card__text">{Math.round(item.main.temp)}</p>
        </li>
        <li className="weather-card__item">
          <span className="weather-card__descrpiption">fells, C: </span>
          <p className="weather-card__text">{Math.round(item.main.feels_like)}</p>
        </li>
        <li className="weather-card__item">
          <span className="weather-card__descrpiption">press. hPa: </span>
          <p className="weather-card__text">{item.main.pressure}</p>
        </li>
        <li className="weather-card__item">
          <span className="weather-card__descrpiption">hum. %: </span>
          <p className="weather-card__text">{item.main.humidity}</p>
        </li>
        <li className="weather-card__item">
          <span className="weather-card__descrpiption">wind, m/s: </span>
          <p className="weather-card__text">{item.wind.speed}</p>
        </li>
      </ul>
    </>
  )
}
