import React, {useState} from 'react'
import {createRoot} from "react-dom/client";
import './index.css'
import axios from "axios";
import GameView from "./views/GameView";
import StartMenuView from "./views/StartMenuView";
import Header from "./components/Headers/Header";

export const pokeClient = axios.create({
    baseURL: 'http://localhost:3000/api/pokemon/',
    timeout: 1000,
})
export interface UserScore {
    correct: number,
    incorrect: number
}
const App = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false)
    const [score, setScore] = useState<UserScore>({ correct: 0, incorrect: 0 })

    return (
        <div id={'main-view'}>
            <Header score={score}/>
            <div className={'flex justify-center w-full h-[90%] max-h-[90%] bg-black-300'}>
                { gameStarted ?
                    <StartMenuView setGameStarted={setGameStarted}/> :
                    <GameView score={score} setScore={setScore}/>
                }
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App/>)