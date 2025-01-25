
import './App.css'
import Grid from '@mui/material/Grid'
import { AppBar } from './Components/AppBar/AppBar'
import { HomeCategory } from './Components/HomeCategory/HomeCategory'
import { GreatDeals } from './Components/GreatDeals/GreatDeals'




function App() {

  return (
    <Grid>
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
    </Grid>
  )
}







export default App
