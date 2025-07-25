import data from '../../../data.json';
import s from './cards.module.scss';

interface CardsProps {
	className?: string;
}

export default function Cards ({ className }: CardsProps) {
	return (

		<div className={className}>
			{(data?.products).map(product => (
				<div key={product.id} className={s.card}>
					<h2 className={s.cardTitle}>{product.name}</h2>
					<p className={s.cardDescription}>{product.description}</p>
					<p className={s.cardPrice}>{`${product.price} $`}</p>
					<p className={s.cardRating}>&#9733; {product.rating}</p>
					<img className={s.cardImage} src={product.image.desktop} />
					<p className={s.cardCategory}>{`# ${product.category}`}</p>
				</div>
			))}
		</div>
	)
}