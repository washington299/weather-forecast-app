import { atom } from 'recoil';

import { WeatherDataProps } from 'types/weatherData';

export const cityNameState = atom({
	key: 'cityNameState',
	default: '',
});

export const selectedDayForecastState = atom<WeatherDataProps>({
	key: 'selectedDayForecastState',
	default: {} as WeatherDataProps,
});
