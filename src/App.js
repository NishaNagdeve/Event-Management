 import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Wedding from './Pages/Wedding';
import Goa from './Pages/Goa';
import Food from './Pages/Food';
import Form from './Pages/Form';
import Summary from './Pages/Summary';
import Jaipur from './Pages/Jaipur';
import Himachal from './Pages/Himachal';
import Corporate from './Pages/Corporate';
import SocialEvents from './Pages/SocialEvents';
import LoginUs from './Pages/Login';
import Register from './Pages/Signup';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" to element={<Home/>}></Route>
        <Route path="/About" to element={<About/>}></Route>
        <Route path="/Portfolio" to element={<Portfolio/>}></Route>
        <Route path="/Services" to element={<Services/>}></Route>
        <Route path="/wedding" to element={<Wedding/>}></Route>
        <Route path="/Corporate" to element={<Corporate/>}></Route>
        <Route path="/wedding" to element={<SocialEvents/>}></Route>
        <Route path='/SocialEvents' to element={<SocialEvents/>}></Route>
        <Route path="/Goa" to element={<Goa/>}></Route>
        <Route path='/Food' to element={<Food/>}></Route>
        <Route path='/Form' to element={<Form/>}></Route>
        <Route path='/Summary' to element={<Summary/>}></Route>
        <Route path="/Jaipur" to element={<Jaipur/>}></Route>
        <Route path="/Himachal" to element={<Himachal/>}></Route>
        <Route path="/LoginUs" to element={<LoginUs/>}></Route> 
         <Route path='/Register' to element={<Register/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
