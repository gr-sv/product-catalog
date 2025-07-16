export default function Price () {
	return (
		<div>
			Price:
			<label>
				<input type='number' id='min-price' name='min-price' min='0' step='1' placeholder='From:' />
			</label>
			

			<label>
				<input type='number' id='max-price' name='max-price' min='0' step='1' placeholder='To:' />
			</label>
		</div>
	)	
}