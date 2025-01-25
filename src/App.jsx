
import './App.css'
import Grid from '@mui/material/Grid'
import { AppBar } from './Components/AppBar/AppBar'
import { HomeCategory } from './Components/HomeCategory/HomeCategory'




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
    </Grid>
  )
}




export default App
