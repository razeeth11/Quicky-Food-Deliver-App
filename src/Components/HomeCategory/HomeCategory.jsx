import { Box, Grid, Link, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export function HomeCategory() {
  const ImageList = [
    {
      image: "src/assets/CategoryImages/category-1.png",
      name: "Quicky hot deals",
    },
    {
      image: "src/assets/CategoryImages/category-2.png",
      name: "friuts and vegetables",
    },
    {
      image: "src/assets/CategoryImages/category-3.png",
      name: "atta rice and dhalls",
    },
    {
      image: "src/assets/CategoryImages/category-4.png",
      name: "dry fruit & masala",
    },
    {
      image: "src/assets/CategoryImages/category-5.png",
      name: "dairy bread & eggs",
    },
    {
      image: "src/assets/CategoryImages/category-6.png",
      name: "quicky instant foods",
    },
    {
      image: "src/assets/CategoryImages/category-7.png",
      name: "chocolates and deserts",
    },
    {
      image: "src/assets/CategoryImages/category-8.png",
      name: "quicky munchies",
    },
    {
      image: "src/assets/CategoryImages/category-9.png",
      name: "cold drinks and juices",
    },
    {
      image: "src/assets/CategoryImages/category-10.png",
      name: "cereals and breakfast",
    },
    {
      image: "src/assets/CategoryImages/category-11.png",
      name: "sauces and spreads",
    },
    {
      image: "src/assets/CategoryImages/category-12.png",
      name: "tea , coffee & more",
    },
    {
      image: "src/assets/CategoryImages/category-13.png",
      name: "quicly biscuits",
    },
    {
      image: "src/assets/CategoryImages/category-14.png",
      name: "body, bath and shower",
    },
    {
      image: "src/assets/CategoryImages/category-15.png",
      name: "cleaning essentials",
    },
    {
      image: "src/assets/CategoryImages/category-16.png",
      name: "beauty and grooming",
    },
    {
      image: "src/assets/CategoryImages/category-17.png",
      name: "homes and kitchens",
    },
    {
      image: "src/assets/CategoryImages/category-18.png",
      name: "sanitary and electricals",
    },
    {
      image: "src/assets/CategoryImages/category-19.png",
      name: "hygeine and wellness",
    },
    {
      image: "src/assets/CategoryImages/category-20.png",
      name: "Quicky baby care",
    },
    {
      image: "src/assets/CategoryImages/category-21.png",
      name: "new pet supplies",
    },
    {
      image: "src/assets/CategoryImages/category-22.png",
      name: "paan corner items",
    },
    {
      image: "src/assets/CategoryImages/category-23.png",
      name: "Quicky fresh meat",
    },
    {
      image: "src/assets/CategoryImages/category-24.png",
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
