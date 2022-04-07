import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import  Home  from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DarkModeProvider} from './context/DarkModeContext';


function App() {
  return (
    <DarkModeProvider>
      <Router>
        <NavBar ></NavBar>
        
        <Routes>
          <Route exact path='/gallery' element={<Gallery></Gallery>} />
          <Route exact path='/contact-form' element={<ContactForm></ContactForm>}/>
          <Route exact path='/' element={<Home></Home>}/>
          
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
