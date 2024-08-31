import React from "react";

type ButtonPanelProps = {
    options: string[]
    onClick: (option: string) => void
    disabled: boolean
}

const ButtonPanel = (props: ButtonPanelProps) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        props.onClick(event.currentTarget.id)
    }

    return (
        <div className={'flex flex-row justify-around'}>
            {props.options.map((option, index) => {
                return (
                    <button key={index} id={option} onClick={handleClick} className={'poke-button min-w-[10%] mt-[10%]'} >{option}</button>
                )
            })}
        </div>
    )
}

export default ButtonPanel