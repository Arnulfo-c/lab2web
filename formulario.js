import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nombre: ${nombre}\nEmail: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', textAlign: 'center' }}>Enviar</button>
        </form>
    );
}

export default Formulario;
