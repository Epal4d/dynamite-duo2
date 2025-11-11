export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
    id: 1,
    name: "Frostbite",
    power: "Ice manipulation"
        },
        {
    id: 2,
    name: "Shadowstrike",
    power: "Darkness control"
        },
        {
    id: 3,
    name: "Mindbender",
    power: "Telepathy"
        },
        {
    id: 4,
    name: "Toxin",
    power: "Poison generation"
    }
    ]
}
export const getVillains = () => {
    return structuredClone(database.villains);
}