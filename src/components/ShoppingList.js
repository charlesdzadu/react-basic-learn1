import { plantList } from "../data/plantList"
import CareScale from "./CareScale"

function ShoppingList() {
	return (
		<ul>
			{plantList.map((plant) => (
				<li key={plant.id}>
					{plant.name}
					<CareScale scaleValue={3} />
				</li>
			))}
		</ul>
	)
}

export default ShoppingList
