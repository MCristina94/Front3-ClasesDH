import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent, { OtroEjemplo, OtroElemento } from './Clase 3/ClassComponent'
import FuncComponent from './Components/FuncComponent'
import Estudiante from './Components/Estudiante'

function App() {


  return (
    <>
      {/* <ClassComponent />
      <OtroEjemplo/>
      <OtroElemento/>

      <FuncComponent /> */}


      <Estudiante nombre='Agustina' localidad='Bilbao'/>
      <Estudiante nombre='Luciano' localidad='Marte'/>
      <Estudiante nombre='Matias' localidad='Centro de la tierra'/>

      
    </>
  )
}

export default App
