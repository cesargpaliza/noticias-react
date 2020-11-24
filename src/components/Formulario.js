import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Formulario extends Component {
    
    state = {
        categoria: 'general'
    }

    cambiarCategoria = e => {
        this.setState({
            categoria: e.target.value
        }, () =>{
            this.props.consultarNoticias(this.state.categoria);
        });
    }
    
    render() {
        return (
            <div>
                <select onChange={this.cambiarCategoria}>
                    <option value="general">General</option>
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="health">Salud</option>
                    <option value="science">Ciencia</option>
                    <option value="sports">Deportes</option>
                    <option value="technology">Tecnología</option>                    
                </select>
            </div>
        )
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired,
}