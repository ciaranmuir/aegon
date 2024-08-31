import {DBPokemon} from "../db/types";
import {POKIAPI_URL} from "../consts";
import axios from "axios";

export async function fetchPokemon(pokeCache: Map<string, DBPokemon>): Promise<any> {
    const maxPokemon = 50
    try {
        for (let i = 1; i <= maxPokemon; i++) {
            const response = await axios.get(`${POKIAPI_URL}/${i}`)
            const pokemon = response.data
            pokeCache.set(pokemon.name, {
                id: pokemon.id,
                name: pokemon.name,
                imgURL: pokemon.sprites.front_default
            })
        }
    } catch (error) {
        console.log(error)
    }
}
