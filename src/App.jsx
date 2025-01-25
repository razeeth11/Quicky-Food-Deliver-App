
import './App.css'
import Grid from '@mui/material/Grid'
import { AppBar } from './Components/AppBar/AppBar'




function App() {

  return (
    <Grid sx={{maxWidth:"1200px",margin:"0 auto",border:"1px solid red",minHeight:"100vh"}}>
    <AppBar/>      
    </Grid>
  )
}


export default App
