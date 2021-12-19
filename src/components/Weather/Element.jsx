import './style.css'

export const Element = ({ item }) => {
  const getTime = () => {
    return item.dt_txt.split(' ')[1].slice(0, 5)
  }

  return (
    <>
      {item ? (
        <>
          <p className="weather__text weather__time">{getTime()}</p>
          <img
            src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            alt="weather-icon"
            className="weather__icon"
          />
          <p className="weather__text weather__temp">{Math.round(item.main.temp)}</p>
          <p className="weather__text weather__feels">{Math.round(item.main.feels_like)}</p>
          <p className="weather__text">{item.main.humidity}</p>
          <p className="weather__text">{item.main.pressure}</p>
        </>
      ) : (
        <>
          <p className="description__text">Time</p>
          <p className="description__text">Weath:</p>
          <p className="description__text">Temp:</p>
          <p className="description__text">Fells:</p>
          <p className="description__text">Humit. %:</p>
          <p className="description__text">Press. hPa:</p>
        </>
      )}
    </>
  )
}
