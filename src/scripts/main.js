import { fetchDistributorNurseries, fetchDistributors, fetchFlowerNurseries, fetchFlowers, fetchNurseries, fetchRetailers } from "./dataAccess.js"
import { BouquetApplication } from "./BouquetApplication.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchFlowers()
        .then(() => fetchRetailers())
        .then(() => fetchDistributors())
        .then(() => fetchNurseries())
        .then(() => fetchFlowerNurseries())
        .then(() => fetchDistributorNurseries())
        .then(() => {
            mainContainer.innerHTML = BouquetApplication()
        })
}

render()