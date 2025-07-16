import data  from '../../../data.json';
import Price from '../price/price';

interface FilteringProps {
  className?: string;
}

export default function Filtering ({ className }: FilteringProps) {
	return (
		<div className={className}>
			<ul>
				{(data?.categories).map((item: string) => (
					<li key={item}>{item}</li>
				))}
			</ul>

			<Price />

			<button id="apply-filter">Применить</button>
		</div>
	)	
}