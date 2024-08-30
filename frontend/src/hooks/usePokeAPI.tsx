import {useState} from "react";
import {queryRandomPokemon, queryVerifyPokemon} from "../client/queries/queries";


export const usePokeAPI = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const getRandomPokemon = async () => {
        setLoading(true)
        setError(null)
        try {
            const resp = await queryRandomPokemon()
            return resp.data
        } catch (err) {
            setError('getRandomPokemon failed: ' + err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }
    const verifyPokemon = async (id: string, guess: string) => {
        setLoading(true)
        setError(null)
        try {
            const resp = await queryVerifyPokemon(id, guess)
            return resp.data
        } catch (err) {
            setError('getRandomPokemon failed: ' + err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    return {
        getRandomPokemon,
        verifyPokemon,
        loading,
        error
    }
}