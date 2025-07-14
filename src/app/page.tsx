import Filtering from './components/filtering/filtering';

export default function Home() {
  return (
	<main>
		<h1 className="title">Product Catalog</h1>

		<div className="sorting">
			<h2>Sorting</h2>
		</div>

		<div className="filtering">
			<Filtering />
		</div>

		<div className="cards">
			<h2>Product Cards</h2>
		</div>
	</main>
  )
}
