import {Router} from "express";

const pokeRouter = Router()

pokeRouter.get('/random', async (req, res) => {
    try {
        //call handler
    } catch(err) {
        //handler error
    }
})
pokeRouter.get('/verify', async (req, res) => {
    try {
        //call handler
    } catch(err) {
        //handler error
    }
})

export default pokeRouter