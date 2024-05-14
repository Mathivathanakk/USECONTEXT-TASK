import React, { useContext, useState } from "react";
import { mycontext } from "../App";
import Navbar from "./Navbar";

const Cart = () => {
  const [data, setData] = useContext(mycontext);

  //calculating the total price

  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );

  //calculating the total quantity

  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  //handling increment when clicking the button

  const handleInc = (id, quantity) => {
    setData((t) => {
      return t.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            quantity: element.quantity + 1 || quantity + 1,
          };
        }
        return element;
      });
    });
  };

  //handling decrement when clicking the button

  const handleDec = (id, quantity) => {
    setData((t) => {
      return t.map((element) => {
        if (element.id === id && quantity > 1) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };

  //removing the card when clicking the button

  const removeCart = (id) => {
    setData(data.filter((ele) => ele.id !== id));
  };

  return (
    <div>
      {/* navbar */}
      <Navbar totalQuantity={totalQuantity} />

      <div className="container">
        {/* start of card */}
        {data.map((element, index) => {
          return (
            <div key={index}>
              <div className="card align-content-center mt-5 p-4">
                <div className="row">
                  <div className="col-md-4">
                    {/* image */}
                    
                       
                          <img
                            src={element.images[0]}
                            className="card-img-top"
                            alt="phone-image"
                          />
                    
                    {/* remove button */}
                    <button
                      onClick={() => removeCart(element.id)}
                      className="btn btn-danger m-4"
                    >
                      REMOVE
                    </button>
                  </div>
                  {/* start card body */}
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h2 className="card-title text-center">
                        {element.title}
                      </h2>
                      <h6 className="card-subTitle text-center">
                        Category :{element.category}
                      </h6>
                      <p className="card-text text-center">
                        {element.description}
                      </p>
                      {/* button increment and decrement */}
                      <div className="text-center">
                        <button
                          onClick={() =>
                            handleInc(element.id, element.quantity || 1)
                          }
                          className="btn btn-primary "
                        >
                          +
                        </button>
                        <span className="fw-bold fs-5 p-4">
                          {element.quantity || 1}
                        </span>
                        <button
                          onClick={() =>
                            handleDec(element.id, element.quantity || 1)
                          }
                          className="btn btn-primary "
                        >
                          -
                        </button>
                      </div>
                      {/* price */}
                      <div className="mt-3 text-center">
                        <h3>
                          Price:<span className="fw-bold">{element.price}</span>{" "}
                        </h3>
                      </div>
                      {/* Shipping */}
                      <div
                        className="text fw-bold  m-2 fs-4 text-center"
                        style={{ color: "gray" }}
                      >
                        Shipping: FREE
                      </div>
                      {/* subtotal */}
                      <div className="text-center">
                        <h3>
                          Subtotal:
                          <span className="fw-bold fs-2">
                            {element.price * element.quantity || element.price}
                          </span>
                        </h3>
                      </div>
                    </div>
                    {/* end of card body */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* end of card */}
        <div className="row">
          <div className="col ">
            {/* start of card */}
            <div className="card mt-4 p-4">
              {/* total quantity */}

              <h3 className="text-center" style={{ color: "black" }}>
                Total Quantity:
                <span
                  style={{
                    backgroundColor: "rgb(61,7,71)",
                    color: "white",
                    padding: "5px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  {totalQuantity}
                </span>
              </h3>
              <br />
              {/* total price */}
              <h3 className="text-center" style={{ color: "black" }}>
                Total Price:
                <span
                  style={{
                    backgroundColor: "rgb(61,7,71)",
                    color: "white",
                    padding: "5px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  {totalPrice}
                </span>
              </h3>
            </div>
            {/* end of the card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
