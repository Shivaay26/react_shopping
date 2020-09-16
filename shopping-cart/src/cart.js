import React, { useEffect, useRef, useState } from 'react'
import { ItemConsumer } from './Itemcontext';


const Cart = ({cartitems,RemoveCartItem,setcartItems}) => {
    const [ispaid, setispaid] = useState(false)

    const paypal=useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Cool looking table",
                    amount: {
                      currency_code: "INR",
                      value: 650.0,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
              setcartItems([ ])
            },

            onError: (err) => {
              console.log(err);
            },

          }).render(paypal.current);
      }, []);
    
    // useEffect(()=>{
    //     window.paypal.button
    // },[])
    
    return (
<div className="carthome">
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

    <div ref={paypal} className="paypal"></div> 
    {cartitems && <div ref={paypal} className="paypal"></div>}
    </div>
    )
}

export default Cart

{/*  <div ref={paypal}></div> */}
