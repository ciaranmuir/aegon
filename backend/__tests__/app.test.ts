import app, {pokeCache} from "../src/app";
import request from 'supertest';
import {fetchPokemon} from "../src/utils/utils";

jest.mock('../src/utils/utils');
beforeEach(async () => {
    console.log('fetching mock pokemon')
    let fErr = await fetchPokemon(pokeCache)
});

// /api/pokemon/random TESTS
describe('GET /api/pokemon/random', () => {
    // Test 1 - GET /api/pokemon/random - 200
    it('should return a random pokemon', async () => {
        const response = await request(app).get('/api/pokemon/random')
        let data = response.body.data
        let correctName = pokeCache.get(data?.pokemon?.id)?.name

        expect (response.status).toBe(200)
        expect(data.pokemon).toBeDefined()
        expect(data.pokemon.id).toBeDefined()
        expect(data.pokemon.silhouette).toBeDefined()
        expect(data.nameOptions).toBeDefined()
        expect(data.nameOptions.length).toBe(4)
        expect(data.nameOptions).toContain(correctName)
    })
})


// /api/pokemon/verify TESTS
describe('POST /api/pokemon/verify', () => {
    // Test 1 - POST /api/pokemon/verify - 200 (correct)
    it('should return a pokemon verify response for correct answer', async () => {
        const response = await request(app).post('/api/pokemon/verify').send({
            id: '1',
            guess: 'Bulbasaur'
        })
        let data = response.body.data

        expect (response.status).toBe(200)
        expect(data.isCorrect).toBeDefined()
        expect(data.isCorrect).toBe(true)
        expect(data.correctPokemon).toBeDefined()
        expect(data.correctPokemon.id).toBe('1')
        expect(data.correctPokemon.name).toBe('Bulbasaur')
        expect(data.correctPokemon.imgURL).toBe('https://example.com/bulbasaur.png')
    })

    // Test 2 - POST /api/pokemon/verify - 200 (incorrect)
    it('should return a pokemon verify response for incorrect answer', async () => {
        const response = await request(app).post('/api/pokemon/verify').send({
            id: '1',
            guess: 'Ivysaur'
        })
        let data = response.body.data

        expect (response.status).toBe(200)
        expect(data.isCorrect).toBeDefined()
        expect(data.isCorrect).toBe(false)
        expect(data.correctPokemon).toBeDefined()
        expect(data.correctPokemon.id).toBe('1')
        expect(data.correctPokemon.name).toBe('Bulbasaur')
        expect(data.correctPokemon.imgURL).toBe('https://example.com/bulbasaur.png')
    })

    // Test 3 - POST /api/pokemon/verify - 400 (missing id)
    it('should return a 400 error (no id)', async () => {
        const response = await request(app).post('/api/pokemon/verify').send({
            guess: 'Bulbasaur'
        })

        expect(response.status).toBe(400)
        expect(response.body.error).toBe('missing id or guess')
    })

    // Test 4 - POST /api/pokemon/verify - 400 (missing guess)
    it('should return a 400 error (no guess)', async () => {
        const response = await request(app).post('/api/pokemon/verify').send({
            id: '1'
        })

        expect(response.status).toBe(400)
        expect(response.body.error).toBe('missing id or guess')
    })
})
