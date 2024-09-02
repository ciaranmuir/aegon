import {Router} from "express";
import {getRandomPokemon, verifyPokemon} from "../handlers/pokeHandler";
import {PokemonVerifyRequest} from "../api/types";

const pokeRouter = Router()

//TODO: ENSURE PROPER ERROR HANDLING AND REQUEST BODY VALIDATION

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
        // verify request body
        if (!req.body.id || !req.body.guess) {
            return res.status(400).json({data: null, error: 'missing id or guess'})
        }

        //call handler
        let verifyReq = req.body as PokemonVerifyRequest
        let verifyResp = verifyPokemon(verifyReq.id, verifyReq.guess)
        if (typeof verifyResp === 'string') {
            return res.status(500).json({data: null, error: 'server error: ' + verifyResp})
        }

        return res.status(200).json({data: verifyResp, error: null})
    } catch(err) {
        //handler error
        return res.status(500).json({message: 'server error: ' + (err as Error).message})
    }
})

export default pokeRouter