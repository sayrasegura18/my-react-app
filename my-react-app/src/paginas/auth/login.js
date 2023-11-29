import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import '../../css/ie6.css';
import '../../css/ie7.css';


const Login = () => {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login - Tienda de Productos de Mascotas</title>
  <style dangerouslySetInnerHTML={{__html: "\n            body {\n                background-color: #ffffcc; /* Amarillo claro */\n                font-family: Arial, sans-serif;\n            }\n    \n            .login-container {\n                max-width: 400px;\n                margin: 100px auto;\n                padding: 20px;\n                background-color: #fff;\n                border-radius: 8px;\n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n            }\n    \n            h2 {\n                color: #f39c12; /* Amarillo oscuro */\n            }\n    \n            label {\n                display: block;\n                margin: 10px 0 5px;\n                color: #333;\n            }\n    \n            input {\n                width: 100%;\n                padding: 8px;\n                margin-bottom: 10px;\n                box-sizing: border-box;\n            }\n    \n            button {\n                background-color: #f39c12;\n                color: #fff;\n                padding: 10px;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: 16px;\n            }\n    \n            button:hover {\n                background-color: #e08e0b; /* Amarillo más oscuro al pasar el ratón */\n            }\n        " }} />
  <link href="../../css/style.css" rel="stylesheet" type="text/css" />
  <link href="../../css/ie6.css" rel="stylesheet" type="text/css" />
  <link href="../../css/ie7.css" rel="stylesheet" type="text/css" />
  <div id="header"> <a href="#" id="logo"><img src="images/logo.gif" width={310} height={114} alt /></a>
    <ul className="navigation">
      <li className="active"><a href="/index2">Home</a></li>
      <li><a href="/petmart">PetMart</a></li>
      <li><a href="/about">About us</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/petguide">PetGuide</a></li>
      <li><a href="/contact">Contact us</a></li>
    </ul>
    <div className="login-container">
      <h2>Login</h2>
      <form action="#" method="post"> {/* Puedes ajustar la acción y el método según tus necesidades */}
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div></div>

    );
};

export default Login;
