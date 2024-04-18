import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../Home/Product.css";
import {
  Button,
  Stack,
  Card,
  CardMedia,
  Typography,
  Container,
  MenuItem,
  Rating,
  Grid,
  Input,
  Radio,
  Checkbox,
  FormControlLabel,
  Box,
  Slider,
  TextField,
  Skeleton,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Productall() {
  let [Product, setProduct] = useState([]);
  const [brands, setbrands] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  // RESPONSIVE WRT WIDTH
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { name } = useParams();
  let value = 3;
  if (windowWidth < 1000) {
    value = 4;
  }
  if (windowWidth < 800) {
    value = 6;
  }

  // FETCHING ALL PRODUCT
  const fetchproducts = async () => {
    setIsLoading(false);
    const response = await fetch(`/products/Category/${name}`);
    const data = await response.json();
    setProduct(data.Product);

    setIsLoading(true);
  };

  useEffect(() => {
    fetchproducts();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [Product]);

  //BRAND
  let brand = [];
  Product.forEach((element) => {
    if (!brand.includes(element.Brand)) {
      brand.push(element.Brand);
    }
  });
  const handlechange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      console.log(value);
      setbrands([...brands, value]);
    } else {
      setbrands(brands.filter((e) => e !== value));
    }
  };
  // FILTER PRODUCT WRT BRANDS
  if (brands.length != 0) {
    Product = Product.filter((item) => brands.includes(item.Brand));
  }

  // REACT SLIDER
  const pricefilter = async (filter) => {
    setIsLoading(false);
    const response = await fetch(`/products/Category/${name}/${filter}`);
    const data = await response.json();
    setProduct(data.Product);

    setIsLoading(true);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5">Filter</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">Brands</Typography>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {brand.map((item) => {
                    return (
                      <>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={item}
                          value={item}
                          onChange={(e) => handlechange(e)}
                        />
                      </>
                    );
                  })}
                </div>
                <Typography variant="h6">Price</Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "start",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => pricefilter("Low")}
                    style={{ marginRight: "10px" }}
                  >
                    Low to High
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => pricefilter("High")}
                  >
                    High to Low
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>

          {Product ? (
            Product.map((item) => {
              return (
                <Grid item xs={value}>
                  <Link to={`/Product/${item._id}`}>
                    <Card
                      sx={{
                        maxWidth: 240,
                        maxHeight: 300,
                      }}
                    >
                      <CardMedia
                        sx={{
                          height: 200,
                          width: 240,
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                        image={item.image}
                        title="green iguana"
                      />
                      <MenuItem>
                        <Typography
                          variant="inherit"
                          noWrap
                          style={{ color: "black", justifyContent: "center" }}
                        >
                          {item.name}
                        </Typography>
                      </MenuItem>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          style={{
                            color: "black",
                            fontSize: "12px",
                            paddingLeft: "16px",
                          }}
                        >
                          Rs.{item.price}
                        </Typography>
                      </div>
                    </Card>
                  </Link>
                </Grid>
              );
            })
          ) : (
            <div
              style={{
                width: "100%",
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress size={80} />
            </div>
          )}
        </Grid>
        {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </>
  );
}
