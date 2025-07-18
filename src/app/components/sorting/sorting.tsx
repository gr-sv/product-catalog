interface SortingProps {
  className?: string;
}

export default function Sorting ({ className }: SortingProps) {
	return (

		<label className={className}>

			<select name="sorting">
				<option value="high to low">Price: high to low</option>
				<option value="low to high">Prive: low to high</option>
				<option value="rating">Rating</option>
				<option value="naming">Naming</option>
			</select>

		</label>
	)
}