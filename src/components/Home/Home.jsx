import './style.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCurrentWeatherRequest } from '../../store/thunk/weatherThunk'
import { WeatherCard } from './WeatherCard'
import { getRequest } from '../../store/thunk/mockApiThunk'

export const Home = () => {
  const dispatch = useDispatch()
  const { currentWeather } = useSelector((store) => store.weatherReducer)
  const { toDo } = useSelector((store) => store.toDoReducer)

  useEffect(() => {
    dispatch(getCurrentWeatherRequest())
    dispatch(getRequest('toDoList'))
  }, [])

  return (
    <div className="home__container">
      <div className="weather__widget">
        <h3 className="home__header">Weather now:</h3>
        {currentWeather && <WeatherCard item={currentWeather} />}
      </div>
      <div className="todo__widget">
        <h3 className="home__header">Undone todos:</h3>
        {toDo &&
          toDo.map((item) => {
            if (!item.done) {
              return (
                <p key={item.id} className="todo__content home__todo">
                  {item.text}
                </p>
              )
            }
            return <></>
          })}
      </div>
    </div>
  )
}
