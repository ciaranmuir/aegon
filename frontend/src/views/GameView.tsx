import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {usePokeAPI} from "../hooks/usePokeAPI";
import ButtonPanel from "../components/ButtonPanel/ButtonPanel";
import {queryVerifyPokemon} from "../client/queries/queries";
import {UserScore} from "../index";

interface GameViewProps {
    score: UserScore
    setScore: Dispatch<SetStateAction<UserScore>>
}

const GameView = (props: GameViewProps) => {
    //set up query to backend to get random pokemon
    const { getRandomPokemon, verifyPokemon, error, loading} = usePokeAPI()
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined)
    const [options, setOptions] = useState<string[]>(['?', '?', '?', '?'])

    // handleSetUp queries the backend to get a new pokemon and set the options
    const handleSetUp = () => {
        getRandomPokemon().then((resp) => {
            if (resp) {
                setPokemon(resp.data.pokemon)
                console.log('data', resp.data.nameOptions)
                setOptions(resp.data.nameOptions)
            } else if (error) {
                console.log('error', error)
            }
        })
    }

    // handlerGuess queries the backend to verify the guess
    const handlerGuess = (guess: string) => {
        console.log('guess', guess)
        queryVerifyPokemon(pokemon?.id ?? '', guess).then((resp) => {
            if (resp) {
                handleSetUp()
            } else if (error) {
                console.log('error', error)
            }
        })
    }

    useEffect(() => {
        handleSetUp()
    },[])

    return (
        <div className={'game-view'}>
            {
                loading ?
                    <div className={'flex flex-row justify-center'}>
                        <img className={'mx-auto poke-pulse mt-[2%] h-60'} src={"./svgs/suspense/pokeball.svg"} alt="Logo" />
                    </div>
                    :
                    <div className={'flex flex-row justify-center'}>
                        <img className={'mx-auto mt-[2%] h-60'} src={pokemon ? pokemon.silhouette : "./svgs/suspense/gaming.svg"} alt="Logo" />
                    </div>
            }
            <div className={'button-panel-container'} >
                <ButtonPanel options={options} onClick={handlerGuess} disabled={loading}/>
            </div>
        </div>
    )
}

export default GameView