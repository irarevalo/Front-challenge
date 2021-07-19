import logo from './logo.svg';
import './App.css';
import {AddEmployee} from './addEmployee.js';


function App() {
  return (
    <div className="App">
      <h1>Gestion de empleados:</h1>
      <AddEmployee />
    </div>
  );
}

export default App;
