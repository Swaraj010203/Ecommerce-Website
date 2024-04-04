import logo from './logo.svg';
import './App.css';
import Navbar from "./component/common/Nabar";
import Homepage from './pages/HomePage/Homepage';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div>
        <Homepage/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
