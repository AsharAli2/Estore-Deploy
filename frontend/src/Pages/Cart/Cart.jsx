import React, { useState } from "react";
import "./Cart.css";
import cartcontext from "../../context/Cartcontext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useContext } from "react";
import {
  Backdrop,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Cart() {
  const navigate = useNavigate();

  const CartItem = useContext(cartcontext);
  let { cartitem, removecart } = CartItem;

  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  let price = 0;
  let productArr = [];
  cartitem.map((e) => {
    price = e.price + price;
    productArr.push(e.name);
  });
  const products = {
    pname: productArr,
    price: price,
    date: new Date().toUTCString(),
  };

  const submit = async () => {
    const userName = user.userName;
    const detail = { products, userName };
    const response = await fetch("/order/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detail),
    });
    const data = await response.json();

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    cartitem.length = 0;
  };

  return (
    <>
      {cartitem.length != 0 ? (
        <Grid
          container
          sx={{ m: 0, direction: "row-reverse", marginTop: "10px" }}
        >
          <Grid item xs={12} sm={9} md={9}>
            {cartitem.map((items) => {
              return (
                <>
                  <Stack
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <img src={items.image} height={"200"} />
                      </div>

                      <div
                        style={{
                          fontFamily: "cursive",
                          marginBottom: "10px",
                        }}
                      >
                        {items.name}
                      </div>
                      <div>Rs.{items.price}</div>
                      <Button
                        style={{
                          marginTop: "5px",
                          width: "20%",
                          color: "white",
                          border: "2px solid red",
                          backgroundColor: "red",
                        }}
                        onClick={() => removecart(items.name)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Stack>
                </>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <div
              style={{ backgroundColor: "whitesmoke", borderRadius: "15px" }}
            >
              <h4
                style={{
                  color: "grey",
                  paddingLeft: "15px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  borderBottom: "1px dotted grey",
                  margin: "0px",
                  fontFamily: "sans-serif",
                }}
              >
                PRICE DETAILS
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "5px",
                }}
              >
                <p style={{ fontFamily: "sans-serif" }}>
                  {" "}
                  Price ({cartitem.length} items)
                </p>
                <p style={{ fontFamily: "sans-serif" }}>Rs.{price}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px 15px 15px 15px",
                  borderBottom: "1px dotted grey",
                }}
              >
                <p style={{ fontFamily: "sans-serif" }}>Delivery Charges</p>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      textDecoration: "line-through",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Rs.250
                  </p>
                  <p style={{ color: "green", fontFamily: "sans-serif" }}>
                    &nbsp;Free
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 15px 15px 15px",
                  borderBottom: "1px dotted grey",
                }}
              >
                <h3 style={{ fontFamily: "sans-serif" }}>Total Charges</h3>
                <h3 style={{ fontFamily: "sans-serif" }}>Rs.{price}</h3>
              </div>
              <div style={{ textAlign: "center", paddingBottom: "15px" }}>
                <p
                  style={{
                    color: "green",
                    padding: "5px 15px 5px 15px",
                    fontFamily: "sans-serif",
                  }}
                >
                  No Delivery Charges on this order
                </p>
                <Button variant="contained" onClick={submit}>
                  PROCEED TO CHECKOUT
                </Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    fontSize: "large",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      position: "relative",
                      height: "450px",
                      width: "300px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "green",
                        fontSize: "60px",
                        position: "absolute",
                        top: -30,
                        backgroundColor: "white",
                        borderRadius: "30px",
                      }}
                    />
                    <h3 style={{ fontFamily: "sans-serif", width: "100%" }}>
                      Order Success
                    </h3>
                    <img
                      src="/deliver.png"
                      alt=""
                      style={{ width: "100%", height: "65%" }}
                    />
                    <h5
                      style={{
                        fontFamily: "sans-serif",
                        width: "100%",
                        color: "green",
                      }}
                    >
                      Your Order is successfully placed.Our Rider will contact
                      you shortly
                    </h5>

                    <Button
                      variant="contained"
                      onClick={handleClose}
                      sx={{ width: "100%", position: "absolute", bottom: 0 }}
                    >
                      OK
                    </Button>
                  </Paper>
                </Backdrop>
              </div>
            </div>
          </Grid>
        </Grid>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ maxHeight: "80vh", maxWidth: "100vw" }}
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
              alt=""
            />
            <h1 style={{ position: "absolute", fontFamily: "cursive" }}>
              Your ECart is empty
            </h1>
          </div>
        </>
      )}
    </>
  );
}
