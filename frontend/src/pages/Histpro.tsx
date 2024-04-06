// PerfilProduccionLeche.js

import Head from 'next/head';

export default function PerfilProduccionLeche() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>CowTrack - Seguimiento de Vacas</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <header>
        <h1>
          <img className="logo" src="img/background.jpg" alt="Logo de CowTrack" />
          <span>CowTrack </span>
        </h1>
      </header>
      <main>
        <div className="production-profile">Perfil de Producción de Leche</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ID vaca</th>
              <th>Fecha de Extracción</th>
              <th>Cantidad de Producción</th>
              <th>Calidad</th>
              <th>Observación</th>
              <th>Rancho ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="image-cell"><img src="img/cow2.webp" alt="Imagen de la vaca" /></td>
              <td>007</td>
              <td>2024-03-28</td>
              <td>25 litros</td>
              <td>Buena</td>
              <td>-</td>
              <td>Rancho001</td>
            </tr>
          </tbody>
        </table>
        <button className="back-button" onClick={goBack}>Regresar</button>
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
          margin-right: 1rem;
        }

        main {
          flex: 1;
          padding: 2rem;
          text-align: center;
        }

        .production-profile {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          margin-bottom: 1.5rem;
          background-color: white;
        }

        th, td {
          padding: 0.5rem;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #0077ff;
          color: white;
          min-width: 100px;
        }

        .image-cell {
          width: 100px;
        }

        .image-cell img {
          width: 100%;
          border-radius: 50%;
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
          background-color:  #0d325e;;
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
          text-decoration: none;
          margin: 0 10px;
          color: white;
        }

        .contact-section a:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 600px) {
          main {
            padding: 1rem;
          }

          table {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}

