import { useState, useEffect } from 'react';
import { Container, Stack } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { useMutation, useQuery } from '@tanstack/react-query';

import { getCityLatAndLon, getCityWheater } from 'services/queries';

import { cityNameState } from 'state/atoms';

import { SearchCity } from 'components/SearchCity';
import { WeatherResult } from 'components/WeatherResult';
import { WeatherSidebar } from 'components/WeatherSidebar';

import { WeatherDataProps } from 'types/weatherData';

const App = () => {
	const {
		mutate,
		isLoading: isLoadingCity,
		data: cityData,
	} = useMutation((city: string) => getCityLatAndLon(city));

	const cityName = cityData?.data[0].name || "";

	const { isLoading: isLoadingWatherInfo, data: weatherData } = useQuery(
		['weatherData', cityName],
		() => getCityWheater(cityData?.data[0]?.lat, cityData?.data[0]?.lon),
		{ enabled: !!cityName },
	);

	const [weatherList, setWeatherList] = useState<WeatherDataProps[]>([]);
	const setState = useSetRecoilState(cityNameState);

	const handleSearchClick = async (city: string) => mutate(city);

	useEffect(() => {
		if (!weatherData) return;

		const weatherListNextFiveDays: WeatherDataProps[] = [
			weatherData?.data?.list[0],
			weatherData?.data?.list[8],
			weatherData?.data?.list[16],
			weatherData?.data?.list[24],
			weatherData?.data?.list[32],
		];

		setWeatherList(weatherListNextFiveDays);
		setState(cityName);
	}, [weatherData?.data]);

  return (
		<Container maxW="7xl">
    	<SearchCity handleSearchClick={handleSearchClick} />

			<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={8}>
				<WeatherResult />
				<WeatherSidebar
					isLoading={isLoadingCity || (!!cityName && isLoadingWatherInfo)}
					data={weatherList || []}
				/>
			</Stack>
		</Container>
  );
};

export default App;
