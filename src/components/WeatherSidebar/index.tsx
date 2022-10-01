import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue } from 'recoil';

import { cityNameState } from 'state/atoms';

import { WeatherSidebarProps } from './types';

export const WeatherSidebar = ({ isLoading }: WeatherSidebarProps) => {
	const cityName = useRecoilValue(cityNameState);

	return (
		<Box w={{ base: 'full', lg: '300px' }} p={10} bg="blue.800" borderRadius="3xl">
			{isLoading && <Text>Loading...</Text>}
			<Text>{cityName}</Text>
		</Box>
	);
};
