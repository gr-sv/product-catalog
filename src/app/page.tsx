'use client'

import { useState } from 'react';
import Filtering from './components/filtering/filtering';
import Sorting from './components/sorting/sorting';
import Cards from './components/cards/cards';

export default function Home() {

	//categories
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	console.log('selectedCategories', selectedCategories)

	//price
	const [fromPrice, setFromPrice] = useState<number | null>(null);
	console.log('fromPrice', fromPrice);

	const [toPrice, setToPrice] = useState<number | null>(null);
	console.log('toPrice', toPrice);

	const [filteredFromPrice, setFilteredFromPrice] = useState<number | null>(null);
	console.log('filteredFromPrice', filteredFromPrice);

	const [filteredToPrice, setFilteredToPrice] = useState<number | null>(null);
	console.log('filteredToPrice', filteredToPrice);

	//sorting
	const [naming, setNaming] = useState<string>('default');
	console.log('selector value', naming);

	return (
		<main className='main'>
			<h1 className="title">Product Catalog</h1>

			<Sorting
				className="sorting"
				naming={naming}
				setNaming={setNaming}
			/>

			<Filtering
				className="filtering"
				selected={selectedCategories}
            	setSelected={setSelectedCategories}
				fromPrice={fromPrice}
				setFromPrice={setFromPrice}
				toPrice={toPrice}
				setToPrice={setToPrice}
				setFilteredFromPrice={setFilteredFromPrice}
				setFilteredToPrice={setFilteredToPrice}
			/>

			<Cards
				className="cards"
				selectedCategories={selectedCategories}
				fromPrice={filteredFromPrice}
                toPrice={filteredToPrice}
				// naming={naming}
			/>
		</main>
  )
}
