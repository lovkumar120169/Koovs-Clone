import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navBar';
import Topfooter from './components/topfooter';
import Footer from './components/footer';
import LandingPage from './components/landing';
import Product from './components/product';
import SingleProduct from './components/singleProductpage';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      
      <Topfooter/>
      <Footer/>
    </div>
  );
}

export default App;

{/* <LandingPage/> */}
{/* <Navbar/> */}
{/* <LandingPage/> */}
{/* 
    <SingleProduct/>  */}

{/* <Product/> */}