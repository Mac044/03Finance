import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';


function App() {
  return (
    <div>
       <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/src/pages/about.jsx' element={<About/>} />
       </Routes>
    </div>
 

  )
}

export default App
