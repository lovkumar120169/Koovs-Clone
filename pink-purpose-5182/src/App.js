import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navBar';
import Topfooter from './components/topfooter';
import Footer from './components/footer';
import LandingPage from './components/landing';
import Product from './components/product';
import SingleProduct from './components/singleProductpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <SingleProduct/>
      <Topfooter/>
      <Footer/>
    </div>
  );
}

export default App;

{/* <LandingPage/> */}
{/* 
       */}

{/* <Product/> */}