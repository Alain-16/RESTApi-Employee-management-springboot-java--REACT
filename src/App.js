
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Employee from './components/pages/Employee';
import Departments from './components/pages/Departments';
import Payroll from './components/pages/Payroll';
import Events from './components/pages/Events';





function App() {
  return (
    <div className="App">
              <Routes>
    <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/employees' element={<Employee/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/departments' element={<Departments/>}></Route>
    <Route path='/payroll' element={<Payroll/>}></Route>
    <Route path='/events' element={<Events />}></Route>
    </Routes>
    
  </div>
    
  );
}

export default App;
