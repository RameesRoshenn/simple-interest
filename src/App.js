
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';

import './App.css';
import { useState } from 'react';


function App() {
  // jscode
  const [Interest, setInterest] = useState(0)
  const [Principle, setPrinciple] = useState(0)
  const [Rate, setRate] = useState(0)
  const [Year, setYear] = useState(0)
  const [isPrinciple, setIsPrincipal] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) => {
    const { name, value } = e.target
    // console.log(name, value);
    // console.log(value.match(/^[0-9]+$/));
    if (!!value.match(/^[0-9/*.?[0-9]+$/)) {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrincipal(true)
      }

      else if (name === 'rate') {
        setRate(value)
        setIsRate(true)
      }
      else {
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrincipal(false)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsRate(false)
      }
      else {
        setYear(value)
        setIsYear(false)
      }

    }
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!Principle || !Rate || !Year){
      alert('please fill the form')
    }
    else{
      // alert('Submiited')
      setInterest(Principle*Rate*Year/100)
    }
  } 
  const handleReset=(e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)
  }



  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{ width: '500px' }} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easily</p>
        <div style={{ height: '150px' }} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100'>
          <h1>₹ {''} {Interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form onSubmit={handleCalculate} className='mt-5'>
          <div className='mb-3'>
            <TextField name='principle' className='w-100 ' value={Principle || ''} onChange={(e) => validate(e)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>
          {!isPrinciple &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
            <TextField name='rate' className='w-100 ' value={Rate || ''} onChange={(e) => validate(e)} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          {!isRate &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
            <TextField name='year' className='w-100 ' value={Year || ''} onChange={(e) => validate(e)} id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>
          {!isYear &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <Button type='submit' className='bg-success' disabled={isPrinciple && isRate && isYear?false:true} style={{ width: '200px', height: '50px' }} variant="contained">Calculate</Button>
              <Button onClick={handleReset} style={{ width: '200px', height: '50px' }} variant="outlined">Reset</Button>
            </Stack>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
