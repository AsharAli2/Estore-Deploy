import {
  Card,
  Container,
  MenuItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function History() {
  const [detail, setdetail] = useState([]);
  let { userName } = useParams();
  const [open, setopen] = useState(false);
  const fetchproducts = async () => {
    const response = await fetch(`/order/history/${userName}`);
    const data = await response.json();
    setdetail(data.history);
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  setTimeout(() => {
    setopen(true);
  }, 3000);
  return (
    <>
      <Container
        sx={{
          backgroundColor: "whitesmoke",
          height: "100%",
          borderRadius: "30px",
          paddingBottom: "30px",
        }}
      >
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: "50px",
            marginBottom: "20px",
            color: "blue",
          }}
        >
          Welcome {detail.userName}
        </h1>

        {detail.products ? (
          <>
            <h3 style={{ fontFamily: "sans-serif", marginBottom: "30px" }}>
              Your Previously Purchased Items
            </h3>
            <Stack
              // spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "30px",
                justifyContent: "center",
              }}
            >
              {detail.products.map((item) => {
                return (
                  <>
                    <Card
                      sx={{
                        // maxWidth: 240,
                        width: "240px",
                        // maxHeight: 300,
                        height: "240px",
                      }}
                    >
                      <MenuItem sx={{ justifyContent: "center" }}>
                        <Typography
                          variant="inherit"
                          noWrap
                          style={{
                            color: "black",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Products
                        </Typography>
                      </MenuItem>
                      {item.pname.map((no) => {
                        return (
                          <MenuItem>
                            <Typography
                              variant="inherit"
                              style={{ color: "red" }}
                            >
                              {no}
                            </Typography>
                          </MenuItem>
                        );
                      })}
                      <Typography
                        variant="body2"
                        style={{
                          color: "green",
                          fontSize: "15px",
                          paddingLeft: "16px",
                          textAlign: "center",

                          marginBottom: "10px",
                          marginTop: "10px",
                        }}
                      >
                        Rs.{item.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          color: "green",
                          fontSize: "15px",
                          paddingLeft: "16px",
                          textAlign: "center",
                          marginBottom: "10px",
                        }}
                      >
                        {item.date.slice(0, 16)}
                      </Typography>
                    </Card>
                  </>
                );
              })}
            </Stack>
          </>
        ) : (
          <>
            {open && (
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
                  Your History is empty
                </h1>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}
