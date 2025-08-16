import s from './price.module.scss';

export default function Price () {
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