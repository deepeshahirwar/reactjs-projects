import { useState } from 'react'

import './App.css'

function App() {
  const [height, setHeight] = useState(''); // for updating four fields , height , wegight , bmiResult, bmiMessage 
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const calculateBmi = () => { // main logic 
    if (height && weight) {
      const heightInMter = height / 100;
      const bmi = (weight / (heightInMter * heightInMter)).toFixed(2); // get bmi
      setBmiResult(bmi)

      let message = '';
      if (bmi < 18.5) {  // set bmi message according  to user bmi 
        message = 'You are Underweight'
      }
      else if (bmi >= 18.5 && bmi < 25) {
        message = "Your are Normal weight"
      }
      else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight'
      } else {
        message = 'You are Obese'
      }
      setBmiMessage(message);// updateing bmiMessage

    } else {
      setBmiMessage('')
      setBmiResult('')
    }




  }



  return (
    <>
      <div className="container  flex justify-center items-center">
        <div
          className='border-solid border-2 border-sky-500
        flex justify-center items-center flex-col 
        p-6 w-100 mt-10 rounded-xl'
        >
          <h1 className='text-white font-bold text-xl'>BMI Calculator</h1>

          <label htmlFor="height"
            className='mt-4 text-white mr-10'
          >Your height in (cm)</label>
          <input
            className='bg-slate-600  h-8 p-2 
         border-solid border-2 border-sky-500 rounded-md
         text-white'
            id="height"
            type="number"
            placeholder='enter your height'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label htmlFor="weight"
            className='mt-4 text-white mr-10'
          >Your weight in (kg)</label>
          <input
            className='bg-slate-600  h-8 p-2 
         border-solid border-2 border-sky-500 rounded-md
          text-white'
            type="number"
            id="weight"
            placeholder='enter your weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <button type='submit'
            className='bg-sky-400 mt-4 w-36 h-8
          text-white   rounded-md font-bold'
            onClick={calculateBmi}
          >Submit</button>

          <p className='text-white mt-4 mr-32 font-bold'
          >Your BMI : <span
            className='font-bold  text-sky-400'
          >{bmiResult}</span></p>

          <p className='text-white mt-2 mr-32 font-bold'
          >Result : <span
            className='font-bold  text-sky-400'
          >{bmiMessage}</span></p>




        </div>
      </div>
    </>
  )
}

export default App
