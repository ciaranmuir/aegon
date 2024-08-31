import axios from 'axios';
import {Pokemon, PokemonRandomResponse} from "../api/types";
import {generateRandomExcluding} from "../utils/utils";
import {pokeCache} from "../app";
import {POKIAPI_URL} from "../consts";

export const getRandomPokemon = async (): Promise<PokemonRandomResponse | string> => {
    try {
        let ids: number[] = []
        let theChosenOne: Pokemon = {id: '', imgURL: ''}
        let nameOptions: string[] = []

        // generate random ids to pick 4 random pokemon
        for (let i = 0; i <= 3; i++ ) {
            ids.push( generateRandomExcluding(1, 50, ids))
        }

        // get the pokemon from the cache and populate response
        ids.map((id, index) => {
            let p = pokeCache.get(id.toString())
            if (!p) {
                throw new Error( 'Pokemon not found')
            }
            if (index === 0) {
                theChosenOne.id = p.id
                theChosenOne.imgURL = p.imgURL
            }
            nameOptions.push(p.name)
            return
        })

        return {
            pokemon: theChosenOne,
            nameOptions: nameOptions }
    } catch (error) {
        return (error as Error).message;
    }
};

export const verifyPokemon = async (name: string) => {
    try {
        const query = await axios.get(`${POKIAPI_URL}${name}`);
        return query.status === 200;

    } catch (error) {
        console.error(error);
        return null;
    }
}