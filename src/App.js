import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Registrar-se</h1>
      <RegisterForm sendForm={sendForm} />
    </div>
  );
}

function sendForm(data) {
  console.log(data);

}

export default App;
