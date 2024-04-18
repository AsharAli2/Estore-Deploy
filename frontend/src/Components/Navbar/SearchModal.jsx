import { Box, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%)",
  width: "50%",
  borderRadius: "20px",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export default function SearchModal({ open, setOpen }) {
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);
  const [search, setsearch] = useState("");
  async function fetchprod() {
    const response = await fetch("/products/allproducts");
    const data = await response.json();
    setProduct(data.Product);
  }
  useEffect(() => {
    fetchprod();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  function Done(item) {
    setsearch(item.name);
    navigate(`/Product/${item._id}`);
    setOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Search the Prdoucts"
            variant="outlined"
            value={search}
            onChange={(ev) => setsearch(ev.target.value)}
          />
          {search.length ? (
            <div
              style={{
                width: "100%",
                // border: "1px solid black",
                // borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {Product.length
                ? Product.filter((item) => {
                    const searchlower = search.toLocaleLowerCase();
                    const name = item.name.toLocaleLowerCase();
                    return searchlower && name.startsWith(searchlower);
                  }).map((item) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontWeight: "600",
                            fontFamily: "sans-serif",
                            height: "50px",
                          }}
                          onClick={() => Done(item)}
                        >
                          {item.name}
                        </div>
                      </>
                    );
                  })
                : null}
            </div>
          ) : null}
        </Box>
      </Modal>
    </>
  );
}
