import { getVillains } from "./database.js"

const villains = getVillains()

export const villainsList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>` 
    }
    villainHTML += "</ul>"

    return villainHTML
}