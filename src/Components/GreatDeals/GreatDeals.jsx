import { Box, Button, Grid, Link, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import category1 from "../../assets/CategoryImages/category-1.png";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
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
    <Grid>
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
              fontSize: "14px",
              color: "#ec6436",
              textDecoration: "none",
              cursor: "pointer",
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
      <Coupons />
    </Grid>
  );
}

function Coupons() {
  return (
    <Grid sx={{ background: "rgb(255,193,7)", padding: "10px",mt:2 }}>
      <Typography
        sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: 600 }}
      >
        Save more with coupons
      </Typography>
      <Grid sx={{display:"flex",alignItems:"center",gap:"15px",margin:"10px 0",overflow:"scroll"}}>
        {[1, 2, 3, 4].map((item, index) => (
          <Box
          key={index}
            sx={{
                display:"flex",
                alignItems:"center",
                gap:"20px",
              background: "white",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <DiscountRoundedIcon sx={{color:"green"}}/>
            <Box>
              <Typography sx={{fontSize:"12px",fontWeight:600}}>Flat $150 off</Typography>
              <Typography sx={{fontSize:"12px",fontWeight:400,whiteSpace:"nowrap"}}>Use Helloim | on orders above $400</Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
