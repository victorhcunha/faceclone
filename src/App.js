import './App.css';
import Header from './Header';
import penguin from './resources/penguin.png'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="storiescard" style={{backgroundImage:'url(${penguin})'}}> 
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:'url(${penguin})'}}>
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:'url(${penguin})'}}>
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:'url(${penguin})'}}>
          <p>Fulano de Tal</p>
      </div>
      <div className="storiescard" style={{backgroundImage:'url(${penguin})'}}>
          <p>Fulano de Tal</p>
      </div>
    </div>
  );
}

export default App;
