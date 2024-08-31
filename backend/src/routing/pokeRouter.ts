import {Router} from "express";
import {getRandomPokemon} from "../handlers/pokeHandler";

const pokeRouter = Router()

pokeRouter.get('/random', async (req, res) => {
    try {
        //call handler
        let pokeResp = await getRandomPokemon()
        return res.status(200).json({data: pokeResp, error: null})
    } catch(err) {
        //handler error
        return res.status(500).json({message: 'error'})
    }
})
pokeRouter.get('/verify', async (req, res) => {
    try {
        //call handler
        return res.status(200).json({message: 'success'})
    } catch(err) {
        //handler error
        return res.status(500).json({message: 'error'})
    }
})

export default pokeRouter