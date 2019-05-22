import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            idFactura: '',
            idProducto: '',
            nombre: '',
            precio: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { idProducto,nombre,precio } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>idProducto</label>
                <input 
                    type="text" 
                    name="idProducto" 
                    value={idProducto} 
                    onChange={this.handleChange} />
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={nombre} 
                    onChange={this.handleChange} />
                <label>Precio</label>
                <input 
                    type="text" 
                    name="precio" 
                    value={precio} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Agregar
                </button>
            </form>
        );
    }
}

export default Form;