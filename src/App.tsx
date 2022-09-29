import { Container, Stack } from '@chakra-ui/react';

import { SearchCity } from 'components/SearchCity';
import { WeatherResult } from 'components/WeatherResult';
import { WeatherSidebar } from 'components/WeatherSidebar';

const App = () => {
  return (
		<Container maxW="7xl">
    	<SearchCity />

			<Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={8}>
				<WeatherResult />
				<WeatherSidebar />
			</Stack>
		</Container>
  );
};

export default App;
