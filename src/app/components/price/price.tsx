'use client'

import s from './price.module.scss';

interface FilteringProps {
	fromPrice: number | null;
	setFromPrice: React.Dispatch<React.SetStateAction<number | null>>;
	toPrice: number | null;
	setToPrice: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Price ({ fromPrice, setFromPrice, toPrice, setToPrice }: FilteringProps) {

	const handleChangeFromPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const valueFromPrice = event.target.value;
		const numericValueFromPrice = parseInt(valueFromPrice, 10);
		setFromPrice(isNaN(numericValueFromPrice) ? null : numericValueFromPrice);
	};

	const handleChangeToPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const valueToPrice = event.target.value;
		const numericValueToPrice = parseInt(valueToPrice, 10);
		setToPrice(isNaN(numericValueToPrice) ? null : numericValueToPrice);
	};

	// const handleClickButton = () => {
	// 	handleChangeFromPrice();
	// 	handleChangeToPrice();
	// }

	return (
		<div className={s.price}>
			<span className={s.priceTitle}>Price:</span>
			
			<label>
				<input
					className={s.priceInput}
					type='number'
					name='from-price'
					min='0'
					step='1'
					placeholder='From:'
					value={fromPrice ?? ''}
					onChange={handleChangeFromPrice}
				/>
			</label>
			
			<label>
				<input
					className={s.priceInput}
					type='number'
					name='to-price'
					min='0'
					step='1'
					placeholder='To:'
					value={toPrice ?? ''}
					onChange={handleChangeToPrice}
				/>
			</label>

			<button
				className={s.categoryButton}
				// onClick={handleClickButton}
			>
				Apply
			</button>
		</div>
	)	
}