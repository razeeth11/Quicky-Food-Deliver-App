import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useEffect, useState } from "react";
import { productListingItem } from "./ProductCategoryListing";

export function ProductListingPage() {
  const { productCategoryType } = useParams();
  const navigate = useNavigate();
  const [finalArray, setFinalArray] = useState([]);
  const [tabCount, setTabCount] = useState();
  const textStyle = {
    fontSize: "12px",
    color: "#585858",
    fontWeight: 500,
    textTransform: "capitalize",
  };

  useEffect(() => {
    const resultArray = productListingItem(productCategoryType);
    setFinalArray(resultArray);
    setTabCount(resultArray[0]?.name);
  }, []);

  const tabClickFunction = (item) => {
    // navigate(`${item.name}`);
    setTabCount(item.name);
  };

  return (
    <Grid sx={{ minHeight: "100vh" }}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "20px 10px",
        }}
      >
        <Typography sx={textStyle} onClick={() => navigate("/")}>
          Home
        </Typography>
        <KeyboardArrowRightRoundedIcon sx={textStyle} />
        <Typography sx={textStyle}>{productCategoryType}</Typography>
        <KeyboardArrowRightRoundedIcon sx={textStyle} />
        <Typography sx={{ ...textStyle, color: "black" }}>
          {tabCount}
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          {finalArray.map((item, index) => (
            <Box
              onClick={() => tabClickFunction(item)}
              key={index}
              sx={{
                padding: "10px",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: "10px",
                borderLeft:
                  item.name === tabCount
                    ? "5px solid #a44fd4"
                    : "5px solid white",
                transition: "200ms",
                backgroundImage:
                  item.name === tabCount
                    ? "linear-gradient(#efd7f7, white)"
                    : "white",
                borderRadius: "0 20px 20px 0",
              }}
            >
              <img
                src={item.img}
                style={{ width: "40px", height: "40px", borderRadius: "50px" }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "12px" },
                  textAlign: { xs: "center", md: "left" },
                  textTransform: "capitalize",
                  color: index === tabCount && "#7c0ab1",
                  fontWeight: index === tabCount && "600",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={10} sx={{ padding: "10px" }}>
          {tabCount}
        </Grid>
      </Grid>
    </Grid>
  );
}
