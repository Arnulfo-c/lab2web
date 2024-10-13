import React from 'react';
import Encabezado from './Encabezado';
import Formulario from './formulario';
import Contador from './contador';
import Mensaje from './props';

function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', margin: 0, padding: '20px' }}>
            <Encabezado />
            <Formulario />
            <Contador />
            <Mensaje texto="¡Hola desde React!" />
        </div>
    );
}

export default App;
