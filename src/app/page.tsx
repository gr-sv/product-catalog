import Filtering from './components/filtering/filtering';
import Sorting from './components/sorting/sorting';

export default function Home() {
  return (
	<main>
		<h1 className="title">Product Catalog</h1>

		<div className="sorting">
			<Sorting />
		</div>

		<Filtering className="filtering"/>

		<div className="cards">
			<h2>Product Cards</h2>
		</div>
	</main>
  )
}
