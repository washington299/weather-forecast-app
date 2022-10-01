import { api } from 'services/config';

export const getCityLatAndLon = (city: string) =>
	api.get(`/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`);

export const getCityWheater = (lat: number, lon: number) =>
	api.get(`/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`)
