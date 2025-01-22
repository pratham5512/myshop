import React, { useContext } from 'react'
import './navbar.css'
import { Route,Routes,link, NavLink } from 'react-router-dom'
import Contact from './Contact'
import Product from './Product'
import Home from './Home'

import { ThemeContext } from './Theme'
import light from './sun.svg';
import dark from './moon-solid.svg';

function NavBar (){
let {theme, setTheme}=useContext(ThemeContext);
let obj={};

if(theme=='dark'){
  obj={
    backgroundColor:"black",
    color:"white"
  }
}
else{
  obj={
    backgroundColor:"white",
    color:"black"
  }
}
  return (
    <div style={obj}>

          <nav>
           
        <div >
      {/*             
            <a  href='/home' >Home</a>
            <a href='/contact'>Contact</a>
            <a href='/product'>Product</a> */}

            {/* <Link  href='/home' >Home</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/product'>Product</Link> */}


            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            
            <NavLink to='/product'>Product</NavLink>
             
            {
              theme=='dark'?<img src={light} onClick={()=> {setTheme("light")}} style={{height:"20px", width:"20px"}}></img>:<img  src={dark} onClick={()=>{setTheme("dark")}}  style={{height:"20px", width:"20px"}}></img>
            }

            </div>
            </nav>
         


        <Routes>
            <Route path='/home' element={<Home/>} ></Route>
            <Route path='/contact' element={<Contact/>} ></Route>
            <Route path='/product' element={<Product/>} ></Route>
        </Routes>
      
    </div>
  )
}

export default NavBar