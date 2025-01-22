import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Pages/Navbar';
import Form1 from './Form.js/Form1';
import Form2 from './Form.js/Form2';
import Form3 from './Form.js/Form3';
import ComponentA from './ComponentA';
import Counter from './Pages/Counter';

function App() {
  return (
    <div className="App">
      
 {/* <ProductList/> */}

 {/* <BrowserRouter>
 <NavBar/>
 </BrowserRouter> */}
 
 {/* <Form1/> */}

 {/* <Form2/> */}

 {/* <Form3/> */}

 {/* <ComponentA name = {"It vedant "} email = {"itvedant@gmail.com"}/> */}

<Counter/>
    </div>
  );
}

export default App;
