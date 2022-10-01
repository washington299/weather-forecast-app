import { useState, useEffect } from 'react';
import { Container, Stack } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';

import { getCityLatAndLon, getCityWheater } from 'services/queries';

import { cityNameState } from 'state/atoms';

import { SearchCity } from 'components/SearchCity';
import { WeatherResult } from 'components/WeatherResult';
import { WeatherSidebar } from 'components/WeatherSidebar';

import { CityDataProps } from 'types/cityData';
import { WeatherDataProps } from 'types/weatherData';

const App = () => {
	const [cityData, setCityData] = useState<CityDataProps>({} as CityDataProps);
	const [weatherData, setWeatherData] = useState<WeatherDataProps[]>([]);
	const [loads, setLoads] = useState({ cityLoading: false, watherLoading: false });

	const setState = useSetRecoilState(cityNameState);

	const handleSearchClick = async (city: string) => {
		setLoads(loads => ({ ...loads, cityLoading: true }));

		try {
			const { data } = await getCityLatAndLon(city);

			setCityData(data[0]);
		} catch (error) {
			console.error(error);
		}

		setLoads(loads => ({ ...loads, cityLoading: false }));
	};

	useEffect(() => {
		if (Object.keys(cityData).length === 0) return;

		const requestCityWeather = async () => {
			setLoads(loads => ({ ...loads, watherLoading: true }));

			try {
				const { data } = await getCityWheater(cityData.lat, cityData.lon);

				const fiveDaysWeatherForecast: WeatherDataProps[] = [
					data.list[0],
					data.list[8],
					data.list[16],
					data.list[24],
					data.list[32]
				];

				setWeatherData(fiveDaysWeatherForecast);
			} catch (error) {
				console.error(error);
			}

			setState(cityData.name);
			setLoads(loads => ({ ...loads, watherLoading: false }));
		};

		requestCityWeather();
	}, [cityData]);

  return (
		<Container maxW="7xl">
    	<SearchCity handleSearchClick={handleSearchClick} />

			<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={8}>
				<WeatherResult />
				<WeatherSidebar isLoading={loads.cityLoading || loads.watherLoading} data={weatherData} />
			</Stack>
		</Container>
  );
};

export default App;
