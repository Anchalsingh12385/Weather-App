import Button from '@mui/material/Button';
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
        </>
  )
}

export default App
