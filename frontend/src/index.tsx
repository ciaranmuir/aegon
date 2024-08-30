import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from "react-dom/client";
import './index.css'

const App = () => {
    return (
        <div className={'p-10 bg-blue-500 text-white text-center'}>
            <h1 className={'text-3xl font-bold'}>Hellogfsgfdsafd World</h1>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App/>)