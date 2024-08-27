import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getRandomPokemon = async () => {
  try {
    const randomId: number = Math.floor(Math.random() * 50) + 1;
    const response = await axios.get(`${POKEAPI_URL}${randomId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const verifyPokemon = async (name: string) => {
    try {
        const query = await axios.get(`${POKEAPI_URL}${name}`);
        return query.status === 200;

    } catch (error) {
        console.error(error);
        return null;
    }
}