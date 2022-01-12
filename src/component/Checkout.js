import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{basket}] =useStateValue();
    return (
        <div className='Checkout'>
        <div className='Checkout_left'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" 
            alt='' className='checkout_ads'/>

            {
                basket?.length ===0 ?
            (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>You have no item in your basket. you buy one or more item click add to basket next to the item</p>
                </div>
            ):
            (
                <div>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
                    {
                        basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                       
                     ))}
                    
                </div>

            )
            
            }
            </div>
            {basket.length >0 && 
                <div className='Checkout_right' >
                    <Subtotal/>
                </div>
            }
        </div>
    )
}

export default Checkout
