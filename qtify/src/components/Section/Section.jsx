import styles from "./Section.module.css";
import Card from "../../components/Card/Card";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function Section({ leftTitle = "Top Albums", cardList, right = "Collapse" }) {
  let [topAlbums, setTopAlbums] = useState([]);
  useEffect(() => {
    async function fetchTopAlbums() {
      let url = `https://qtify-backend-labs.crio.do/albums/top`;
      let res = await axios.get(url);
      console.log(res.data);
    }
    fetchTopAlbums();
  });
  return (
    <div className={styles.section}>
      <div className={styles.banner}>
        <p>
          <strong>{leftTitle}</strong>
        </p>
        <p>
          <strong>Show All</strong>
        </p>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item md={7 / 12}>
            <Card />
          </Grid>
          <Grid item md={7 / 12}>
            <Card />
          </Grid>
          <Grid item md={7 / 12}>
            <Card />
          </Grid>
          <Grid item md={7 / 12}>
            <Card />
          </Grid>
          <Grid item md={7 / 12}>
            <Card />
          </Grid>
          <Grid item md={7 / 12}>
            <Card />
          </Grid>
          <Grid item md={7 / 12}>
            <Card />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Section;
