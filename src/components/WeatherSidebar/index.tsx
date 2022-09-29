import { Box, Text } from "@chakra-ui/react";

export const WeatherSidebar = () => {
	return (
		<Box w={{ base: 'full', lg: '300px' }} p={10} bg="blue.800" borderRadius="3xl">
			<Text>Weather sidebar</Text>
		</Box>
	);
};
