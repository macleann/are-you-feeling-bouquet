import { getDistributorNurseries, getDistributors, getFlowerNurseries, getFlowers, getNurseries, getRetailers } from "./dataAccess.js"

export const RetailerList = () => {
    const retailers = getRetailers()
    const distributors = getDistributors()
    const nurseries = getNurseries()
    const flowers = getFlowers()
    const flowerNurseries = getFlowerNurseries()
    const distributorNurseries = getDistributorNurseries()

    return `
    <div class="retailers">
        ${retailers.map(retailer => {
            const matchingDistributor = distributors.find(distributor => retailer.distributorId === distributor.id)
            const distNursRelationships = distributorNurseries.filter(distributorNursery => distributorNursery.distributorId === matchingDistributor.id)
            const matchingNurseries = distNursRelationships.map(rel => {
                return nurseries.find(nursery => rel.nurseryId === nursery.id)
            })
            const flowerNurseryRel = []
            matchingNurseries.map(nursery => {
                return flowerNurseries.filter(flowerNursery => {
                    if (flowerNursery.nurseryId === nursery.id) {
                        return flowerNurseryRel.push(flowerNursery)
                    }
                })
            })
            const retailFlowers = flowerNurseryRel.map(rel => {
                return flowers.find(flower => rel.flowerId === flower.id)
            })

            return `
        <h3>${retailer.name}</h3>
            <section class="retailer__address">
                Located at ${retailer.address}, ${retailer.city}, ${retailer.state}
            </section>
            <section>
                Distributor: ${matchingDistributor.name}
                <section>
                    Nursery Sources:
                    <ul>
                        ${matchingNurseries.map(nursery => `<li>${nursery.name}</li>`).join("")}
                    </ul>
                </section>
            </section>
            <section>
                Flowers sold:
                <ul>
                    ${retailFlowers.map(flower => `<li>${flower.name}</li>`).join("")}
                </ul>
            </section>`
        }).join("")}
    </div>`
}