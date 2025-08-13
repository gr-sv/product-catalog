'use client'

import { useState } from 'react';
import data  from '../../../data.json';
import Price from '../price/price';
import s from './filtering.module.scss';

interface FilteringProps {
  className?: string;
}

export default function Filtering ({ className }: FilteringProps) {

	const [selected, setSelected] = useState<string | null>(null);

	const handleClickSelected = (item: string) => {
        setSelected(item);
    }

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
							checked={selected === item}
          					onChange={() => handleClickSelected(item)}
						/>
						<span className={s.categoryName}>{item}</span>
					</label>
				))}
			</div>

			<Price />

			<button className={s.categoryButton}>Apply</button>
		</div>
	)	
}