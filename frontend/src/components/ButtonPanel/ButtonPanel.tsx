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
        <div className={'button-panel'}>
            {props.options.map((option, index) => {
                return (
                    <button
                        className={`poke-button button-panel-button`}
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