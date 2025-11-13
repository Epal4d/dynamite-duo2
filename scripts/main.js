//import the function references that generate HTML list 

import {heroList} from "./heroes.js"
import { villainsList } from "./villains.js"

//Capture the return values of the HTML list generators 
const heroListHTML = heroList()
const villainListHTML = villainsList()

//build up a single string containing both chunks of HTML
const theWholeEnchilada = `
<h1>Heroes</h1>
${heroListHTML}

<h1>Villains</h1>
${villainListHTML}
`

const theExistingMainElement = document.querySelector("#container")
theExistingMainElement.innerHTML = theWholeEnchilada