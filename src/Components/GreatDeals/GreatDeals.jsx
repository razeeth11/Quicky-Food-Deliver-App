import { Box, Button, Grid, Link, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import category1 from "../../assets/CategoryImages/category-1.png";
import {
  greatDealsBrand,
  greatDealsProductName,
  greatDealsQuantity,
} from "./GreatDealsStyles";

export function GreatDeals() {
  const ImageList = Array(10).fill({
    image: category1,
    name: "Product Name",
  });
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
          alignItems: "start",
          gap: "25px",
          overflow: "scroll",
        }}
      >
        {ImageList.map((item, index) => (
          <Box key={index} sx={{ margin: "15px 0" }}>
            <Box
              sx={{
                border: "1px solid #e5e5e5",
                background: "rgb(248,249,250)",
                borderRadius: "10px",
                padding: "10px 40px",
                position: "relative",
              }}
            >
              <img
                src={item.image}
                style={{ width: "75px", borderRadius: "10px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "10px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  padding: "5px",
                  borderRadius: "0 0 5px 5px",
                }}
              >
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  2%
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>Off</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <Typography sx={greatDealsBrand}>Brand</Typography>
              <Typography sx={greatDealsProductName}>{item.name}</Typography>
              <Typography sx={greatDealsQuantity}>Quantity</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: 1,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 400,
                      color: "#8292B4",
                      textTransform: "capitalize",
                      textDecoration: "line-through",
                    }}
                  >
                    OG Price
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      textTransform: "capitalize",
                    }}
                  >
                    Discount
                  </Typography>
                </Box>
                <Button
                  sx={{
                    color: "green",
                    background: "#f1fff3",
                    border: "1px solid green",
                    borderRadius: "10px",
                    fontWeight: 600,
                    padding: "5px 20px",
                    "&:hover": { background: "green", color: "white" },
                  }}
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
