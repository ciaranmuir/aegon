import React, {Dispatch, SetStateAction} from 'react'
import ButtonPanel from "../components/ButtonPanel/ButtonPanel";


// define ts props
type StartMenuViewProps = {
    setGameStarted: Dispatch<SetStateAction<boolean>>
}
const StartMenuView = (props: StartMenuViewProps) => {
     const handleStartGame = () => {
        props.setGameStarted(true)
     }
    return (
        <div className={'game-view'}>
            <div className={'poke-image-container'}>
                <img className={'mx-auto poke-pulse h-[40%]'} src={"./imgs/loading/pokeball-spinner.svg"} alt="Logo" />
            </div>
            <div className={'button-panel-container'}>
                <ButtonPanel options={['Start Game!']} onClick={handleStartGame} disabled={false}/>
            </div>
        </div>
    )
}

export default StartMenuView