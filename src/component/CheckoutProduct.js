import React from 'react'
import { useStateValue } from '../StateProvider';
import "./CheckoutProduct.css";

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type: 'Remove_from_Basket',
            id:id,
        });
    }
    return (
        <div className='CheckoutProduct'>
            <img 
                className='CheckoutProduct_image'
                src={image}
                alt=''
            />
            <div className='CheckoutProduct_info'>
                <p className='CheckoutProduct_title'>{title}</p>
                <p className='CheckoutProduct_price'>
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className='CheckoutProduct_rating'>
                    {
                        Array(rating).
                        fill()
                        .map((_, i)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
                    <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
