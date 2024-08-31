import axios from 'axios';
import {Pokemon, PokemonRandomResponse} from "../api/types";
import {createSilhouette, generateRandomExcluding} from "../utils/utils";
import {pokeCache} from "../app";
import {POKIAPI_URL} from "../consts";

export const getRandomPokemon = async (): Promise<PokemonRandomResponse | string> => {
    try {
        let ids: number[] = []
        let theChosenOne: Pokemon = {id: '', silhouette: ''}
        let nameOptions: string[] = []

        // generate random ids to pick 4 random pokemon
        for (let i = 0; i <= 3; i++ ) {
            ids.push( generateRandomExcluding(1, 50, ids))
        }

        // construct the chosenOne
        let chosenOne = pokeCache.get(ids[0].toString())
        if (!chosenOne) {
            throw new Error('Pokemon not found')
        }
        theChosenOne.id = chosenOne.id
        let silhouetteBuffer= await createSilhouette(chosenOne.imgURL)
        theChosenOne.silhouette = `data:image/png;base64,${silhouetteBuffer.toString('base64')}`

        // get the pokemon from the cache add name options
        ids.map((id, index) => {
            let p = pokeCache.get(id.toString())
            if (!p) {
                throw new Error( 'Pokemon not found')
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