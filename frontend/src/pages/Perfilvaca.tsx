// PerfilVaca.js

import Head from 'next/head';

export default function PerfilVaca() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>Perfil de Vaca</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <header>
        <h1>
          <div className="logo-container"></div>
          <img className="logo" src="img/background.jpg" alt="Logo" />
          <span>CowTrack</span>
        </h1>
      </header>
      <main>
        <div className="profile-container">
          <div className="profile">
            <img src="img/cow2.webp" alt="Foto de la vaca" />
            <h2>NOMBRE CLAVE</h2>
            <p>Raza: <strong>Raza de la vaca</strong></p>
            <p>Edad: <strong>Edad de la vaca</strong></p>
            <p>Fecha de Nacimiento: <strong>Fecha de nacimiento de la vaca</strong></p>
            <p>Peso: <strong>Peso de la vaca</strong></p>
            <p>Rancho ID: <strong>ID del rancho</strong></p>
            <button className="back-button" onClick={goBack}>Regresar</button>
          </div>
        </div>
      </main>
      <footer>
        <div className="contact-section">
          <a href="#">Contacto</a>
        </div>
      </footer>

      <style jsx>{`
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f1f1f1;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
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
            align-items: center;
            flex: 1;
        }

        .profile-container {
            background-color: #e0e0e0;
            padding: 1rem;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 600px;
        }

        .profile {
            background-color: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 600px;
        }

        .profile img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 1rem;
        }

        .profile h2 {
            margin-top: 0;
            margin-bottom: 1rem;
            color: #333;
        }

        .profile p {
            margin-top: 0;
            margin-bottom: 0.5rem;
            color: #666;
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

        footer {
            background-color:  #0d325e;
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: auto;
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
      `}</style>
    </>
  );
}
