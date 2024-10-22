import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello world Welcome to React App
        </h1>
        <div>
          <div>
                <a className="btn btn-primary mb-2 mr-2" href="/signup">Signup</a>
                </div>
                <div>
                <a className="btn btn-primary mb-2 mr-2" href="/login">Login</a>
                </div>
                <div>
                <a className="btn btn-primary mb-2 mr-2" href="/ProfilePage">ProfilePage</a>
                </div>
            </div> 
        </header>
    </div>
  );
}

export default App;
