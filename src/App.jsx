import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState('grey')

  function changeColor(color){
    setColor(color)
  }
  return (
    <>
    {/* <h1 className='text-3xl font-bold text-white px-3'>RAINBOW BACKGROUND COLOR PICKER</h1> */}
    <div className='w-full h-screen duration-200' style={{ backgroundColor:color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full bg-violet-400 text-black shadow-lg'
        onClick={()=>changeColor('purple')}>VIOLET</button>

        <button className='outline-none px-4 py-1 rounded-full  bg-indigo-500 text-black shadow-lg'
        onClick={()=>changeColor('indigo')}>INDIGO</button>

        <button className='outline-none px-4 py-1 rounded-full bg-blue-600 text-black shadow-lg'
        onClick={()=>changeColor('blue')}>BLUE</button>

        <button className='outline-none px-4 py-1 rounded-full bg-green-600 text-black shadow-lg'
        onClick={()=>changeColor('green')}>GREEN</button>

        <button className='outline-none px-4 py-1 rounded-full bg-amber-300 text-black shadow-lg'
        onClick={()=>changeColor('yellow')}>YELLOW</button>

         <button className='outline-none px-4 py-1 rounded-full bg-orange-500 text-black shadow-lg' onClick={()=>changeColor('orange')}>ORANGE</button>
        <button className='outline-none px-4 py-1 rounded-full bg-red-600 text-black shadow-lg'onClick={()=>changeColor('red')}>RED</button>
      </div>
     </div>
    </div>
    </>
  )
}

export default App
