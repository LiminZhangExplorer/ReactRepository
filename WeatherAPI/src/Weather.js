import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function Weather()
{

    const [location, setLocation] = useState('Edmonton')
    const [weather, setWeather] = useState('Sunny')


    function getWeather({location})
    {
        const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
        const REACT_APP_API_KEY = '9ad8f35f00f75207fd7fc0e38235d180'
       
        

        //useEffect(() => {

            const lat = 45.68;
            const long = 9.23;
            const apikey = REACT_APP_API_KEY;

            fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&exclude=current,minutely,hourly&appid="+apikey)
              .then((response) => response.json())
              .then((data) => {
                setWeather(data.daily);
                console.log(data);
              })
              .catch((error) => console.log(error));
         // }, []);

        let w = location + ': xSunny';
        setWeather(w);
    }


    return (

        <>

        <div>
            <label>Location:
            <input name = 'location' value={location} onChange={e => setLocation(e.target.value)} ></input>
            </label>
            <button onClick={()=> getWeather({location:location})}></button>
        </div>

        <div>
            Weather: {weather}
        </div>

        </>
    );
}

export default Weather;