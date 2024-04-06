import { useState } from 'react';
import Image from 'next/image';
import { useRestActor } from "@bundly/ares-react";

import Logo from "../img/background.jpg"

const FormPage = () => {
    const backend = useRestActor("backend");

    const [formData, setFormData] = useState({
        ID: '',
        Año: '',
        Fecha: '',
        Diagnostico: '',
        EnfermedadesID: '',
        Veterinario: 'Vet1' // Valor predeterminado del valor select 
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí podemos manejar el envío del formulario
        const response = await backend.post("/api/create", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f5f5f5', position: 'relative' }}>
            <header style={{ backgroundColor: '#87CEEB', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center' }}>
                <Image
                    src={Logo}
                    width={50} 
                    height={50} 
                    alt="Logo"
                    className="logo"
                    style={{ position: 'absolute', top: '10px', left: '10px' }} // Estilos para la posición del logo
                />
                <h1 style={{ margin: 0, marginLeft: '70px' }}>CowTrack</h1>
            </header>
            <form onSubmit={handleSubmit} style={{ width: '1000px', margin: '50px auto', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#333', color: 'white' }}>ID</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#333', color: 'white' }}>Año</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#333', color: 'white' }}>Fecha</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#333', color: 'white' }}>Diagnóstico</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#333', color: 'white' }}>Enfermedades ID</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#333', color: 'white' }}>Veterinario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" name="ID" value={formData.ID} onChange={handleChange} required /></td>
                            <td><input type="text" name="Año" value={formData.Año} onChange={handleChange} required /></td>
                            <td><input type="date" name="Fecha" value={formData.Fecha} onChange={handleChange} required /></td>
                            <td><input type="text" name="Diagnostico" value={formData.Diagnostico} onChange={handleChange} required /></td>
                            <td><input type="text" name="EnfermedadesID" value={formData.EnfermedadesID} onChange={handleChange} required /></td>
                            <td>
                                <select name="Veterinario" value={formData.Veterinario} onChange={handleChange}>
                                    <option value="Vet1">Veterinario 1</option>
                                    <option value="Vet2">Veterinario 2</option>
                                    <option value="Vet3">Veterinario 3</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" style={{ backgroundColor: '#333', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', width: '100%' }}>Submit</button>
            </form>
            <button onClick={() => window.location.href = 'index.html'} style={{ margin: '20px auto', display: 'block' }}>Regresar al Index</button>
            <footer style={{ backgroundColor: '#87CEEB', color: 'white', padding: '1rem', textAlign: 'center' }}>
                <div className="contact-section">
                    <a href="#">Contacto</a>
                </div>
            </footer>
        </div>
    );
};

export default FormPage;
