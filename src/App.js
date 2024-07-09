import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Shops from './Pages/Shops';
import ProductDetails from './component/ProductDetails';
import About from './component/About';

function App() {
  return (
   <>
   <div className='' >
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home/>}/>
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/blog" element={<Blogs/>} />
          <Route exact path="/shop" element={<Shops/>} />
          <Route exact path="/about" element={<About/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
   
   </div>    
   </> 
  );
}

export default App;
