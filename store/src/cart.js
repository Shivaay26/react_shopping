import React, { useState } from 'react'
import { ItemConsumer } from './Itemcontext';


const Cart = ({cartitems,RemoveCartItem}) => {
    
    return (
        <div className="row">
        {cartitems.map(item=>{
           return ( 
            <div className="col s12 m3">
                <div className="card">
                    <div className="card-image">
                        <img src={item.img}/>
                    </div>
                    <div className="card-content">
                        <h1>{item.name}</h1>
                        <h4>Cost:${item.cost}</h4>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn" 
                        onClick={()=>RemoveCartItem(item.id)}>remove</button>
                        
                    </div>

            </div>
            </div>)
    })}

    {/* this is the closing tag of row so do not touch this */}
    </div>
    )
}

export default Cart

{/*  */}
