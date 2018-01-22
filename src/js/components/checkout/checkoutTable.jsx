import React from 'react';
import PropTypes from 'prop-types';
import CheckoutRecord from './checkoutRecord';

class CheckoutTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getTotalQtyAndPrice = this.getTotalQtyAndPrice.bind(this);
        this.getCartItems = this.getCartItems.bind(this);   
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.removeFruitFromCart = this.removeFruitFromCart.bind(this);     
    }

    getTotalQtyAndPrice(){        
        let cart = window.localStorage.getItem("cart");           
        let qty = 0;     
        let price = 0;
        if(cart){
            cart = JSON.parse(cart);
            if(this.props.items){
                for(var item of this.props.items){
                    if(cart[item.id]){
                        qty = qty + cart[item.id];
                        price = price + cart[item.id]*item.price;
                    }
                }
            }
        }
        return {"qty":qty,"price":price};
    }

    getCartItems(){
        let cart = window.localStorage.getItem("cart");           
        let fruits = [];
        if(cart){
            cart = JSON.parse(cart);            
            if(this.props.items){
                for(let item of this.props.items){ 
                    let fruit = {};               
                    if(cart[item.id]){
                        fruit["qty"] = cart[item.id];
                        fruit["price"] = cart[item.id]*item.price;
                        fruit["name"] = item.title;
                        fruit["id"] = item.id;
                        fruits.push(fruit);
                    }                    
                }
            }
        }        
        return fruits;
    }

    removeFruitFromCart(itemId){
        let cart = window.localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);
            if(cart[itemId]){
                delete cart[itemId];
            }
        }
        window.localStorage.setItem("cart", JSON.stringify(cart));
        this.props.updateCart(cart);
    }

    addToCart(itemId) {
        let cart = window.localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);
            let itemQty = cart[itemId] || 0;
            itemQty = itemQty + 1;
            cart[itemId] = itemQty;
        }
        else {
            cart = {};
            cart[itemId] = 1;
        }
        window.localStorage.setItem("cart", JSON.stringify(cart));
        this.props.updateCart(cart);
    }

    removeFromCart(itemId) {        
        let cart = window.localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);            
            let itemQty = cart[itemId] || 0;
            itemQty = itemQty>0 ? itemQty - 1 : 0;
            cart[itemId] = itemQty;
        }        
        window.localStorage.setItem("cart", JSON.stringify(cart));
        this.props.updateCart(cart);
    }

    render() {
        let qtyAndPrice = this.getTotalQtyAndPrice();
        let cartFruits = this.getCartItems();
        console.log(cartFruits);
        return (
            <div className="table-container">
                <table className="table table-bordered">
                    <tbody>
                        <tr className="tableHeader">
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        {cartFruits.map((fruit) => {
                            return <CheckoutRecord {...fruit} 
                                            key={fruit.id}
                                            addToCart={this.addToCart} 
                                            removeFromCart={this.removeFromCart}
                                            removeFruitFromCart={this.removeFruitFromCart}/>
                        })}                        
                        <tr className="total">
                            <td className="text"><b>Total</b></td>
                            <td className="value">{qtyAndPrice.qty}</td>
                            <td className="price">$ {qtyAndPrice.price}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

CheckoutTable.propTypes = {};

export default CheckoutTable;
