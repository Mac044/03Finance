import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar';


function App() {
  return (
       <Routes>
          <Route path='/' element= {<Navbar/>}>
          <Route exact path='/' element= {<Home/>} />
          <Route path='/about' element={<About/>} />
          </Route>
       </Routes>
  )
}

export default App
