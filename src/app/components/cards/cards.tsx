import data from '../../../data.json';
import s from './cards.module.scss';

interface CardsProps {
	className?: string;
	selectedCategories: string[];
	fromPrice: number | null;
	toPrice: number | null;
	naming?: string;
}

export default function Cards ({ className, selectedCategories, fromPrice, toPrice, naming }: CardsProps) {

	//categories
	let filteredProducts = selectedCategories.length === 0
    ? data.products
    : data.products.filter(product => selectedCategories.includes(product.category));

	console.log('filteredProducts', filteredProducts);

	//price
	if (fromPrice !== null && fromPrice > 0 && (toPrice === null || toPrice === 0)) {
		filteredProducts = filteredProducts.filter(product => product.price >= fromPrice); 
	}
	
	if (toPrice !== null && toPrice > 0 && (fromPrice === null || fromPrice === 0)) {
		filteredProducts = filteredProducts.filter(product => product.price <= toPrice);
	}

	if (fromPrice !== null && fromPrice > 0 && toPrice !== null && toPrice > 0) {
        filteredProducts = filteredProducts.filter(product => product.price >= fromPrice && product.price <= toPrice);
    }
	
	console.log('filteredProducts', filteredProducts);

	//sorting
	if (naming === 'default') {
		filteredProducts = filteredProducts;
	} else {
		console.log('Ooops! =)');
	}
 	
	return (
		<div className={className}>
			{filteredProducts.map(product => (
				<div key={product.id} className={s.card}>

					<picture>
                        <source media="(max-width: 445px)" srcSet={product?.image?.mobile} />
                        <source media="(max-width: 1024px)" srcSet={product?.image?.tablet} />
                        <img className={s.cardImage} src={product?.image?.desktop} alt={product.name} />
                    </picture>

					<div className={s.cardAbout}>
						<h2 className={s.cardTitle}>{product.name}</h2>
						<p className={s.cardDescription}>{product.description}</p>
						<p className={s.cardPrice}>{`${product.price} $`}</p>
						<p className={s.cardRating}>&#9733; {product.rating}</p>
						<p className={s.cardCategory}>{`# ${product.category}`}</p>
					</div>
				</div>
			))}
		</div>
	)
}