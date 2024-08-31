import React, {useState} from 'react'
import {createRoot} from "react-dom/client";
import './index.css'
import axios from "axios";
import GameView from "./views/GameView";
import StartMenuView from "./views/StartMenuView";

export const pokeClient = axios.create({
    baseURL: 'http://localhost:3000/api/pokemon/',
    timeout: 1000,
})
export interface UserScore {
    correct: number,
    incorrect: number,
    totalGuess: number
}
const App = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false)
    const [score, setScore] = useState<UserScore>({ correct: 0, incorrect: 0, totalGuess: 0 })
    return (
        <div id={'main-view'}>
            <div className={'flex justify-center h-[10%] max-h-[10%] bg-black-300'}>
                <img className={'mx-auto mt-[2%]'} src={"./svgs/logos/logo-classic.svg"} alt="Logo" />
            </div>

            <div className={'flex justify-center w-full h-[90%] max-h-[90%] bg-black-300'}>
                { gameStarted ?
                    <StartMenuView setGameStarted={setGameStarted}/> :
                    <GameView/>
                }
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App/>)