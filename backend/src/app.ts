import express, {Application} from 'express'
import cors from 'cors'
import pokeRouter from './routing/pokeRouter'

const app: Application = express()

// Define middleware
app.use((cors({
 origin: 'http://localhost:9000', // Replace with your frontend URL
})))
app.use(express.json())

// Connect routes to routers
app.use('/api/pokemon', pokeRouter)

 export default app