import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navBar';
import TopSection from './components/topsection';
import Topfooter from './components/topfooter';
import Footer from './components/footer';
import MiddleSection from './components/middleSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <TopSection/>
      <MiddleSection/>
      <Topfooter/>
      <Footer/>
    </div>
  );
}

export default App;
