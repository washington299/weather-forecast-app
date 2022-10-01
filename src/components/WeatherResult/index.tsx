import { Box, Stack, Text, Image, HStack, VStack } from "@chakra-ui/react";
import { useRecoilValue } from 'recoil';

import { selectedDayForecastState } from 'state/atoms';

import { getWeekDay } from 'utils/formatDate';

export const WeatherResult = () => {
	const dayWeatherData = useRecoilValue(selectedDayForecastState);

	return (
		<Box p={10} bg="blue.800" borderRadius="3xl" flex={1}>
			{Object.keys(dayWeatherData).length > 0 ? (
				<Stack direction={{ base: "column", md: "row" }}>
					<Image
						src={`http://openweathermap.org/img/wn/${dayWeatherData.weather[0].icon}@2x.png`}
						alt={dayWeatherData.weather[0].description}
						w="250px"
						h="250px"
					/>
					<VStack w="full" alignItems="normal" spacing={4}>
						<Text fontSize="3xl" mb={4}>{getWeekDay(new Date(dayWeatherData?.dt_txt || "").getDay())}</Text>
						<HStack alignItems="normal" justifyContent="space-between">
							<Text fontSize="lg">{dayWeatherData.weather[0].description}</Text>
							<Text fontSize="xl">
								{`${Math.round(dayWeatherData?.main.temp_min)}° / ${Math.round(dayWeatherData?.main.temp_max)}°`}
							</Text>
						</HStack>
						<HStack alignItems="normal" justifyContent="space-between" mt={4}>
							<Text fontSize="lg">Humidity: {dayWeatherData.main.humidity}</Text>
							<Text fontSize="xl">
								Wind speed: {dayWeatherData.wind.speed}
							</Text>
						</HStack>
					</VStack>
				</Stack>
			) : (
				<Text textAlign="center" my={4}>No weather result.</Text>
			)}
		</Box>
	);
};
