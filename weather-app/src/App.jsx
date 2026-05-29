import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
//import './App.css'

function App() {
 let  handleClick = () => {
    alert("Button Clicked")
  }

  return (
    <>
    <h1>Weather App</h1>
    <Button variant="contained" onClick={handleClick}>
      Click Me
    </Button>
     <Button variant="contained" onClick={handleClick} color="secondary">
      Click Me
    </Button>
    <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon />}>
      Click Me
    </Button>
        </>
  )
}

export default App
