'use client'

import data  from '../../../data.json';
import Price from '../price/price';
import s from './filtering.module.scss';

interface FilteringProps {
	className?: string;
	selected: string[];
	setSelected: React.Dispatch<React.SetStateAction<string[]>>;
	fromPrice: number | null;
	setFromPrice: React.Dispatch<React.SetStateAction<number | null>>;
	toPrice: number | null;
	setToPrice: React.Dispatch<React.SetStateAction<number | null>>;
	setFilteredFromPrice: React.Dispatch<React.SetStateAction<number | null>>;
	setFilteredToPrice: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtering ({ className, selected, setSelected, fromPrice, setFromPrice, toPrice, setToPrice, setFilteredFromPrice, setFilteredToPrice }: FilteringProps) {

	const handleClickSelected = (item: string) => {
		setSelected(prev =>
			prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
   		);
	};

	return (
		<div className={`${className} ${s.filtering}`}>
			<div className={s.categories}>
				<span className={s.categoriesTitle}>Categories:</span>
				{(data?.categories).map((item: string) => (
					<label key={item} className={s.category}>
						<input
							className={s.categoryInput}
							type='checkbox'
							name={item}
							checked={selected.includes(item)}
          					onChange={() => handleClickSelected(item)}
						/>
						<span className={s.categoryName}>{item}</span>
					</label>
				))}
			</div>

			<Price
				fromPrice={fromPrice}
				setFromPrice={setFromPrice}
				toPrice={toPrice}
				setToPrice={setToPrice}
				setFilteredFromPrice={setFilteredFromPrice}
				setFilteredToPrice={setFilteredToPrice}
			/>
		</div>
	)	
}