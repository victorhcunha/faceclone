import './App.css';
import Header from './Header';
import Imagem from 'http://www.turismo.gov.br/sei/#';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="storiescard" style={{backgroundImage:Imagem}}> 
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:Imagem}}> 
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:Imagem}}> 
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:Imagem}}> 
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:Imagem}}> 
          <p>Fulano de Tal</p>
      </div>
    </div>
  );
}

export default App;
