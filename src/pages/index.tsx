import type { NextPage } from 'next';
import { Container, Select, Table, Title, Text, Space } from '@mantine/core';
import { useState } from 'react';
import useTest from '../utils/useTest';

const Home: NextPage = () => {
	const [value, setValue] = useState<string | null>('0');
	const { findWeather } = useTest();

	// @ts-ignore
	const data = findWeather(parseInt(value));

	return (
		<Container>
			<Space h='xl' />
			<Title>FFXIV Island Rare Animals</Title>
			<Space h='xs' />
			<Text>Diese Seite ist für die Wetter abhängigen seltenen Tiere, es werden bis zu 15 Ergebnisse für die nächsten Spawns angezeigt.</Text>
			<Space h='sm' />
			<Select
				placeholder='Wähle ein Tier aus!'
				searchable
				nothingFound='Nichts gefunden'
				defaultValue={'0'}
				data={[
					{ value: '0', label: 'Orney Karakul (20, 23)', group: 'Klein' },
					{ value: '1', label: 'Beachcomb (17.8, 12.6) (00:00 - 03:00)', group: 'Klein' },
					{ value: '2', label: 'Yellow Coblyn (27, 19)', group: 'Klein' },
					{ value: '3', label: 'Twinklefleece (22.1, 20.8) (18:00 - 21:00)', group: 'Klein' },
					{ value: '4', label: 'Paissa (24,28) (12:00 - 15:00)', group: 'Mittel' },
					{ value: '5', label: 'Black Chocobo (13, 11)', group: 'Mittel' },
					{ value: '6', label: 'Grand Buffalo (12, 17)', group: 'Groß' },
					{ value: '7', label: 'Goobbue (33, 16) (09:00 - 12:00)', group: 'Groß' },
					{ value: '8', label: 'Alligator (17, 24) (06:00)', group: 'Groß' },
					{ value: '9', label: 'Gold Back (31, 28)', group: 'Groß' },
				]}
				onChange={setValue}
				transition='scale-y'
				transitionDuration={250}
				transitionTimingFunction='ease'
			/>
			<Space h='xl' />
			<Table>
				<thead>
					<tr>
						<th>Wetter</th>
						<th>Eorza Zeit</th>
						<th>Lokale Zeit</th>
						<th>Andere Informationen</th>
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</Table>
		</Container>
	);
};

export default Home;
