import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mid from './components/Mid'
import Rt from './components/Rt'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <>
      <Navbar></Navbar>
      <Mid></Mid>
      <Rt></Rt>
      <Footer></Footer>
      </>
    </div>
  );
}

export default App;
