import React, { Fragment } from 'react'

const Estudiante = (props) => {
    console.log(props)
  return (
    <Fragment>
        <h2>Nombre: {props.nombre}</h2>
        <h2>Localidad: {props.localidad}</h2>
        <hr />
    </Fragment>
  )
}

export default Estudiante

//rafce para crear componentes de función
//rcc para crear componentes de clase