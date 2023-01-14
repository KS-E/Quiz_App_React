import React,{useState,useContext,useEffect} from 'react'
import { Data } from './Data'
import { DataContext } from './DataContext'

export default function Question() {

    const {score,setScore,setQuizState} = useContext(DataContext)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answerSelect,setAnswerSelect] = useState('')

  function handleClick () {

    if(answerSelect !== '' ){
          if(Data[currentIndex].correctanswer === answerSelect){
        setScore(score + 3)
       }
          setCurrentIndex(currentIndex + 1)
          // console.log(answerSelect)
          setAnswerSelect('')
    } else {
      alert("Please Select an Option!")
    }
 
  }

  function finishQuiz(){
    //for the last question 
    if(answerSelect !== '' ){
     if(Data[currentIndex].correctanswer === answerSelect){
        setScore(score + 3)
    }
     setQuizState("Answer")
     } else {
      alert("Please Select an Option to complete quiz!")
     }
  }


  return (
        <div className="question-container">
          <div className="content">
            <h3 className='question'>{Data[currentIndex].question}</h3>
            <div className='answer-options'>
                    <button className='answer' onClick={()=> setAnswerSelect('answer1') }>{Data[currentIndex].answer1}</button>
                    <button className='answer' onClick={()=> setAnswerSelect('answer2') }>{Data[currentIndex].answer2}</button>
                    <button className='answer' onClick={()=> setAnswerSelect('answer3') }>{Data[currentIndex].answer3}</button>
                    <button className='answer' onClick={()=> setAnswerSelect('answer4') }>{Data[currentIndex].answer4}</button>
            </div>
           {currentIndex === Data.length -1 ? <button className="finish-bttn" onClick={finishQuiz}>Finish Quiz</button>
                      : <button  className="nextQuestion-bttn" onClick={handleClick}>Next Question</button> }
        </div> 
    </div>
  )
}
