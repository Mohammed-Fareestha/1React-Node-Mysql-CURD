import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Student from './components/Student'
import Create from './components/Create'


function App() {
  return (
    <div style={{  backgroundColor: 'aliceblue'}}>   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>} ></Route>
          <Route path='/create' element={<Create/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
