import {Router} from "express";
import {getRandomPokemon, verifyPokemon} from "../handlers/pokeHandler";
import {PokemonVerifyRequest} from "../api/types";

const pokeRouter = Router()

pokeRouter.get('/random', async (req, res) => {
    try {
        //call handler
        let pokeResp = await getRandomPokemon()
        if (typeof pokeResp === 'string') {
            return res.status(500).json({data: null, error: pokeResp})
        }
        return res.status(200).json({data: pokeResp, error: null})
    } catch(err) {
        //handler error
        return res.status(500).json({message: 'error'})
    }
})
pokeRouter.post('/verify', async (req, res) => {
    try {
        //call handler
        let verifyReq = req.body as PokemonVerifyRequest
        console.log('query', req)
        let verifyResp = verifyPokemon(verifyReq.id, verifyReq.guess)
        if (typeof verifyResp === 'string') {
            return res.status(500).json({data: null, error: verifyResp})
        }
        return res.status(200).json({data: verifyResp, error: null})
    } catch(err) {
        //handler error
        return res.status(500).json({message: 'error'})
    }
})

export default pokeRouter