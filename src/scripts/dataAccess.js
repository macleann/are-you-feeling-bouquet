const applicationState = {}
const API = "http://localhost:8088"

export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
        .then(res => res.json())
        .then(data => applicationState.flowers = data)
}

export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
        .then(res => res.json())
        .then(data => applicationState.retailers = data)
}

export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
        .then(res => res.json())
        .then(data => applicationState.distributors = data)
}

export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
        .then(res => res.json())
        .then(data => applicationState.nurseries = data)
}

export const fetchFlowerNurseries = () => {
    return fetch(`${API}/flowerNurseries`)
        .then(res => res.json())
        .then(data => applicationState.flowerNurseries = data)
}

export const fetchDistributorNurseries = () => {
    return fetch(`${API}/distributorNurseries`)
        .then(res => res.json())
        .then(data => applicationState.distributorNurseries = data)
}

export const getFlowers = () => applicationState.flowers.map(flower => ({...flower}))
export const getRetailers = () => applicationState.retailers.map(retailer => ({...retailer}))
export const getDistributors = () => applicationState.distributors.map(distributor => ({...distributor}))
export const getNurseries = () => applicationState.nurseries.map(nursery => ({...nursery}))
export const getFlowerNurseries = () => applicationState.flowerNurseries.map(flowerNursery => ({...flowerNursery}))
export const getDistributorNurseries = () => applicationState.distributorNurseries.map(distributorNursery => ({...distributorNursery}))