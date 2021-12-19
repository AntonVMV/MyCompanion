const initialState = {
  weather: null,
  currentWeather: null,
  loading: false,
  error: null,
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WEATHER_GET_START':
    case 'CURRENT_WEATHER_GET_START':
      return {
        ...state,
        loading: true,
      }

    case 'WEATHER_GET_FAILURE':
    case 'CURRENT_WEATHER_GET_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case 'WEATHER_GET_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        weather: action.payload,
      }
    case 'CURRENT_WEATHER_GET_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        currentWeather: action.payload,
      }
    default:
      return state
  }
}
