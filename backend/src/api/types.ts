
export interface PokemonHidden {
    id: string
    silhouette: string
}

export interface PokemonReveal {
    id: string
    name: string
    imgURL: string
}

export interface PokemonRandomResponse {
    pokemon: PokemonHidden
    nameOptions: string[]
}

export interface PokemonVerifyRequest {
    id: string
    guess: string
}

export interface PokemonVerifyResponse {
    isCorrect: boolean
    correctPokemon: PokemonReveal
}

export interface ErrorResponse {
    message: string
}