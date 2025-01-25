import { Box, Grid, Link, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import category1 from "../../assets/CategoryImages/category-1.png";
import category2 from "../../assets/CategoryImages/category-2.png";
import category3 from "../../assets/CategoryImages/category-3.png";
import category4 from "../../assets/CategoryImages/category-4.png";
import category5 from "../../assets/CategoryImages/category-5.png";
import category6 from "../../assets/CategoryImages/category-6.png";
import category7 from "../../assets/CategoryImages/category-7.png";
import category8 from "../../assets/CategoryImages/category-8.png";
import category9 from "../../assets/CategoryImages/category-9.png";
import category10 from "../../assets/CategoryImages/category-10.png";
import category11 from "../../assets/CategoryImages/category-11.png";
import category12 from "../../assets/CategoryImages/category-12.png";
import category13 from "../../assets/CategoryImages/category-13.png";
import category14 from "../../assets/CategoryImages/category-14.png";
import category15 from "../../assets/CategoryImages/category-15.png";
import category16 from "../../assets/CategoryImages/category-16.png";
import category17 from "../../assets/CategoryImages/category-17.png";
import category18 from "../../assets/CategoryImages/category-18.png";
import category19 from "../../assets/CategoryImages/category-19.png";
import category20 from "../../assets/CategoryImages/category-20.png";
import category21 from "../../assets/CategoryImages/category-21.png";
import category22 from "../../assets/CategoryImages/category-22.png";
import category23 from "../../assets/CategoryImages/category-23.png";
import category24 from "../../assets/CategoryImages/category-24.png";


export function HomeCategory() {
  const ImageList = [
    {
      image: category1,
      name: "Quicky hot deals",
    },
    {
      image: category2,
      name: "friuts and vegetables",
    },
    {
      image: category3,
      name: "atta rice and dhalls",
    },
    {
      image: category4,
      name: "dry fruit & masala",
    },
    {
      image: category5,
      name: "dairy bread & eggs",
    },
    {
      image: category6,
      name: "quicky instant foods",
    },
    {
      image: category7,
      name: "chocolates and deserts",
    },
    {
      image: category8,
      name: "quicky munchies",
    },
    {
      image: category9,
      name: "cold drinks and juices",
    },
    {
      image: category10,
      name: "cereals and breakfast",
    },
    {
      image: category11,
      name: "sauces and spreads",
    },
    {
      image: category12,
      name: "tea , coffee & more",
    },
    {
      image: category13,
      name: "quicly biscuits",
    },
    {
      image: category14,
      name: "body, bath and shower",
    },
    {
      image: category15,
      name: "cleaning essentials",
    },
    {
      image: category16,
      name: "beauty and grooming",
    },
    {
      image: category17,
      name: "homes and kitchens",
    },
    {
      image: category18,
      name: "sanitary and electricals",
    },
    {
      image: category19,
      name: "hygeine and wellness",
    },
    {
      image: category20,
      name: "Quicky baby care",
    },
    {
      image: category21,
      name: "new pet supplies",
    },
    {
      image: category22,
      name: "paan corner items",
    },
    {
      image: category23,
      name: "Quicky fresh meat",
    },
    {
      image: category24,
      name: "Quicky bakery items",
    },
  ];

  return (
    <Grid sx={{ padding: "10px" }}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: 600 }}
        >
          Great deals on top picks
        </Typography>
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: { xs: "14px", md: "18px" },
            color: "#ec6436",
            textDecoration: "none",
          }}
        >
          View all <KeyboardArrowRightRoundedIcon />{" "}
        </Link>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          overflow: "scroll",
        }}
      >
        {ImageList.map((item, index) => (
          <Box key={index} sx={{ width: "85px", margin: "15px 0" }}>
            <img
              src={item.image}
              style={{ width: "85px", borderRadius: "10px" }}
            />
            <Typography
              sx={{
                fontSize: "12px",
                textAlign: "center",
                fontWeight: 400,
                textTransform: "capitalize",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
