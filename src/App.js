import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedForm from './FeedForm';
import FeedPosts from './FeedPosts'
import windowsxp from './resources/windowsxp.jpg'; 


function App() {
  return (
    <div className="App">
      <Header/>
      <Stories/>
      <FeedForm/>
      <FeedPosts/>
    </div>
  );
}

export default App;
