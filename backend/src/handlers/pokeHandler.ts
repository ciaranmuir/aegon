import axios from 'axios';
import {PokemonHidden, PokemonRandomResponse, PokemonVerifyResponse} from "../api/types";
import {createSilhouette, generateRandomExcluding} from "../utils/utils";
import {pokeCache} from "../app";
import {POKIAPI_URL} from "../consts";

export const getRandomPokemon = async (): Promise<PokemonRandomResponse | string> => {
    try {
        let ids: number[] = []
        let theChosenOne: PokemonHidden = {id: '', silhouette: ''}
        let nameOptions: string[] = []

        // generate random ids to pick 4 random pokemon
        for (let i = 0; i <= 3; i++ ) {
            ids.push( generateRandomExcluding(1, pokeCache.size, ids))
        }

        // construct the chosenOne
        let chosenOne = pokeCache.get(ids[0].toString())
        if (!chosenOne) {
            return 'failed to load pokemon from cache'
        }
        theChosenOne.id = chosenOne.id

        let silhouetteBuffer= await createSilhouette(chosenOne.imgURL)
        theChosenOne.silhouette = `data:image/png;base64,${silhouetteBuffer.toString('base64')}`

        // get the pokemon from the cache add name options
        ids.map((id, index) => {
            let p = pokeCache.get(id.toString())
            if (!p) {
                return 'failed to load pokemon from cache'
            }
            nameOptions.push(p.name)
            return
        })

        return {
            pokemon: theChosenOne,
            nameOptions: nameOptions }
    } catch (error) {
        console.log('error in getRandomPokemon')
        return (error as Error).message;
    }
};

export const verifyPokemon = (id: string, guess: string): PokemonVerifyResponse | string => {
    let resp: PokemonVerifyResponse
    let correctPokemon = pokeCache.get(id)
    if (!correctPokemon) {
        throw new Error('Pokemon not found')
    }

    resp = {
        isCorrect: guess === correctPokemon.name,
        correctPokemon: {
            id: correctPokemon.id,
            name: correctPokemon.name,
            imgURL: correctPokemon.imgURL
        }
    }
    return resp
}