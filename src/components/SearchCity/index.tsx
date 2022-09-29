import {
	Container,
	Box,
	HStack,
	Icon,
	Heading,
	InputGroup,
	Input,
	InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon, SunIcon } from '@chakra-ui/icons';

export const SearchCity = () => {
	return (
		<Container maxW="7xl">
			<Box as="section" my={8} p={10} bg="blue.800" borderRadius="3xl">
				<HStack alignItems="center" mb={4}>
					<Heading as="h1" fontSize="2xl" fontWeight={500}>Search city weather</Heading>
					<Icon as={SunIcon} fontSize="2xl" />
				</HStack>

				<InputGroup>
					<Input placeholder='Search city' _placeholder={{ color: 'gray.300' }} />
					<InputRightElement children={<SearchIcon color='white' cursor="pointer" />} />
				</InputGroup>
			</Box>
		</Container>
	);
};
