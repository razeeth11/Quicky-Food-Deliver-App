
import './App.css'
import Grid from '@mui/material/Grid'
import { AppBar } from './Components/AppBar/AppBar'
import { HomeCategory } from './Components/HomeCategory/HomeCategory'
import { GreatDeals } from './Components/GreatDeals/GreatDeals'
import { AdSection } from './Components/AdSection/AdSection'




function App() {

  return (
    <Grid sx={{maxWidth:"1000px",margin:"0 auto"}}>
    <Home/>      
    </Grid>
  )
}

export function Home(){
  return(
    <Grid>
      <AppBar/> 
      <HomeCategory/> 
      <GreatDeals/> 
      <AdSection/>
    </Grid>
  )
}







export default App
