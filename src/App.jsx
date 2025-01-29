import "./App.css";
import Grid from "@mui/material/Grid";
import { AppBar } from "./Components/AppBar/AppBar";
import { HomeCategory } from "./Components/HomeCategory/HomeCategory";
import { GreatDeals } from "./Components/GreatDeals/GreatDeals";
import { AdSection } from "./Components/AdSection/AdSection";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ProductListingPage } from "./Components/ProductListingPage/ProductListingPage";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/listings/:productCategoryType"
          element={<ProductListingPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export function Home() {
  return (
    <Grid>
      <HomeCategory />
      <GreatDeals />
      <AdSection />
    </Grid>
  );
}

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Grid>
      <Button onClick={() => navigate("/")}>Back to home</Button>
    </Grid>
  );
};

export default App;
