'use client'

import { useState } from 'react';
import Filtering from './components/filtering/filtering';
import Sorting from './components/sorting/sorting';
import Cards from './components/cards/cards';

export default function Home() {

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	console.log('selectedCategories', selectedCategories)

	const [fromPrice, setFromPrice] = useState(0);
	console.log('fromPrice', fromPrice);

	return (
		<main className='main'>
			<h1 className="title">Product Catalog</h1>

			<Sorting className="sorting"/>

			<Filtering
				className="filtering"
				selected={selectedCategories}
            	setSelected={setSelectedCategories}
				fromPrice={fromPrice}
				setFromPrice = {setFromPrice}
			/>

			<Cards
				className="cards"
				selectedCategories={selectedCategories}
			/>
		</main>
  )
}
