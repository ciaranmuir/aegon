// This file is used to mock the utils.ts file in the same directory
import {DBPokemon} from "../../db/types";
// __mocks__/utils.ts
const actualUtils = jest.requireActual('../utils');

// fetchPokemon populates pokeCache with mock data
export const fetchPokemon = jest.fn().mockImplementation((pokeCache: Map<string, DBPokemon>) => {
    // Populate the global pokeCache directly
    pokeCache.clear(); // Clear any existing data
    pokeCache.set('1', { id: '1', name: 'Bulbasaur', imgURL: 'https://example.com/bulbasaur.png' });
    pokeCache.set('2', { id: '2', name: 'Ivysaur', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('3', { id: '3', name: 'Venusaur', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('4', { id: '4', name: 'Charmander', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('5', { id: '5', name: 'Charmeleon', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('6', { id: '6', name: 'Charizard', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('7', { id: '7', name: 'Squirtle', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('8', { id: '8', name: 'Wartortle', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('9', { id: '9', name: 'Blastoise', imgURL: 'https://example.com/ivysaur.png' });
    pokeCache.set('10',{ id: '10', name: 'Caterpie', imgURL: 'https://example.com/ivysaur.png' });

    // Resolve with the pokeCache as if it was fetched
    return Promise.resolve(undefined);
});

// Needed to resolve the call to createSilhouette in the getRandomPokemon() handler since
// it makes external call to non-existent imgURL
export const createSilhouette = jest.fn().mockResolvedValue(Buffer.from('mocked-buffer'));

export const generateRandomExcluding = actualUtils.generateRandomExcluding