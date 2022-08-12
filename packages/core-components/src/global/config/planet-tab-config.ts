import { Planet } from '../interfaces/Planet';

export const PLANET_CONFIG = new Map<string, Planet>([
	[
		'moon',
		{
			key: 'moon',
			title: 'moon',
			desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
			distance: '384,400 km',
			travel: '3 days',
		},
	],
	[
		'mars',
		{
			key: 'mars',
			title: 'mars',
			desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
			distance: '225 MIL. km',
			travel: '9 months',
		},
	],
	[
		'europa',
		{
			key: 'europa',
			title: 'europa',
			desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
			distance: '628 MIL. km',
			travel: '3 years',
		},
	],
	[
		'titan',
		{
			key: 'titan',
			title: 'titan',
			desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
			distance: '1.6 BIL. km',
			travel: '7 years',
		},
	],
]);
