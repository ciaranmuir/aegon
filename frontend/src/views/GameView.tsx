import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from 'react'
import {usePokeAPI} from "../hooks/usePokeAPI";
import ButtonPanel from "../components/ButtonPanel/ButtonPanel";
import {queryVerifyPokemon} from "../client/queries/queries";
import {UserScore} from "../index";
import {pokeloadingImg} from "../consts";
interface GameViewProps {
    score: UserScore
    setScore: Dispatch<SetStateAction<UserScore>>
}

const GameView = (props: GameViewProps) => {
    //set up query to backend to get random pokemon
    const { getRandomPokemon, verifyPokemon, error, loading} = usePokeAPI()
    const [pokemonHidden, setPokemonHidden] = useState<PokemonHidden | undefined>(undefined)
    const [options, setOptions] = useState<string[]>(['?', '?', '?', '?'])
    const [pokemonRevealed, setPokemonRevealed] = useState<PokemonReveal | undefined>(undefined)
    const [disabled, setDisabled] = useState<boolean>(false)

    // handleSetUp queries the backend to get a new pokemon and set the options
    const handleSetUp = useCallback( () => {
        getRandomPokemon().then((resp) => {
            if (resp) {
                setPokemonHidden(resp.data.pokemon)
                setOptions(resp.data.nameOptions)
            } else if (error) {
                console.log('error', error)
            }
        })
    }, [])

    // handlerGuess queries the backend to verify the guess
    const handlerGuess = useCallback((guess: string) => {
        setDisabled(true)
        verifyPokemon(pokemonHidden?.id ?? '', guess).then((resp) => {
            if (resp.data) {
                setPokemonRevealed(resp.data.correctPokemon)
                if (resp.data.isCorrect) {
                    props.setScore({...props.score, correct: props.score.correct + 1})
                } else {
                    props.setScore({...props.score, incorrect: props.score.incorrect + 1})
                }
                setTimeout(() => {
                    setPokemonRevealed(undefined)
                    setPokemonHidden(undefined)
                    setOptions(['?', '?', '?', '?'])
                    setDisabled(false)
                    handleSetUp()
                }, 2000)
            } else if (error) {
                console.log('error', error)
            }
        })
    }, [pokemonHidden])

    useEffect(() => {
        handleSetUp()
    },[])

    useEffect(() => {

    }, []);
    return (
        <div className={'game-view'}>
            <div className={'poke-image-container text-center'}>
                {loading ? (
                    <img className="poke-image silhouetted animate-spin" src={pokeloadingImg} alt="Loading" />
                ) : !pokemonRevealed ? (
                    <img className={`poke-image`} src={pokemonHidden?.silhouette} alt="Pokemon" />
                ) : (
                    <>
                        <img className={'poke-image-reveal'} src={pokemonRevealed.imgURL} alt="Pokemon" />
                        <p>{pokemonRevealed.name}</p>
                    </>
                )}
            </div>
            {
                !loading && pokemonHidden &&
                <div className={'button-panel-container'} >
                    <ButtonPanel options={options} onClick={handlerGuess} disabled={disabled}/>
                </div>
            }
        </div>
    )
}

export default GameView