import React, { useState } from 'react';

//Componente de Encabezado
function header() {
    return (
        <header>
            <h1>Bienvenido a Nuestra Aplicación</h1>
        </header>
    );
}

//Componente de Formulario
function form() {
    return(
        <form>
            <label>
                Nombre:
                <input type="text" name="name" />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

// Componente de Contador que maneja el estado 
function counter () {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

// Componente que recibe props
function Greeting(props) {
    return <h2>Hola, {props.name}</h2>;
}
export default app;