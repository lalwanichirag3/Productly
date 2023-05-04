import React from 'react'
import { connect } from 'react-redux'
import "../css-styling/checkout.css";
import Cart from './Cart';
import { useHistory } from 'react-router-dom';

function Checkout({ processing, username, productList, totalAmount}){

    const history = useHistory();


    return (
        <div className="checkout">
            <div className="checkout__productList">
                <p>Hello {username}, Here's your items</p>  
                {productList?.map((product,i) => <Cart processing={processing}  key={i} product={product}/> )}
            </div>
            <div className="checkout__total">
                <p>Total Items: {productList?.length}</p>
                <p>Total Price: ${totalAmount}</p>
                <p className="total__description">Please make your payment card ready!</p>
                <button disabled={productList?.length ===0 ? true : false} onClick={() => history.push('/payment')} className="payment__button">Proceed for Payment</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.users,
        newProductList: state.products,
    }
}

export default connect(mapStateToProps)(Checkout)
