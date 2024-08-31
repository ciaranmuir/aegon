import express, {Application} from 'express'
import cors from 'cors'
import pokeRouter from './routing/pokeRouter'
import {DBPokemon} from "./db/types";
import {fetchPokemon} from "./utils/utils";

const app: Application = express()

// Define middleware
app.use((cors({
 origin: 'http://localhost:9000', // Replace with your frontend URL
})))
app.use(express.json())


// Set up "Database" of pokemon from pokeAPI
export const pokeCache: Map<string, DBPokemon> = new Map()
fetchPokemon(pokeCache).then(() => {
 console.log('Fetched Pokemon', pokeCache)
})

// Connect routes to routers
app.use('/api/pokemon', pokeRouter)

 export default app