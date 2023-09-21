import React from 'react';
import '../css/Content.css';
function Content({h,p,temp,weather,city,notFound}) {
  return notFound ? (
  <>
 <div className='maincontent'>
        <div className='content content2'>
            <h2>This county/city is not found in our systems...</h2>
        </div>
    </div>
  </>
  ) : (
    <div className='maincontent'>
        <div className='content'>
            <h2>{city}</h2>
            <h1>{temp}°</h1>
            <h4>{weather}</h4>
                <div>
                <h5>H:{h}°</h5>
                <h5>P:{p}°</h5>
                </div>
        </div>
    </div>
  )
}

export default Content