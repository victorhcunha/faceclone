import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedForm from './FeedForm';
import windowsxp from './resources/windowsxp.jpg'; 


function App() {
  return (
    <div className="App">
      <Header/>
      <Stories/>
      <FeedForm/>

      <div className="feedposts">
          <div className="feedpostsingle">
            <div className="feedpostprofile">
                <img src={windowsxp} alt="img"/>
                <h3>Fulano de Tal</h3>
                <span>4h</span>
            </div>
            <div className= "feedpostcontent">
              <p>Conteúdo publicado</p>
              <img src={windowsxp} alt="img"/>
            </div>

          </div>
      </div>

    </div>
  );
}

export default App;
