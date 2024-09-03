import React, {useState} from 'react'
import {createRoot} from "react-dom/client";
import './index.css'
import axios from "axios";
import GameView from "./views/GameView";
import StartMenuView from "./views/StartMenuView";
import Header from "./components/Headers/Header";
import {serverURL} from "./consts";

export const pokeClient = axios.create({
    baseURL: serverURL,
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
        <div id={'app-view'}>
            <Header score={score}/>
            <div id={'app-body'}>
                { !gameStarted ?
                    <StartMenuView setGameStarted={setGameStarted}/> :
                    <GameView score={score} setScore={setScore}/>
                }
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App/>)