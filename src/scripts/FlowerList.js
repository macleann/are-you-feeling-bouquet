import { getFlowers } from "./dataAccess.js"

export const FlowerList = () => {
    const flowers = getFlowers()

    return `
        <div class="flowers">
            <ul>
        ${flowers.map(flower => {
            return `
                <li>${flower.name}</li>`
        }).join("")}
            </ul>
        </div>`
}