interface PokemonHidden {
    id: string
    silhouette: string
}

interface PokemonReveal {
    id: string
    name: string
    imgURL: string
}
interface PokemonRandomResponse {
    pokemon: PokemonHidden
    nameOptions: string[]
}

interface PokemonVerifyResponse {
    isCorrect: boolean
    correctPokemon: PokemonReveal
}