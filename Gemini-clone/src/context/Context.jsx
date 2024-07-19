import { createContext, useState } from "react";
import run from "../config/gemini";
import DOMPurify from 'dompurify'; // Add this library for sanitizing HTML

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const formatResponse = (response) => {
        // Replace **bold** with <strong>bold</strong>
        let formatted = response.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        // Replace *italic* with <em>italic</em>
        formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");
        // Replace ## Heading ## with <h2>Heading</h2>
        formatted = formatted.replace(/##(.*?)##/g, "<h2>$1</h2>");
        // Replace <br> with line breaks
        formatted = formatted.replace(/\n/g, "<br>");

        // Sanitize the HTML
        return DOMPurify.sanitize(formatted);
    };

    const deleyPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    }

    const onSend = async (prompt) => {
        setResultData("");
        setShowResult(true); 
        setLoading(true); 
     
        //  for retreving the data from recent tab
        let response;
        if(prompt !== undefined) { 
          response = await run(prompt); 
          setRecentPrompt(prompt);
        } else {  
            setPrevPrompts(prev => [...prev, input]); 
            setRecentPrompt(input); 
            response = await run(input);
        }


       
        const formattedResponse = formatResponse(response);

        // Split by <br> to process text in chunks
        const chunks = formattedResponse.split("<br>");
        for (let i = 0; i < chunks.length; i++) {
            const nextWord = chunks[i];
            deleyPara(i, nextWord + "<br>"); // Add <br> to maintain line breaks
        }

        setLoading(false);
        setInput("");
    }

    const contextValue = {
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

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
