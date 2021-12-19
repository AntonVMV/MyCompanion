import { useEffect, useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getWeatherRequest } from '../../store/thunk/weatherThunk'
import { Element } from './Element'

export const Weather = () => {
  const { weather, loading } = useSelector((store) => store.weatherReducer)
  const dispatch = useDispatch()
  const [filtered, setFiltered] = useState({})

  useEffect(() => {
    dispatch(getWeatherRequest())
  }, [])

  useEffect(() => {
    if (weather) {
      setFiltered(dataFilter())
    }
  }, [weather])

  const dataFilter = () => {
    const result = {}
    weather.list.forEach((item) => {
      if (Array.isArray(result[item.dt_txt.split(' ')[0]])) {
        result[item.dt_txt.split(' ')[0]].push(item)
      } else {
        result[item.dt_txt.split(' ')[0]] = [item]
      }
    })
    return result
  }

  const getDate = (date) => {
    return date.split('-').reverse().join('.')
  }

  const getTimefromTimestamp = (ts) => {
    const date = new Date(ts * 1000)
    var hours = date.getHours()
    var minutes = date.getMinutes()
    return `${hours}:${minutes}`
  }

  return (
    <div className="weather__container">
      {loading && <div className="loading">Loading...</div>}
      {weather && (
        <div className="weather__city">
          <h3 className="weather__text">{`${weather.city.name}(${weather.city.country})`}</h3>
          <p className="weather__text">
            <span className="description__text">Sunrise: </span>
            {getTimefromTimestamp(weather.city.sunrise)}
          </p>
          <p className="weather__text">
            <span className="description__text">Sunset: </span>
            {getTimefromTimestamp(weather.city.sunset)}
          </p>
        </div>
      )}
      <ul className="weather__list">
        {filtered &&
          Object.keys(filtered).map((key, index) => {
            return (
              <li key={index} className="weather__item">
                <p className="weather__date">{getDate(key)}</p>
                <div className="weather__content">
                  <Element />
                </div>
                {filtered[key].map((item, index) => {
                  return (
                    <div key={index} className="weather__content weather__data">
                      <Element item={item} />
                    </div>
                  )
                })}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
