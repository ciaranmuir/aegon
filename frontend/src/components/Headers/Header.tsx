import React, {useEffect} from "react";
import {UserScore} from "../../index";


interface HeaderProps {
    score: UserScore
}
const Header = (props: HeaderProps) => {
    const flashScore = (flashType: string) => {
        const scoreBoard = document.getElementById('score-board')
        if (scoreBoard) {
            scoreBoard.classList.add(flashType)
            setTimeout(() => {
                scoreBoard.classList.remove(flashType)
            }, 500)
        }
    }
    useEffect(() => {
        if (props.score.incorrect > 0) {
            flashScore('score-flash-incorrect')
        }
    }, [props.score.incorrect]);

    useEffect(() => {
        if (props.score.correct > 0) {
            flashScore('score-flash-correct')
        }
    }, [props.score.correct]);
    return (
        <div id={'app-header'}>
            <div id={'score-board'} className={''}>
                <p>Score: {props.score.correct}/{props.score.correct + props.score.incorrect}</p>
            </div>
            <img id={'header-img'} src={"./imgs/logos/logo-classic.svg"} alt="Logo" />
        </div>
    )
}

export default Header