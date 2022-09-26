import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Product from "./Product";
import useFetch from "../../hooks/useFetch";
import { fetchProducts } from "../../services/api";
import Loader from "../Loader";

const MyProducts = () => {
  const { data, loading } = useFetch(fetchProducts);
  return (
    <>
      <Typography variant="h4">My Products ({data.length})</Typography>
      <Stack direction="row" my={2} sx={{ overflowX: "scroll" }}>
        {!loading ? data.map((item) => <Product item={item} />) : <Loader />}
      </Stack>
    </>
  );
};

export default MyProducts;
