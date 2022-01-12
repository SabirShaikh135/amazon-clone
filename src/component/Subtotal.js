import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider'
import { getbasketTotal } from '../reducer';
function Subtotal() {
    const [{basket}] =useStateValue();
    return (
        <div className='subtotal'>

        <CurrencyFormat

            renderText={(value)=>
            (
                <>
                    <p>Total Amount ({basket.length} items): <strong>{value}</strong></p>
                    <small className='subtotal_gift'>
                        <input type="checkbox" /> this order contains
                    </small>
                </>
            )
            }

            decimalScale={2}
            value={getbasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}


        />

       <button onClick={()=>alert("Payment Process Coming soon")}>Proceed to checout</button>
        </div>
    )
}

export default Subtotal
