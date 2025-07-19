import data from '../../../data.json'

interface CardsProps {
	className?: string;
}

export default function Cards ({ className }: CardsProps) {
	return (

		<div className={className}>
			{(data?.products).map(product => (
				<div key={product.id}>
					<h2>{product.name}</h2>
					<p>{product.description}</p>
					<p>{product.price}</p>
					<p>{product.rating}</p>
					<img src={product.image.desktop} style={{ width: '200px', height: '200px' }} />
					<p>{product.category}</p>
				</div>
			))}
		</div>
	)
}