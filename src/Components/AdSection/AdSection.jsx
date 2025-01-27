import { Box, Grid } from "@mui/material";
import { useEffect, useRef } from "react";

export function AdSection() {
  const imageArray = [
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/17/1e4a3645-acd7-430f-b163-2fb3fb45552d_P0.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/25/3326c2ef-48b6-4d8a-a51d-ae326d2e9dfe_12051.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/25/3563dd64-f5a1-48ff-80e2-87a01664500a_8591.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/5/554cef3e-f241-4c31-a5bb-8251cf65343a_423.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/11/25/d177df74-8691-4dd9-828e-3629efd52610_687.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/25/5d1e0fea-ff30-4de6-88b8-e1168e57811f_11492.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/25/fb7e9246-a045-4194-afd0-24cc86dd1be4_881.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/6/e35a008d-7d17-4941-8314-02db530003eb_1109.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/21/4ea6888c-5d2e-446f-a2c0-c61526c626b9_9622.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_430,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/25/4bbe7b6e-d1c7-416f-b26e-3b8ce53f55a2_11911.png",
  ];

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "25px",
        overflow: "hidden",
        margin: "30px 0",
        padding: "0 10px",
      }}
    >
      {imageArray.map((item, index) => (
        <Box className="scroll" key={index}>
          <img src={item} style={{ width: "300px" }} />
        </Box>
      ))}
    </Grid>
  );
}
