import React, {Dispatch, SetStateAction} from 'react'


// define ts props
type StartMenuViewProps = {
    setGameStarted: Dispatch<SetStateAction<boolean>>
}
const StartMenuView = (props: StartMenuViewProps) => {
     const handleStartGame = () => {
        props.setGameStarted(true)
     }
    return (
        <div className={'flex flex-col'}>
            <img className={'mx-auto mt-[2%] poke-pulse h-[40%]'} src={"./svgs/suspense/pokeball.svg"} alt="Logo" />
            <button className={'poke-menu-button mt-[30%]'} onClick={handleStartGame}>Start Game!</button>
        </div>
    )
}

export default StartMenuView