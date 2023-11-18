

import React from 'react';
import './Home.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontFamily: 'Chewy, cursive' }}>Bem vindo ao PetCare Finder,</h1>
        <h2 style={{ fontFamily: 'Chewy, cursive' }}>aqui você pode encontrar de tudo para o seu pet!</h2>
      </header>

      <section className="Pet-list">
        <div className="Pet-card">
          <img src="/images/petHomePage.png" alt='pet1'/>
        </div>
      </section>

      <footer className="App-footer">
        <p>&copy; 2023 Nosso Mundo Pet. Todos os direitos reservados.</p>
      </footer>  

    </div>
  );
}

export default App;
