// import styles from "./Card.module.css";
// function Card() {
//   return <div className={styles.card}></div>;
// }

// export default Card;
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import randomImage from "../../assets/random.jpg";
import { Chip } from "@mui/material";

const obj = {
  image: randomImage,
  chipText: "100 follows",
  title: "new english songs",
  numFollowers: 100,
};
export default function CardComponent({ imgSource, numFollowers, title }) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 159,
          borderRadius: "10px",
          margin: "10px",
          backgroundColor: "#121212",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={obj.image}
            alt="green iguana"
          />
          <CardContent sx={{ backgroundColor: "white", height: "30px" }}>
            <Chip
              label={`${obj.numFollowers} followers`}
              size="small"
              sx={{
                backgroundColor: "#121212",
                color: "white",
                marginLeft: -1,
                marginTop: -2,
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
      <p style={{ paddingLeft: "1rem" }}>New English</p>
    </>
  );
}
