import logo from './assets/logo_aria.png';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar logo={logo}/>
      </header>
    </div>
  );
}

export default App;
