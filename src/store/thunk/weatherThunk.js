import * as actions from '../actions/actions'
import { weatherRequest } from '../requests/weatherRequest'

export const getWeatherRequest = (lat, lon) => async (dispatch) => {
  dispatch(actions.startAction('WEATHER', 'GET')())
  try {
    const result = await weatherRequest(`forecast`, lat, lon)
    dispatch(actions.successAction('WEATHER', 'GET')(result))
  } catch (e) {
    dispatch(actions.failureAction('WEATHER', 'GET')('Error'))
  }
}

export const getCurrentWeatherRequest = (lat, lon) => async (dispatch) => {
  dispatch(actions.startAction('CURRENT_WEATHER', 'GET')())
  try {
    const result = await weatherRequest('weather', lat, lon)
    dispatch(actions.successAction('CURRENT_WEATHER', 'GET')(result))
  } catch (e) {
    dispatch(actions.failureAction('CURRENT_WEATHER', 'GET')('Error'))
  }
}
