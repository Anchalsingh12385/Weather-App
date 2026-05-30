import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
export default function SearchBox() {
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "bd7db3f0f977b83c4d87843f1a23a76d";

let getWeatherInfo = async (city) => {
 let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
 let jsonREsponse = await response.json();
 console.log(jsonREsponse);
 let result = {
    temp: jsonREsponse.main.temp,
    temp_min: jsonREsponse.main.temp_min,
    temp_max: jsonREsponse.main.temp_max,
    humidity: jsonREsponse.main.humidity,
    feelsLike: jsonREsponse.main.feels_like,
    weather: jsonREsponse.weather[0].description,
 };
 console.log(result);
}
    let [city, setCity] = useState("");
    

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
         getWeatherInfo (city);
    }
    return(
        <div className="search-box">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
              <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
              <br/><br/>
                <Button variant="contained" type="submit"> Search </Button>
            </form>
        </div>
    );
}