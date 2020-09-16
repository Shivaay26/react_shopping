import React,{useState} from 'react';
import Cart from './cart';

import { ItemProvider } from './Itemcontext';

const Display = ({items,setcartItems,cartitems}) => {

    const clickhandler=(item)=>{
        let alreadyincart=false;
        cartitems.map(cartitem=>{if(cartitem.id===item.id){alreadyincart=true}})
        if(alreadyincart){alert("The Item Is already In Cart")}
        else{setcartItems([...cartitems,{name:item.name,img:item.img,id:item.id,cost:item.cost}])}
    }
    return (
    <>
    <h1 className="title">Your Home Page</h1>
    <div className="row">
        {items.map(item=>{
           return ( 
            <div className="col s12 m3">
                <div className="card">
                    <div className="card-image">
                        <img src={item.img}/>
                        {/* <span className="card-title">{item.name}</span> */}
                    </div>
                    <div className="card-content">
                        <h1>{item.name}</h1>
                        <h4>Cost:${item.cost}</h4>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn" onClick={()=>clickhandler(item)}>
                Add to cart</button>
                    </div>

            </div>
            </div>)
    })}

    {/* this is the closing tag of row so do not touch this */}
    </div>
    
    {console.log(cartitems)}
    </>
    
)
}

export default Display
