import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Id Factura</th>
                <th>Id Producto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Eliminar</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            
            <tr key={index}>
                <td>{row.idFactura}</td>
                <td>{row.idProducto}</td>
                <td>{row.nombre}</td>
                <td>{row.precio}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Eliminar</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;

