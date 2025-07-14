import { data } from '../../../data';

export default function Filtering () {

	return (
		<ul>
			{(data?.categories).map((item: string) => (
				<li key={item}>{item}</li>
			))}

			<li>Cheap first</li>
			<li>Expensive first</li>
		</ul>
	)	
}