import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets' 
import { Context } from '../../context/Context' ;

export const Main = () => { 
 
  const {onSend, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div> 

      {/* for four cards */}
      <div className="main-container"> 
       
       {!showResult
       ?<> 
          <div className="greet">
          <p><span>Hello, Deepesh.</span></p>
          <p>  How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest an organized list of the best food spots in a city</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Help explain a concept in a kid-friendly way</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Suggest beaches to visit in a city, including details</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Write a product description for a new type of toothbrush</p>
            <img src={assets.code_icon} alt="" />
          </div>


        </div>  
        </> 
        : <div className="result">
          <div className="result-title">  
            <img src={assets.user_icon} alt="" />
            <p className='question'>{recentPrompt}</p>
          </div> 

          <div className="result-data"> 
            <img src={assets.gemini_icon} alt="" />  
              {loading
              ? <div className="loader"> 
              <hr />
              <hr />
              <hr />
              
              </div>
              : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
              }

             
          </div>

        </div>
       
       }

       
         
    
        
        <div className="main-bottom">
          <div className="search-box"> 
            <input 
            onChange={(e) => setInput(e.target.value)} 
            value={input}
            type="text" placeholder="Enter a promp here.." />
             
             <div> 
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
               {input? <img  
              onClick={() => onSend()}
              src={assets.send_icon} alt="" /> : null}
             </div>
          </div>  
           
           <p className="bottom-info"> 
           Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
           </p>
        </div>


      </div>

    </div>
  )
}
