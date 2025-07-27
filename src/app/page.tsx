import Filtering from './components/filtering/filtering';
import Sorting from './components/sorting/sorting';
import Cards from './components/cards/cards';

export default function Home() {
  return (
	<main className='main'>
		<h1 className="title">Product Catalog</h1>

		<Sorting className="sorting"/>

		<Filtering className="filtering"/>

		<Cards className="cards"/>
	</main>
  )
}
