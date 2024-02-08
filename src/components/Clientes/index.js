import React from "react";
import './index.css';

export default function Clientes() {
  return(
    <body>
      <div className="body">
        
        <div className="container">
          
          <div className="cabecalho">
            <div className="titulo-cliente">Clientes</div>
            <div className="ferramentas">
              <div className="filtro">Filtrar</div>
              <button className="adicionar">+</button>
            </div>
          </div>

          <div className="lista">
            <div className="lista-cliente">
              <ul className="cliente">
                <li>Cliente 01</li>
                <li>cliente01@exemplo.com</li>
                <li>000.000.000-01</li>
              </ul>
              <ul className="cliente">
                <li>Cliente 02</li>
                <li>cliente02@exemplo.com</li>
                <li>000.000.000-02</li>
              </ul>
              <ul className="cliente">
                <li>Cliente 03</li>
                <li>cliente03@exemplo.com</li>
                <li>000.000.000-03</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </body>
  )
}