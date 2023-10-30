import { useState } from 'react'
import './Card.css'

const Card = ({plato, setPedidos}) => {
  const [count, setCount] = useState(0)
  const sumar = () => {
    setCount(count+1)
  }
  const restar = () => {
    setCount(count-1)
  }

  return (
    <div className='card'>
        <img src={plato.img} alt="" className='card-img'/>
        <h3>{plato.tipo}</h3>
        <h4>{plato.precio}</h4>
        <div className='buttons'>
          <button onClick={restar}>-</button>
          <h3>{count}</h3>
          <button onClick={() => setCount(count+1)}>+</button>
        </div>
        <button onClick={() => setPedidos((prevState) => {
          return [...prevState, plato]
          })}>Agregar pizza</button>
    </div>
  )
}

export default Card