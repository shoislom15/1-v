import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
import six from "../../assets/6.jpg";
import seven from "../../assets/7.jpg";
import eight from "../../assets/8.jpg";
import nine from "../../assets/9.jpg";

const Home = () => {
  const images = [one, two, three, four, five, six, seven, eight, nine];
  const [tab, setTab] = useState("main");
  const [width, setWidth] = useState(window.innerWidth);
  const [imgs, setImgs] = useState(images);
  const [first, setFirst] = useState([one, four, seven]);
  const [second, setSecond] = useState([two, five, eight]);
  const [third, setThird] = useState([three, six, nine]);

  useEffect(() => {}, []);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        py: 6.5,
        color: "#414141",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: "Marck Script, cursive", fontSize: "44px" }}
      >
        Олег марков {width}
      </Typography>
      <div className="flex items-center mt-2 gap-8">
        <Typography
          onClick={() => setTab("main")}
          sx={{
            color: tab == "main" ? "#414141" : "#AFAFC1",
            fontSize: "15px",
            cursor: "pointer",
            "&:hover": { color: "#808094" },
          }}
        >
          Главная
        </Typography>
        <Typography
          onClick={() => setTab("about")}
          sx={{
            color: tab == "about" ? "#414141" : "#AFAFC1",
            fontSize: "15px",
            cursor: "pointer",
            "&:hover": { color: "#808094" },
          }}
        >
          Обо мне
        </Typography>
        <Typography
          onClick={() => setTab("contact")}
          sx={{
            color: tab == "contact" ? "#414141" : "#AFAFC1",
            fontSize: "15px",
            cursor: "pointer",
            "&:hover": { color: "#808094" },
          }}
        >
          Связаться
        </Typography>
      </div>
      <div className="w-full xl:px-24 mt-12">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            {first.map((im, i) => (
              <img src={im} className="w-full mb-4" />
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {second.map((im, i) => (
              <img src={im} className="w-full mb-4" />
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {third.map((im, i) => (
              <img src={im} className="w-full mb-4" />
            ))}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
