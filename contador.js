import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Contador: {contador}</p>
            <button onClick={incrementar} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Incrementar</button>
        </div>
    );
}

export default Contador;
