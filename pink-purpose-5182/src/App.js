import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navBar';
import TopSection from './components/topsection';
import Topfooter from './components/topfooter';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <TopSection/>
      <Topfooter/>
      <Footer/>
    </div>
  );
}

export default App;
