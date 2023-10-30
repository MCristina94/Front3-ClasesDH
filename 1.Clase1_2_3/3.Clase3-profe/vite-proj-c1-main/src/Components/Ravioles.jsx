import React from 'react'

const Ravioles = () => {
    let ravioles = [
        {id: 1, tipo: 'al pesto', precio: '$2000', img: ''}
    ]
  return (
    <div>
        {ravioles.map(raviol => <Card plato={raviol}/>)}
    </div>
  )
}

export default Ravioles