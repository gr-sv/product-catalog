import { data } from '../../../data';

export default function Filtering () {

	return (
		<ul>
			{(data?.categories).map((item: string) => (
				<li>{item}</li>
			))}
		</ul>
	)	
}