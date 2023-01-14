import React,{useContext} from 'react'
import { DataContext } from './DataContext'

export default function StartPage() {

    const {setQuizState} = useContext(DataContext)

    
  return (
  <div className="start-container">
            <div className="content">
              <h1 className="heading">General Knowledge Quiz</h1>
              <h5 className="sub-heading">Test your overall GK daily with these five questions</h5>
              <button 
                  className="startBttn"
                  onClick={()=> setQuizState("Question")}
                  >Start Quiz</button>
           </div>
   </div> 

  )
}