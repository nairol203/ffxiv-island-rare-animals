import WeatherFinder from './weather';
import animals from '../data/animals';

export default function useTest() {
	const findWeather = (animal: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) => {
		if (isNaN(animal)) return;

		const { targetWeather, leaveBefore, times } = animals[animal];

		let weatherStartTime = WeatherFinder.getWeatherTimeFloor(new Date()).getTime() + 1;
		let weatherStartHour = WeatherFinder.getEorzeaHour(weatherStartTime);

		const zone = 'Island Sanctuary';

		let tries = 0;
		let matches = 0;
		let weather = WeatherFinder.getWeather(weatherStartTime, zone);

		let list: JSX.Element[] = [];

		while (tries < 1000 && matches < 15) {
			let weatherMatch = false;
			let timeMatch = false;

			if (targetWeather === weather) {
				weatherMatch = true;
			}

			// @ts-ignore
			if (times[weatherStartHour]) {
				timeMatch = true;
			}

			if (weatherMatch && timeMatch) {
				const weatherDate = new Date(weatherStartTime);

				list.push(
					<tr key={weatherDate.toLocaleString()}>
						<td>{weather}</td>
						<td>
							{weatherStartHour < 10 ? '0' : ''}
							{weatherStartHour}:00
						</td>
						<td>{weatherDate.toLocaleString().slice(0, weatherDate.toLocaleString().length - 3)}</td>
						<td>{leaveBefore.length ? `Verlasse deine Insel vor ${leaveBefore} Eorza Zeit.` : '-'}</td>
					</tr>
				);
				matches++;
			}

			weatherStartTime += 8 * 175 * 1000; // Increment by 8 Eorzean hours
			weatherStartHour = WeatherFinder.getEorzeaHour(weatherStartTime);

			weather = WeatherFinder.getWeather(weatherStartTime, zone);
			tries++;
		}

		if (matches === 0) {
			console.log('code is buggy :D');
		}

		return list;
	};

	return { findWeather };
}
