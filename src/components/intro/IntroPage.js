import React from 'react'
import styling from './IntroPage.module.css'

export default function IntroPage(props){
    return(
        <div className={styling.container}>
            <h1 className={styling.quizzical}>QUIZZICAL</h1>
            <p className={styling.pTag}>Test Your Trivia KNowledge</p>
            <button className={styling.btn} onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}