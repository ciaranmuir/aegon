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
                    <button
                        className={`poke-button min-w-[10%] disabled:bg-gray-700 disabled:text-gray-200 mt-[10%]`}
                        key={index}
                        id={option}
                        onClick={handleClick}
                        disabled={props.disabled}
                    >
                        {option}
                    </button>
                )
            })}
        </div>
    )
}

export default ButtonPanel