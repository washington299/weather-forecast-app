import { useState } from 'react';
import {
	Box,
	HStack,
	Icon,
	Heading,
	InputGroup,
	Input,
	InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon, SunIcon } from '@chakra-ui/icons';

import { SearchCityProps } from './types';

export const SearchCity = ({ handleSearchClick }: SearchCityProps) => {
	const [cityName, setCityName] = useState('');

	return (
		<Box as="header" my={8} p={10} bg="blue.800" borderRadius="3xl">
			<HStack alignItems="center" mb={4}>
				<Heading as="h1" fontSize="2xl" fontWeight={500}>Search city weather</Heading>
				<Icon as={SunIcon} fontSize="2xl" />
			</HStack>

			<InputGroup>
				<Input
					placeholder='Search city'
					_placeholder={{ color: 'gray.300' }}
					value={cityName}
					onChange={(e) => setCityName(e.target.value)}
				/>
				<InputRightElement
					children={<SearchIcon color='white' cursor="pointer" />}
					onClick={() => handleSearchClick(cityName)}
				/>
			</InputGroup>
		</Box>
	);
};
