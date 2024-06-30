import React, { useState } from 'react';

import './App.css'; 
import { useForm, ValidationError } from '@formspree/react';

function ContactForm(){
  const [state, handleSubmit] = useForm("xwkgakdb");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const newName = event.target[0].value;
    const newEmail = event.target[1].value;
    const newMsg = event.target[2].value;

    setName(newName);
    setEmail(newEmail);
    setMsg(newMsg);
  };

  return (
    <>
      {/* <h1 className='text-center text-3xl mt-5 text-white font-bold'>Contact me</h1> */}
      <div className="container flex justify-center">
        <form 
        action="https://formspree.io/f/xwkgakdb"
        method="POST"
        className="flex flex-col justify-center" onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="username"
            placeholder='Enter your name'
            className='mt-5 w-[30rem] h-[3rem] px-2 text-xl text-gray-400 border-solid border-2 border-sky-500 bg-slate-700 rounded-md'
          />

          <ValidationError 
           prefix="Email" 
          field="email"
           errors={state.errors}
           />

          <input
            type="email" 
            name="Email"
            placeholder='Enter your email'
            className='mt-5 w-[30rem] h-[3rem] px-2 text-xl text-gray-400 bg-slate-700 border-solid border-2 border-sky-500 rounded-md'
          /> 

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
          <textarea 
            name='message'
            cols="30"
            rows="10"
            className='mt-5 px-2 text-xl text-gray-400 bg-slate-700 border-solid border-2 border-sky-500 rounded-md'
            placeholder='Write your comment here...'
          ></textarea> 

       <ValidationError 
        prefix="Message" 
        field="message"
          errors={state.errors}
        />
          <button
            type="submit" 
            value="send"
            className='border mt-10 bg-white text-black w-[30rem] 
            h-[2rem] font-bold rounded-md'
          >
            Submit
          </button>
        </form>

        <div className="UserData text-white ml-10 mt-5 
        bg-slate-700 w-96 px-3 py-2 
        border-solid border-2 border-sky-500  rounded-md "> 
        <p>{name}</p> 
        <p>{email}</p> 
        <p>{msg}</p>
        </div> 
        
      </div>
    </>
  );
} 




function App(){
  return(
    <> 
    <ContactForm/>
    </>
  )
}

export default App;
