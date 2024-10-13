import React from 'react';

/**
 * 
 * 
 * @param {object} props 
 */
const Mensaje = (props) => {
    return <p style={{ textAlign: 'center', color: '#333' }}>{props.texto}</p>;
}

export default Mensaje;
