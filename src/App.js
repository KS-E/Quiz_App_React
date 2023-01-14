import React,{useState} from "react";
import { DataContext } from "./Components/DataContext";
import Question from "./Components/Question";
import Answer from "./Components/Answer";
import StartPage from "./Components/StartPage";

export default function App() {

   const [quizState, setQuizState] = useState("StartPage")
   const [score, setScore] = useState(0) //each question is woth 3 marks, total : 15 marks

  return (
          <div className="content">
        <DataContext.Provider value={{quizState,setQuizState,score,setScore}}>
          {quizState === "StartPage" && <StartPage/>}
          {quizState === "Question" && <Question/>}
          {quizState === "Answer" && <Answer/>}
        </DataContext.Provider>
      </div>
  );
}

