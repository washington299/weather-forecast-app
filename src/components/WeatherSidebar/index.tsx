import { Fragment, useEffect } from 'react';
import { Box, HStack, VStack, Center, Text, Heading, Image, Spinner } from "@chakra-ui/react";
import { useRecoilValue, useRecoilState } from 'recoil';

import { cityNameState, selectedDayForecastState } from 'state/atoms';

import { getWeekDay } from 'utils/formatDate';

import { WeatherSidebarProps } from './types';

export const WeatherSidebar = ({ isLoading, data }: WeatherSidebarProps) => {
	const cityName = useRecoilValue(cityNameState);
	const [selectedDayForecast, setSelectedDayForecast] = useRecoilState(selectedDayForecastState);

	const formatedWeatherList = data?.map((weather, index) => ({
		...weather,
		dt_txt: index === 0 ? "Today" : index === 1 ? "Tomorrow" : getWeekDay(new Date(weather.dt_txt).getDay()),
	}));

	useEffect(() => {
		if (Object.keys(selectedDayForecast || {}).length === 0 && formatedWeatherList.length > 0) {
			setSelectedDayForecast({ ...formatedWeatherList[0], id: 0 });
		}
	}, [formatedWeatherList]);

	return (
		<Box w={{ base: 'full', lg: '350px' }} py={4} bg="blue.800" borderRadius="3xl">
			{isLoading ? (
				<Center my={10}>
					<Spinner size="xl" color="blue.400" />
				</Center>
			) : (
				<Fragment>
					{formatedWeatherList.length > 0 ? (
						<Fragment>
							<Heading as="h2" fontSize="2xl" px={6} mb={4}>{cityName}</Heading>

							{formatedWeatherList.map((weatherInfo, index) => {
								const { temp_min, temp_max } = weatherInfo.main;
								const { description, icon } = weatherInfo.weather[0];
								const day = new Date(weatherInfo.dt_txt).getDay() || weatherInfo.dt_txt;

								return (
									<HStack
										key={day}
										justifyContent="space-between"
										px={4}
										cursor="pointer"
										bg={selectedDayForecast.id === index ? "blue.900" : ""}
										_hover={{ bg: "blue.900" }}
										onClick={() => setSelectedDayForecast({ ...weatherInfo, id: index })}
									>
										<HStack>
											<Image
												src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
												alt={description}
												w="60px"
												h="60px"
											/>
											<VStack alignItems="normal" spacing={0}>
												<Text fontSize="xs">{day}</Text>
												<Text>{description}</Text>
											</VStack>
										</HStack>
										<Text>{`${Math.round(temp_min)}° / ${Math.round(temp_max)}°`}</Text>
									</HStack>
								);
							})}
						</Fragment>
					) : (
						<Text textAlign="center" my={10}>No weather result.</Text>
					)}
				</Fragment>
			)}
		</Box>
	);
};
