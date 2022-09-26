import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import useFetch from "../../hooks/useFetch";
import { fetchNews } from "../../services/api";
import Loader from "../Loader";

function Item(props) {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          mb: 2,
          height: "250px",
          backgroundImage: `url(${props.item.image})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{ backgroundColor: "hsla(2, 100%, 81%, 0.80)", padding: 6 }}
        >
          <Typography variant="h6">{props.item.name}</Typography>
          <Typography variant="subtitle1">{props.item.description}</Typography>
        </div>
      </Paper>
      <Button variant="contained">Read More</Button>
    </>
  );
}

const NewsCarousel = () => {
  const { data, loading } = useFetch(fetchNews);
  return (
    <Paper sx={{ p: 2, height: "auto", minHeight: "400px" }}>
      <>
        <Typography sx={{ my: 1 }} variant="h4">
          News Updates
        </Typography>
        {!loading ? (
          <Carousel>
            {data.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        ) : (
          <Loader />
        )}
      </>
    </Paper>
  );
};

export default NewsCarousel;
