import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FunctionComponent from './Components/FuncComponent'
import Estudiante from './Components/Estudiante'



function App() {
  
  return (

    <>
    <Estudiante nombre='Antonia' localidad="Bilbao" />
    <Estudiante nombre='Lorenzo' localidad="Marte" />
    <Estudiante nombre='Roberto' localidad="La Luna" />
    </>
  )
}

export default App
