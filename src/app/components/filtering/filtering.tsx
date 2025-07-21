import data  from '../../../data.json';
import Price from '../price/price';
import s from './filtering.module.scss';

interface FilteringProps {
  className?: string;
}

export default function Filtering ({ className }: FilteringProps) {
	return (
		<div className={`${className} ${s.filtering}`}>
			<div className={s.categories}>
				<span className={s.categoriesTitle}>Categories:</span>
				{(data?.categories).map((item: string) => (
					<label key={item} className={s.category}>
						<input className={s.categoryInput} type='checkbox' name={item} />
						<span className={s.categoryName}>{item}</span>
					</label>
				))}
			</div>

			<Price />

			<button>Apply</button>
		</div>
	)	
}