import {Home} from './components/homepage/Home'
import './App.css'
import { Link } from './components/link/Link';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
    <Home/>
    <Link/>
    <Footer/>
    </div>
  );
}

export default App;
