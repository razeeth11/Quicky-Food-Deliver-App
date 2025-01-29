import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { IconStyles } from "./AppBarStyles";

export function AppBar() {
  return (
    <Grid
      container
      sx={{
        background: "#efd7f7",
        padding: "10px",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "nowrap",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid white",
              padding: "0 10px",
              background: "white",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "22px", fontWeight: 700, color: "#303030" }}
            >
              19
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#303030",
                mt: "-8px",
              }}
            >
              MINS
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#303030",
                fontWeight: 600,
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              Delivery to
            </Typography>
            <Typography
              sx={{
                color: "#585858",
                fontWeight: 400,
                fontSize: "14px",
                maxWidth: { xs: "150px", sm: "400px" },
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              QueryBuilderRoundedIcon QueryBuilderRoundedIcon
              QueryBuilderRoundedIcon
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <PersonOutlineRoundedIcon sx={IconStyles} />
          <LocalMallOutlinedIcon sx={IconStyles} />
        </Stack>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          width: "100%",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <input
          placeholder='Search for "Biryani"'
          type="text"
          style={{
            fontSize: "16px",
            padding: "10px",
            outline: "none",
            border: "none",
            borderRadius: "10px",
            width: "80%",
          }}
        />
        <SearchRoundedIcon sx={{ fontSize: "36px", color: "grey", mr: 2 }} />
      </Grid>
    </Grid>
  );
}
