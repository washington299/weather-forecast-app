type Main = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

type Weather = {
	id: number;
	main: string;
	description: string;
	icon: string;
}

type Clouds = {
	all: number;
}

type Wind = {
	speed: number;
	deg: number;
	gust: number;
}

type Sys = {
	pod: string;
}

export type WeatherDataProps = {
	id: number;
	dt: number;
	main: Main;
	weather: Weather[];
	clouds: Clouds;
	wind: Wind;
	visibility: number;
	pop: number;
	sys: Sys;
	dt_txt: string;
}
