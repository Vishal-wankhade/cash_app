
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Bottom from './Components/Bottom'
import Payments from './Components/Payments'
import Banking from './Components/Banking'
import CashCard from './Components/CashCard'
import Footer from './Components/Footer'


function App() {
  return (
   <div>
    <div className="App">
      <Header/>
      <Main/>
      <Bottom/>
    </div>
    <Payments/>
    <Banking/>
    <CashCard/>
    <Footer/>
    </div> 
  );
}

export default App;
