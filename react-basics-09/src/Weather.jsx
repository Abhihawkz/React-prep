import React from 'react'

const Weather = ({temp}) => {
  if(temp > 25 ){
    return <h1>It's Hot outside.</h1>
  }else if(temp <25 && temp > 15){
    return <h2>It's nice outside.</h2>
  }else if(temp < 15){
    return <h2>It's Cold outside.</h2>
  }
}

export default Weather;