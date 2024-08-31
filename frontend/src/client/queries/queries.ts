import {pokeClient} from "../../index";

export const queryRandomPokemon = () => {
    return pokeClient.get('/random');
};

export const queryVerifyPokemon = (id: string, guess: string) => {
    return pokeClient.post(`/verify`, {id, guess});
}