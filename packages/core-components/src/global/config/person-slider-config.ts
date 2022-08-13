import { Person } from '../interfaces/Person';

export const PERSON_SLIDER_CONFIG = new Map<string, Person>([
	[
		'douglas',
		{
			key: 'douglas',
			role: 'Commander',
			name: 'Douglas Hurley',
			desc: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
			img: 'image-douglas-hurley.png',
		},
	],
	[
		'mark',
		{
			key: 'mark',
			role: 'Mission Specialist',
			name: 'MARK SHUTTLEWORTH',
			desc: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
			img: 'image-mark-shuttleworth.png',
		},
	],
	[
		'victor',
		{
			key: 'victor',
			role: 'PILOT',
			name: 'Victor Glover',
			desc: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
			img: 'image-victor-glover.png',
		},
	],
	[
		'anousheh',
		{
			key: 'anousheh',
			role: 'Flight Engineer',
			name: 'Anousheh Ansari',
			desc: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
			img: 'image-anousheh-ansari.png',
		},
	],
]);
