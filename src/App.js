import logo from './logo.svg';
import './App.css';

function App() {

  let posts = { color : 'blue', fontSize : '30px' } 
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={ posts }>REACT-BASIC</div>
      </div>
    </div>
  );
}

export default App;
