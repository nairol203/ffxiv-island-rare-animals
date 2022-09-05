import WeatherFinder from './weather';
import animals from '../data/animals';

export default function useTest() {
	const findWeather = (animal: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) => {
		if (isNaN(animal)) return;

		const { targetWeather } = animals[animal];

		let weatherStartTime = WeatherFinder.getWeatherTimeFloor(new Date()).getTime() + 1;
		let weatherStartHour = WeatherFinder.getEorzeaHour(weatherStartTime);

		const zone = 'Island Sanctuary';

		let tries = 0;
		let matches = 0;
		let weather = WeatherFinder.getWeather(weatherStartTime, zone);
		let prevWeather = WeatherFinder.getWeather(weatherStartTime - 1, zone);

		let list: JSX.Element[] = [];

		while (tries < 100 && matches < 15) {
			let weatherMatch = targetWeather === null;

			if (targetWeather === weather) {
				weatherMatch = true;
			}

			if (weatherMatch) {
				const weatherDate = new Date(weatherStartTime);

				list.push(
					<tr key={weatherDate.toLocaleString()}>
						<td>{weather}</td>
						<td>
							{weatherStartHour < 10 ? '0' : ''}
							{weatherStartHour}:00
						</td>
						<td>{weatherDate.toLocaleString().slice(0, weatherDate.toLocaleString().length - 3)}</td>
					</tr>
				);
				matches++;
			}

			weatherStartTime += 8 * 175 * 1000; // Increment by 8 Eorzean hours
			weatherStartHour = WeatherFinder.getEorzeaHour(weatherStartTime);

			prevWeather = weather;
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
