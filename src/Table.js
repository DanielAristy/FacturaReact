import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        //tabla donde se van almacenar los productos con cada uno de sus campos
        <thead>
            <tr>
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
        //Donde se mapean los datos que fueron obtenidos en la entrada de texto
        return (
            <tr key={index}>             
                <td>{row.idProducto +=1}</td>
                <td>{row.nombre}</td>
                <td>{"$" + row.precio}</td>
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
            //Cargan componentes de la tabla
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;

