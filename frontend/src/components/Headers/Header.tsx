import React from "react";
import {UserScore} from "../../index";


interface HeaderProps {
    score: UserScore
}
const Header = (props: HeaderProps) => {

    return (
        <div className={'flex justify-center h-[10%] max-h-[10%] bg-black-300'}>
            <div id={'score-board'}>
                <p>Score: {props.score.correct}/{props.score.correct + props.score.incorrect}</p>
            </div>
            <img className={'mx-auto mt-[2%]'} src={"./svgs/logos/logo-classic.svg"} alt="Logo" />
        </div>
    )
}

export default Header