export default function Price () {
	return (
		<div>
			<span>Price:</span>
			
			<label>
				<input
					type='number'
					name='min-price'
					min='0'
					step='1'
					placeholder='From:'
				/>
			</label>
			
			<label>
				<input
					type='number'
					name='max-price'
					min='0'
					step='1'
					placeholder='To:'
				/>
			</label>
		</div>
	)	
}