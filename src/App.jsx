import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
    <nav><Home/></nav>
    <BrowserRouter>
    <Routes>
      <Route path='/'>
      </Route>
      <Route></Route>
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App
