import * as actions from '../actions/actions'
import { weatherRequest } from '../requests/weatherRequest'

export const getWeatherRequest = () => async (dispatch) => {
  dispatch(actions.startAction('WEATHER', 'GET')())
  try {
    const result = await weatherRequest(`forecast`)
    dispatch(actions.successAction('WEATHER', 'GET')(result))
  } catch (e) {
    dispatch(actions.failureAction('WEATHER', 'GET')('Error'))
  }
}

export const getCurrentWeatherRequest = () => async (dispatch) => {
  dispatch(actions.startAction('CURRENT_WEATHER', 'GET')())
  try {
    const result = await weatherRequest('weather')
    dispatch(actions.successAction('CURRENT_WEATHER', 'GET')(result))
  } catch (e) {
    dispatch(actions.failureAction('CURRENT_WEATHER', 'GET')('Error'))
  }
}
