import React from "react";
import { formatPrice } from '../helpers'
import {  CSSTransition } from "react-transition-group";



class Order extends React.Component {

  renderOrder = key =>{
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };

    if(!fish) return null

    if (!isAvailable) {
      
      return (
        <CSSTransition>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
        
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          {count} lbs {fish.name}
          {formatPrice(count * fish.price)}
          <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        </li>
      </CSSTransition>
    )
  }
  render() {
    const orderIds = Object.keys(this.props.order)

    const total = orderIds.reduce((prevTotal, key) => {

      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if(!fish) return null
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

  return (
    <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
  )}
}

export default Order;


// https://test-4dc90.firebaseapp.com/__/auth/handler