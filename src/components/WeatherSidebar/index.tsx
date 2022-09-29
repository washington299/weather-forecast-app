import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue } from 'recoil';

import { cityNameState } from 'state/atoms';

export const WeatherSidebar = () => {
	const cityName = useRecoilValue(cityNameState);

	return (
		<Box w={{ base: 'full', lg: '300px' }} p={10} bg="blue.800" borderRadius="3xl">
			<Text>{cityName}</Text>
		</Box>
	);
};
