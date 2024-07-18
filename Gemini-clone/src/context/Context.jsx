import { createContext } from "react";  
import { useState } from "react";
import run from "../config/gemini"; 

export const Context = createContext(); 

const ContextProvider = (props) => {  
      const [input, setInput] = useState(""); 
    const [recentPrompt, setRecentPrompt] = useState(""); 
    const [prevPrompts, setPrevPrompts] = useState([]); 
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [resultData, setResultData] = useState("");



    const onSend = async (prompt) => { 
        setResultData(""); 
        setShowResult(true); 
        setLoading(true);  

        setRecentPrompt(input)
       
    
    const response =  await run(input) 
    setResultData(response); 
    setLoading(false); 
    setInput("");
    } 
    

   const contextValue ={
       prevPrompts,
       setPrevPrompts,
       input,
       setInput,
       recentPrompt,
       setRecentPrompt,
       showResult,
       loading,
       resultData,
       onSend
   } 

   return(
    <Context.Provider  value={contextValue}>
    {props.children}
    </Context.Provider>
   )
} 

export default ContextProvider;