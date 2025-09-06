import s from './sorting.module.scss';

interface SortingProps {
  className?: string;
  naming?: string;
  setNaming: (value: string) => void;
}

export default function Sorting ({ className, setNaming }: SortingProps) {

	const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNaming(event.target.value);
    };

	return (
		<div className={className}>
			<select className={s.sortingValues} name="sorting" onChange={handleSortChange}>
				<option value="default">Default</option>
				<option value="high to low">Price: high to low</option>
				<option value="low to high">Price: low to high</option>
				<option value="rating">Rating</option>
				<option value="naming">Naming</option>
			</select>
		</div>
	)
}