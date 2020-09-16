import React,{useState} from 'react';
import Display from "./display";
import {BrowserRouter,Route} from "react-router-dom";
import Cart from './cart';
import About from './About';
import Navbar from './navbar';
import iphone from "./img/iphone.png";
import a1 from "./img/a1.png";
import a2 from "./img/a2.png";
import a3 from "./img/a3.jpg";
import a4 from "./img/a4.jpg";
import a5 from "./img/a5.jpg";

function App() {
  const [cartitems,setcartItems] =useState([]);
    const [items, setitems] = useState([
      {id:1,name:"iphone",img:iphone,cost:1000},
    {id:2,name:"a1",img:a1,cost:700},
    {id:3,name:"a2",img:a2,cost:500},
    {id:4,name:"a3",img:a3,cost:600},
    {id:5,name:"a4",img:a4,cost:800},
    {id:6,name:"a5",img:a5,cost:400}])

    const RemoveCartItem=(id)=>{
      let NewCartItems=cartitems.filter(item=>item.id!=id)
      setcartItems(NewCartItems)
    }

  return (
    <BrowserRouter>
      <div>
          <Navbar/>
          <Route path='/' exact render={(props)=>(
            <Display {...props} items={items} 
            cartitems={cartitems} setcartItems={setcartItems}/>
          )}/>
          
          <Route path='/cart' render={(props)=>(
            <Cart {...props} cartitems={cartitems} setcartItems={setcartItems}
             RemoveCartItem={RemoveCartItem}/>
          )}>

          </Route>
          <Route path='/about' component={About}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
