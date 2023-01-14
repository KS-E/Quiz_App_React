import React,{useState,useContext} from 'react'
import { Data } from './Data'
import { DataContext } from './DataContext'

export default function Answer() {
 
   const {score,setQuizState,setScore} =useContext(DataContext)

   function reStart() {
        setQuizState("StartPage")
        setScore(0)
   }

  return (
        <div className="endpage-container">
         <div className="content">
          <h3 className='end-line'>You have Finshed the Quiz!</h3>
          <h3 className='score'>Your Score: {score} / 15 </h3>
          <button className="finish-bttn" onClick={reStart}>Restart Quiz</button>
              </div>
          </div>
  )
}