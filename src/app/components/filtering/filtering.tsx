import data  from '../../../data.json';
import Price from '../price/price';
import s from './filtering.module.scss';

interface FilteringProps {
  className?: string;
}

export default function Filtering ({ className }: FilteringProps) {
	return (
		<div className={`${className} ${s.filtering}`}>
			<ul>
				{(data?.categories).map((item: string) => (
					<li key={item}>{item}</li>
				))}
			</ul>

			<Price />

			<button>Apply</button>
		</div>
	)	
}