import type { NextPage } from 'next';
import { Container, Select, Table } from '@mantine/core';
import { useState } from 'react';
import useTest from '../utils/useTest';

const Home: NextPage = () => {
	const [value, setValue] = useState<string | null>(null);
	const { findWeather } = useTest();

	// @ts-ignore
	const data = findWeather(parseInt(value));

	return (
		<Container>
			<h1>FFXIV Island Rare Animals</h1>
			<Select
				placeholder='Wähle ein Tier aus!'
				searchable
				nothingFound='Nichts gefunden'
				clearable
				data={[
					{ value: '0', label: 'Orney Karakul (20, 23)', group: 'Klein' },
					{ value: '1', label: 'Beachcomb (17.8, 12.6) (12am-3am)', group: 'Klein' },
					{ value: '2', label: 'Yellow Coblyn (27, 19)', group: 'Klein' },
					{ value: '3', label: 'Twinklefleece (22.1, 20.8) (6pm-9pm)', group: 'Klein' },
					{ value: '4', label: 'Paissa (24,28) (12pm-3pm)', group: 'Mittel' },
					{ value: '5', label: 'Black Chocobo (13, 11)', group: 'Mittel' },
					{ value: '6', label: 'Grand Buffalo (12, 17)', group: 'Groß' },
					{ value: '7', label: 'Goobbue (33, 16) (9am-12pm)', group: 'Groß' },
					{ value: '8', label: 'Alligator (17, 24) (6am-9am)', group: 'Groß' },
					{ value: '9', label: 'Gold Back (31, 28)', group: 'Groß' },
				]}
				onChange={setValue}
			/>
			<Table>
				<thead>
					<tr>
						<th>Wetter</th>
						<th>Eorza Zeit</th>
						<th>Lokale Zeit</th>
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</Table>
		</Container>
	);
};

export default Home;
