import React from 'react';
import Logo from './img/background.jpg';
const Home = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            <style jsx>{`
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
                header {
                    background-color: #ffffff;
                    color: rgb(0, 0, 0);
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                }
                header h1 {
                    display: flex;
                    align-items: center;
                    margin: 0;
                }
                header .logo {
                    height: 3rem;
                    margin: 0px;
                    margin-left: 1rem;
                }
                main {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                }
                footer {
                    background-color: #0d325e;
                    color: white;
                    padding: 1rem;
                    text-align: center;
                }
                header img.side-image {
                    width: 50px;
                    height: 50px;
                    object-fit: fill;
                    margin-left: auto;
                }
                body img.bottom-image {
                    display: block;
                    margin: auto;
                    width: 50%;
                    height: auto;
                }
                .contact-section {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1rem;
                }
                .contact-section a {
                    color: white;
                    text-decoration: none;
                    margin: 0 10px;
                }
                .contact-section a:hover {
                    text-decoration: underline;
                }
                .back-button {
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .back-button:hover {
                    background-color: #0077ff;
                }
            `}</style>
            <header>
                <h1>
                    <div className="logo-container"></div>
                    <img className="logo" src="/img/background.jpg" alt="Logo" />
                    <span>CowTrack</span>
                </h1>
            </header>
            <main>
                <h2>WELCOME TO COWTRACK</h2>
                <p>Aqui podras encontrar informacion relacionada con tu rancho</p>
                <img className="side-image" src="/img/cow1.webp" alt="Side image" />
                <h3>Rancho ID </h3>
                <p></p>
                <ul>
                    <li>Nombre del rancho</li>
                    <li>Direccion</li>
                    <li>Telefono</li>
                </ul>
                <br />
                <br />
                <img className="bottom-image" src="/img/cow2.webp" alt="Bottom image" />
                <br />
                <br />
                <button className="back-button" onClick={goBack}>Regresar</button>
            </main>
            <footer>
                <div className="contact-section">
                    <a href="#">Contacto</a>
                </div>
            </footer>
        </>
    );
};

export default Home;

