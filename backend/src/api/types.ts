
export interface Pokemon {
    id: string
    silhouette: string
}

export interface PokemonRandomResponse {
    pokemon: Pokemon
    nameOptions: string[]
}

export interface PokemonVerifyResponse {
    isCorrect: boolean
}

export interface ErrorResponse {
    message: string
}