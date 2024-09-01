import app, {pokeCache} from "../src/app";
import request from 'supertest';
import {fetchPokemon} from "../src/utils/utils";

jest.mock('../src/utils/utils');
beforeAll(async () => {
    console.log('fetching mock pokemon')
    let fErr = await fetchPokemon(pokeCache)
});
describe('GET /api/pokemon/random', () => {
    it('should return a random pokemon', async () => {
        const response = await request(app).get('/api/pokemon/random');

        expect (response.status).toBe(200);
        expect(response.body.data).toHaveProperty('pokemon');
        expect(response.body.data).toHaveProperty('nameOptions');
    })
})