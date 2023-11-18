import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div className="contato-container">
      <h1>Entre em Contato</h1>
      <p>Estamos felizes em ouvir de você. Entre em contato conosco!</p>

      <div className="contato-info">
          <div>
            <strong>Endereço:</strong>
            <p>Rua dos Pets, 123</p>
            <p>Cidade dos Animais, PA</p>
            <p>CEP: 12345-678</p>
          </div>

          <div>
            <strong>Telefone:</strong>
            <p>(123) 456-7890</p>
          </div>

          <div>
            <strong>Email:</strong>
            <p>contato@meusanimais.com</p>
          </div>
      </div>

    </div>
  );
}

export default Contato;
