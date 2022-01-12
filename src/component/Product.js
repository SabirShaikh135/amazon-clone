import React from 'react'
import "./Product.css";
import rating from "@material-ui/icons/Star"
import { useStateValue } from '../StateProvider';
function Product({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
    const addtoBasket=()=>{
            dispatch({
                type:'Add_to_Basket',
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating,
                },
               
            });
    };
    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <p>⭐</p>
                    ))}
            </div>
            </div>
            <img src={image}/>
            <button onClick={addtoBasket}>Add to basket</button>
        </div>
    )
}

export default Product
