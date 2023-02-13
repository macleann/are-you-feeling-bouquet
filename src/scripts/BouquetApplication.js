import { FlowerList } from "./FlowerList.js"
import { RetailerList } from "./RetailerList.js"

export const BouquetApplication = () => {
    return `
    <h1>Are You Feeling Bouquet</h1>
    <section>
        <h2>Flowers</h2>
        ${FlowerList()}
    </section>
    <section>
        <h2>Retailers</h2>
        ${RetailerList()}
    </section>`
}