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

                    <div>
                      <img
                        src={element.images[0]}
                        className="card-img-top"
                        alt="phone-image"
                      />
                    </div>
                  </div>
                  {/* start card body */}
                  <div className="col-md-4">
                    <div className="card-body ">
                      <h2 className="card-title d-flex">{element.title}</h2>
                      <h6
                        className="card-subTitle d-flex fs-4 "
                        style={{ color: "rgb(68, 66, 66)" }}
                      >
                        Category :{element.category}
                      </h6>
                      <p
                        className="card-text d-flex fs-5"
                        style={{ color: "rgb(68, 66, 66)" }}
                      >
                        {element.description}
                      </p>
                    </div>
                  </div>
                  {/* button increment and decrement */}
                  <div className="col-md-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center ">
                        <div>
                          <button
                            onClick={() =>
                              handleInc(element.id, element.quantity || 1)
                            }
                            className="btn btn-warning "
                            style={{ color: "white" }}
                          >
                            +
                          </button>
                          <span className="fw-bold fs-5 p-3">
                            {element.quantity || 1}
                          </span>
                          <button
                            onClick={() =>
                              handleDec(element.id, element.quantity || 1)
                            }
                            className="btn btn-warning fw-bold "
                            style={{ color: "white" }}
                          >
                            -
                          </button>
                        </div>
                        {/* price */}

                        <h2>${element.price}</h2>
                      </div>
                      {/* remove button */}
                      <div className="d-flex justify-content-end  align-content-end mt-5">
                        <button
                          onClick={() => removeCart(element.id)}
                          className="btn btn-warning  m-4"
                          style={{ color: "white" }}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                    {/* subtotal */}
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 style={{ color: "rgb(68, 66, 66)" }}>Subtotal</h3>
                      <h3 className="fw-bold fs-2">
                        ${element.price * element.quantity || element.price}
                      </h3>
                    </div>
                    {/* Shipping */}
                    <div
                      className="text fw-bold  m-2 fs-4 d-flex justify-content-between align-items-center"
                      style={{ color: "black" }}
                    >
                      <h4 style={{ color: "rgb(68, 66, 66)" }}>Shipping</h4>
                      <h4>FREE</h4>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                    <div className="text d-flex justify-content-between align-items-center  ">
                      <h3 style={{ color: "black" }}>Total Price</h3>
                      <h3
                        className="fw-bold fs-1"
                        style={{
                          color: "black",
                          padding: "5px",
                          borderRadius: "10px",
                          margin: "10px",
                        }}
                      >
                        $ {totalPrice}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* end of card body */}
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
              <div className="d-flex justify-content-between align-items-center ">
                <h3 style={{ color: "black" }}>Total Quantity</h3>
                <h3
                  className="fw-bold fs-1"
                  style={{
                    color: "black",
                    padding: "5px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  {totalQuantity}
                </h3>
              </div>
              <br />
              {/* total price */}
              <div className="text d-flex justify-content-between align-align-items-center  ">
                <h3 style={{ color: "black" }}>Total Price</h3>
                <h3
                  className="fw-bold fs-1"
                  style={{
                    color: "black",
                    padding: "5px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  $ {totalPrice}
                </h3>
              </div>
            </div>
            {/* end of the card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
