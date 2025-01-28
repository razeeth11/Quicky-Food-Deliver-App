import { Box, Grid, Link, Typography } from "@mui/material";
import { beautyList, groceryList, houseList, snacksList } from "./ImageList";
import ImageListComponent from "./ImageListComponent.jsx";

//household

// https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2024/7/3/8c9cb7ac-d548-4bf6-89e3-9118444cd1c4_16ee87fc-006c-42ad-8605-12ae8dfbce68
// https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2024/10/28/51cb39de-0a69-4f14-b30c-c0ad539bd690_3db0dfdf-a32e-4820-88f1-6dbc9f670aa3
// https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2024/7/3/89f5d94c-3e26-4c27-9722-7c987c44179a_24e91cd6-9f5c-4655-84e8-48c413f12838
// https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2024/7/3/6599e8e8-6d26-4168-b95a-6b4ac0cd65be_c60957de-4097-4f1a-9a9e-09f9a6e4a704


//explore by cate

// https://cdn.zeptonow.com/production/tr:w-416,ar-416-464,pr-true,f-auto,q-80/inventory/banner/e611e8dd-ae10-49f9-bbcf-89391c5f557e.png
// https://cdn.zeptonow.com/production/tr:w-416,ar-416-464,pr-true,f-auto,q-80/inventory/banner/93901c5c-672f-4869-b6f0-e93f21d0453a.png
// https://cdn.zeptonow.com/production/tr:w-416,ar-416-464,pr-true,f-auto,q-80/inventory/banner/2ee60851-c4ba-464e-a965-f82fb607a940.png
// https://cdn.zeptonow.com/production/tr:w-416,ar-416-464,pr-true,f-auto,q-80/inventory/banner/aa3ed677-6164-4c53-b660-f12bc13032eb.png
// https://cdn.zeptonow.com/production/tr:w-416,ar-416-464,pr-true,f-auto,q-80/inventory/banner/0908a28b-713b-4d13-824b-0bbc5b2ebd1a.png
// https://cdn.zeptonow.com/production/tr:w-416,ar-416-464,pr-true,f-auto,q-80/inventory/banner/5b95e7f0-8b1f-4f23-b911-357be07acfe5.png


export function HomeCategory() {

  return (
    <Grid sx={{ padding: "10px" }}>
      <Grid
      sx={{display:"flex",flexDirection:"column",overflowX:"scroll"}}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: 600 }}
        >
          Grocery & Kitchen
        </Typography>
      <ImageListComponent ImageList={groceryList}/>
      </Grid>
      <Grid
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: 600 }}
        >
          Snacks & Munchies
        </Typography>
      <ImageListComponent ImageList={snacksList}/>
      </Grid>
      <Grid
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: 600 }}
        >
          Beauty & Personal care
        </Typography>
      <ImageListComponent ImageList={beautyList}/>
      </Grid>
      <Grid
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: 600 }}
        >
          Household & Essentials
        </Typography>
      <ImageListComponent ImageList={houseList}/>
      </Grid>
    </Grid>
  );
}



