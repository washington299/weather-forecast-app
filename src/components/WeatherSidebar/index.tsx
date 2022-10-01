import { Box, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { useRecoilValue } from 'recoil';

import { cityNameState } from 'state/atoms';

import { getWeekDay } from 'utils/formatDate';

import { WeatherSidebarProps } from './types';

export const WeatherSidebar = ({ isLoading, data }: WeatherSidebarProps) => {
	const cityName = useRecoilValue(cityNameState);

	return (
		<Box w={{ base: 'full', lg: '350px' }} p={4} bg="blue.800" borderRadius="3xl">
			{isLoading && <Text>Loading...</Text>}
			<Text>{cityName}</Text>

			{data.map((weatherInfo) => {
				const { temp_min, temp_max } = weatherInfo.main;
				const { description, icon } = weatherInfo.weather[0];
				const day = new Date(weatherInfo.dt_txt).getDay();

				return (
					<HStack key={day} justifyContent="space-between">
						<HStack>
							<Image
								src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
								alt={description}
								w="60px"
								h="60px"
							/>
							<VStack alignItems="normal" spacing={0}>
								<Text fontSize="xs">{getWeekDay(day)}</Text>
								<Text>{description}</Text>
							</VStack>
						</HStack>
						<Text>{`${Math.round(temp_min)}° / ${Math.round(temp_max)}°`}</Text>
					</HStack>
				);
			})}
		</Box>
	);
};
