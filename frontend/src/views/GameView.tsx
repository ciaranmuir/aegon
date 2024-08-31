import React, {useEffect, useState} from 'react'
import {usePokeAPI} from "../hooks/usePokeAPI";
import ButtonPanel from "../components/ButtonPanel/ButtonPanel";
const GameView = () => {
    //set up query to backend to get random pokemon
    const { getRandomPokemon, error, loading} = usePokeAPI()
    const [pokemon, setPokemon] = useState<any>(null)
    const [options, setOptions] = useState<string[]>(['char', 'mander', 'pika', 'chu'])
    useEffect(() => {
        getRandomPokemon().then((data) => {
          console.log('data', data)
        })
    },[])

    const guessHandler = (guess: string) => {

    }

    return (
        <div className={'flex flex-col min-h-full w-full max-h-full'}>
            <img className={'mx-auto mt-[2%] h-[40%]'} src={"./svgs/suspense/gaming.svg"} alt="Logo" />
            <ButtonPanel options={options} onClick={() => {}} disabled={loading}/>
        </div>
    )
}

export default GameView