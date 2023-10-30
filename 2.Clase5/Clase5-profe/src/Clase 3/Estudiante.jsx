const Estudiante = ({nombre, localidad}) => {
    console.log(nombre, localidad)
  return (
    <>
        <h5>Nombre: {nombre}</h5>
        <h5>Localidad: {localidad}</h5>
        <hr />
    </>
  )
}

export default Estudiante