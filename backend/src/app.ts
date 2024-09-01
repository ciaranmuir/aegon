import express, {Application} from 'express'
import cors from 'cors'
import pokeRouter from './routing/pokeRouter'
import {DBPokemon} from "./db/types";
import {fetchPokemon} from "./utils/utils";
import {FRONTEND_URL} from "./consts";

const app: Application = express();
export let pokeCache: Map<string, DBPokemon> = new Map();


// Function to populate the pokeCache (or ignore if in test), set up the middleware and routes
 async function appInit() {
   if (process.env.NODE_ENV !== 'test') {
    console.log('populating pokeCache...');
    const fetchErr = await fetchPokemon(pokeCache);
    if (fetchErr) {
     console.log('failed to load pokemon', fetchErr);
     process.exit(1);
    }
    console.log('pokemon loaded successfully');
  } else {
     console.log('test environment detected, skipping real API calls');
  }

  // Define middleware
  app.use((cors({
   origin: FRONTEND_URL,
  })))
  app.use(express.json())

  app.use('/api/pokemon', pokeRouter);
 }

 appInit().then(() => {
  if (process.env.NODE_ENV !== 'test') {
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
   });
  }
 })


 export default app