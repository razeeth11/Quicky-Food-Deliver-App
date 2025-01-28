import { Box, Grid, Typography } from "@mui/material";

export function ImageListComponent({ImageList}){
    return(
      <Grid
          sx={{
            display: "flex",
            alignItems: "start",
            gap: "5px",
            overflowX: "scroll",
            
          }}
        >
          {ImageList.map((item, index) => (
            <Box key={index} sx={{  margin: "10px 0 25px 0" ,width:"120px",display:"flex",flexDirection:"column",alignItems:"center"}}>
              <Box sx={{padding:"10px 10px 0 10px"}}>
              <img
                src={item.image}
                style={{ width: "100px", borderRadius: "10px" }}
              />
              </Box>
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
    )
  }