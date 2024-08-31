interface Pokemon {
    id: string
    silhouette: string
}

interface PokemonRandomResponse {
    pokemon: Pokemon
    nameOptions: string[]
}