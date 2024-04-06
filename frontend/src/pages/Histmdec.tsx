import { AuthButton, useRestActor } from "@bundly/ares-react";
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const backend = useRestActor("backend");

  const [data, setData] = useState<any>();
  const goBack = () => {
    window.history.back();
  };

  const onChange = (e:any)=>{
    const localData = data;
    localData[e.target.name] = e.target.value;
    setData(localData)
  }

  const sendDataToBackend = async ()=>{
      try {
          const response = await backend.post("/api/create", data, {
              headers: {
                  "Content-Type": "application/json"
              }
          });
          console.log({ response });
      } catch (error) {
          console.error({ error });
      }
  }

  return (
    <>
    <input type="text" name="name_cow" onChange={onChange} required/>
    <button onClick={sendDataToBackend}>Enviar</button>
      <Head>
        <title>CowTrack - Seguimiento de Vacas</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <h1>
          <img className="logo" src="/img/background.jpg" alt="Logo de CowTrack" />
          <span>CowTrack </span>
        </h1>
      </header>
      <main>
        <table>
          <caption>Historial Médico</caption>
          <thead>
            <tr>
              <th>Fecha Nacimiento</th>
              <th>Fecha Diagnostico</th>
              <th>Enfermedad</th>
              <th>Veterinario</th>
              <th>Vacuna</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-01-15</td>
              <td>Fiebre</td>
              <td>Antibióticos</td>
              <td>7 días</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>2023-01-15</td>
              <td>Fiebre</td>
              <td>Antibióticos</td>
              <td>7 días</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>Enfermedades</caption>
          <thead>
            <tr>
              <th>Enfermedad</th>
              <th>Tratamiento</th>
              <th>Analisis de datos</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resfriado</td>
              <td>Tos, secreción nasal</td>
              <td>Leve</td>
              <td>Descanso, antibióticos</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>Datos del Veterinario</caption>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Juan Pérez</td>
              <td>Veterinaria del rio</td>
              <td>4491234567</td>
            </tr>
            <tr>
              <td>Dr. Juan Pérez</td>
              <td>Veterinaria del rio</td>
              <td>4491234567</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>Vacunas</caption>
          <thead>
            <tr>
              <th>Vacuna ID</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Observacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01007123</td>
              <td>Fiebre Aftosa</td>
              <td>Inmunodepresora</td>
              <td>2022-12-01</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
        <button className="back-button" onClick={goBack}>Regresar</button>
      </main>
      <footer>
        <div className="contact-section">
          <a href="#">Contacto</a>
        </div>
        <div className="social-icons">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
            <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.440867 11.774368 32.53973 11.726562 29.875 11.726562 C 27.005282 11.726562 25.597656 11.766248 24.234375 11.888672 C 22.714998 12.032241 21.602386 12.47259 20.830078 13.154297 C 20.057769 13.835998 19.685547 14.71875 19.685547 16.128906 L 19.685547 18.701172 L 14 18.701172 L 14 24.044922 L 19.685547 24.044922 L 19.685547 44.53125 C 10.653297 42.782242 5 34.493883 5 25 C 5 14.042438 14.042438 5 25 5 z M 25 5 " fill="#000000"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
            <path d="M 25 3 C 12.320312 3 3 12.320312 3 25 C 3 37.679688 12.320312 47 25 47 C 37.679688 47 47 37.679688 47 25 C 47 12.320312 37.679688 3 25 3 z M 25 5 C 36.046875 5 45 13.953125 45 25 C 45 36.046875 36.046875 45 25 45 C 13.953125 45 5 36.046875 5 25 C 5 13.953125 13.953125 5 25 5 z M 36.3125 15.4375 L 36.3125 17.34375 L 18.21875 17.34375 L 18.21875 25.09375 L 26.75 25.09375 L 26.75 36.21875 L 36.3125 36.21875 L 36.3125 38.09375 L 38.09375 38.09375 L 38.09375 25.09375 L 38.09375 25.09375 L 38.09375 15.4375 L 36.3125 15.4375 z M 36.3125 15.4375 " fill="#000000"/>
          </svg>
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
