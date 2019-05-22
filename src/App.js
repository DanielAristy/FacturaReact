/*importar los componentes*/
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import { ReactComponent as Logo } from './Logo.svg';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <Logo />
                <p>Agregar los productos a la factura.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <button class="generar">Generar</button>
                <h3>Nuevo producto</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
