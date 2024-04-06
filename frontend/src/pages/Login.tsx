import React, { useState } from 'react';

// Función para la página de inicio de sesión
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST al servidor Next.js para manejar la autenticación
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      // Maneja la respuesta del servidor (puedes redirigir al usuario a otra página o mostrar un mensaje)
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <div className="register-link">
        <span>¿No tienes una cuenta?</span> <a href="ejemplo.html">Regístrate</a>
      </div>
    </div>
  );
};

export default LoginPage;
