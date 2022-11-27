import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { About } from './pages/About';
import { Header } from './pages/components/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import {Shows} from './pages/Shows';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/shows' element = {<Shows/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
