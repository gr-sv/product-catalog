'use client'

import s from './price.module.scss';

interface FilteringProps {
	fromPrice: number;
	setFromPrice: React.Dispatch<React.SetStateAction<number>>;
}

export default function Price ({ fromPrice, setFromPrice }: FilteringProps) {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const numericValue = parseInt(value, 10);
		setFromPrice(numericValue);
	};

	return (
		<div className={s.price}>
			<span className={s.priceTitle}>Price:</span>
			
			<label>
				<input
					className={s.priceInput}
					type='number'
					name='min-price'
					min='0'
					step='1'
					placeholder='From:'
					value={fromPrice}
					onChange={handleChange}
				/>
			</label>
			
			<label>
				<input
					className={s.priceInput}
					type='number'
					name='max-price'
					min='0'
					step='1'
					placeholder='To:'
				/>
			</label>

			<button className={s.categoryButton}>Apply</button>
		</div>
	)	
}