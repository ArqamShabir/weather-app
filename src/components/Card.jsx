import React, { useEffect, useState } from 'react';
import '../css/Card.css';
import clear from '../images/clear.jpeg';
import clouds from '../images/cloud.png';
import clouds2 from '../images/cloud2.png';
import clouds3 from '../images/cloud3.jpeg';
import hot from '../images/hot.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';

function Card() {

  const api_key = "";
    const [city,setcity] = useState("London");
    const [temp,settemp] = useState();
    const [weather,setweather] = useState();
    const [weatherdes,setweatherdesc] = useState();
    const [h,seth] = useState();
    const [p,setp] = useState();
    const [found,setfound] = useState(false);

  useEffect(() => {
      const getWaether = async () => {
          let url = `openweatherapi${city}&units=Metric&appid=${api_key}`;
          let response = await fetch(url);
          let data = await response.json();
          setcity(data.name);
          seth(Math.floor(data.main.humidity));
          setp(Math.floor(data.main.pressure));
          settemp(Math.floor(data.main.temp));
          setweather(data.weather[0].description.toUpperCase());
          setweatherdesc(data.weather[0].main.toUpperCase());
      }
      getWaether();
  },[]);

  let bgImageUrl = "";

  if(weatherdes === 'RAIN')
  {
      bgImageUrl = rain;
  }
  else if(weatherdes === 'CLEAR')
  {
      bgImageUrl = clear;
  }
  else if(weatherdes === 'CLOUDS' && weather != 'OVERCAST CLOUDS' && weather != 'BROKEN CLOUDS' && (temp > -5))
  {
      bgImageUrl = clouds;
  }
  else if(weather === 'OVERCAST CLOUDS' && (temp > -5))
  {
      bgImageUrl = clouds2;
  }
  else if(weather === 'BROKEN CLOUDS' && (temp > -5))
  {
      bgImageUrl = clouds3;
  }
  else if(weatherdes === 'SNOW'  || temp < -5)
  {
      bgImageUrl = snow;
  }
  else{
      bgImageUrl = hot;
  }

  const bgStyle = {
    backgroundImage: `url(${bgImageUrl})`,
}

  return (
    <>
        <div className='card' style={bgStyle}>
            <Header/>
            <Search notFound={setfound} setcity={setcity} setweather={setweather} seth={seth} setp={setp} setweatherdesc={setweatherdesc} settemp={settemp}/>
            <Content notFound={found} city={city} weather={weather} h={h} p={p} temp={temp} />
            <Footer/>
        </div>
    </>
  )
}

export default Card
