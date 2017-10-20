const API_KEY='43a954aacdfe733dbeb2b37c4f2a739f';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
