import React, {useState} from 'react'
import {createRoot} from "react-dom/client";
import './index.css'
import axios from "axios";
import GameView from "./views/GameView";
import StartMenuView from "./views/StartMenuView";

// either this or from indigo-400 to-red-500 w/ white-glitch logo
const bgStyling1 = "p-10 bg-gradient-to-br from-indigo-300 to-blue-100 text-white text-center max-h-full w-full"
const bgStyling2 = "p-10 bg-gradient-to-br from-indigo-700 to-red-500 text-white text-center min-h-[100vh] max-h-[100vh] w-[100vw]"

export const pokeClient = axios.create({
    baseURL: 'http://localhost:3000/api/pokemon/',
    timeout: 1000,
})
const App = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false)

    return (
        <div className={bgStyling2}>
            <div className={'flex justify-center h-[10%] max-h-[10%] bg-black-300'}>
                <img className={'mx-auto mt-[2%]'} src={"./svgs/logos/logo-classic.svg"} alt="Logo" />
            </div>

            <div className={'flex justify-center w-full h-[90%] max-h-[90%] bg-black-300'}>
                { !gameStarted ?
                    <StartMenuView setGameStarted={setGameStarted}/> :
                    <GameView/>
                }
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App/>)