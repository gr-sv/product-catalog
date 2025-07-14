import { data } from '../../../data';

interface FilteringProps {
  className?: string;
}

export default function Filtering ({ className }: FilteringProps) {

	return (
		<ul className={className}>
			{(data?.categories).map((item: string) => (
				<li key={item}>{item}</li>
			))}

			<li>Cheap first</li>
			<li>Expensive first</li>
		</ul>
	)	
}