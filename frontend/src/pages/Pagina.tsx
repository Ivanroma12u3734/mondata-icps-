import Image from 'next/image';
import { useState } from 'react';
import Logo from './img/background.jpg';
export default function Home() {
  return (
    <>
      <header>
      <Image
                    src={Logo}
                    width={50} // Ancho del logo ajustado
                    height={50} // Altura del logo ajustada
                    alt="Logo"
                    className="logo"
                    style={{ position: 'absolute', top: '5px', left: '10px' }} // Estilos para la posición del logo
                />
                 <span>CowTrack</span>
      </header>
      <nav>
        <a href="rancho.html">Rancho</a>
        <a href="histmedc.html">Historial Médico</a>
        <a href="perfilvaca.html">Perfil de la Vaca</a>
        <a href="histpro.html">Historial de Producción</a>
      </nav>
      <section>
        <div className="section-content">
          <div className="section-text">
            <h2>Misión</h2>
            <p>Nuestra misión es proporcionar a los ganaderos una herramienta eficaz y fácil de usar para gestionar su ganado. Queremos ayudar a los ganaderos a tomar decisiones informadas y a mejorar la salud y la productividad de su ganado.</p>
          </div>
          <Image className="section-image" src="/img/ganado.jpg" alt="Imagen 1" width={400} height={300} />
        </div>
        <div className="section-content">
          <div className="section-text">
            <h2>Visión</h2>
            <p>Ser el líder en soluciones de gestión ganadera, brindando a los ganaderos las herramientas y los recursos que necesitan para tener éxito en un mundo en constante cambio.</p>
          </div>
          <Image className="section-image" src="/img/visi.jpeg" alt="Imagen 2" width={400} height={300} />
        </div>
        <div className="section-content">
          <div className="section-text">
            <h2>¿Quiénes Somos?</h2>
            <p>Somos una empresa dedicada al seguimiento y monitoreo de la localización y salud de las vacas.</p>
            <h3>A qué nos dedicamos</h3>
            <p>Nos dedicamos a proporcionar soluciones innovadoras para el seguimiento y monitoreo de la localización y salud de las vacas en los ranchos.</p>
            <h3>Por qué elegirnos</h3>
            <p>Ofrecemos tecnología de vanguardia y un equipo altamente especializado para sus necesidades de monitoreo.</p>
          </div>
        </div>
      </section>
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
        header .logo{
          height: 3rem;
          margin: 0px;
          margin-left: 1rem;
        }
        nav {
            background-color: #0077ff;
            display: flex;
            justify-content: space-around;
            padding: 1rem 0;
        }
        nav a {
            color: #ffffff;
            text-decoration: none;
        }
        nav a:hover {
            text-decoration: underline;
        }
        section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 2rem;   
        }
        .section-content {
            background-color: #7a717127;
            flex: 1 1 30rem;
            padding: 2rem;
            margin: 1rem;
            box-shadow: 0 0 1rem rgba(0,0,0,0.1);
        }
        .section-text {
            flex: 1;
        }
        .section-text h2 {
            margin: 0 0 1rem;
        }
        .section-text h3 {
            margin: 1rem 0;
        }
        .section-image {
            flex: 1;
            max-width: 100%;
            height: auto;
        }
        footer {
            background-color:  #0d325e;;
            color: white;
            text-align: center;
            padding: 2rem 0;
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

