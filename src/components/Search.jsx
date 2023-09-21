import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../css/Search.css';

function Search({ seth, setp, settemp, setweather, setcity, setweatherdesc,notFound}) {
  const api_key = "";

  const getWeather = async (cityName) => {
    try {
      const url = `openweatherapiq=${cityName}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      if(data.name === undefined)
      {
        notFound(true);
      }
      else{
        notFound(false);
        setcity(data.name);
        seth(Math.floor(data.main.humidity));
        setp(Math.floor(data.main.pressure));
        settemp(Math.floor(data.main.temp));
        setweather(data.weather[0].description.toUpperCase());
        setweatherdesc(data.weather[0].main.toUpperCase());
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        const cityName = e.target.value.trim() || " ";
        getWeather(cityName);
        document.getElementById("searchInput").value = "";
      }
    };

    const inputElement = document.getElementById("searchInput");
    inputElement.addEventListener("keyup", handleKeyPress);

    return () => {
      inputElement.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div className='search'>
        <AiOutlineSearch />
        <input id="searchInput" type='text' placeholder='Search for city or country' />
      </div>
    </div>
  );
}

export default Search;
