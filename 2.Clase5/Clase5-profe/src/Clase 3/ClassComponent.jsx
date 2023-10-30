import { Component } from 'react'

export default class ClassComponent extends Component {
    render(){
        return (
            <div>
                <h1>Este es mi componente de clase</h1>
                <p>Esto es un paragraph</p>
            </div>
        )
    }
}

class OtroElemento extends Component {
    render(){
        return (
            <h2>Este es otro elemento</h2>
        )
    }
}

class OtroEjemplo extends Component {
    render(){
        return (
            <h2>Este es otro elemento</h2>
        )
    }
}

export { OtroEjemplo, OtroElemento }







