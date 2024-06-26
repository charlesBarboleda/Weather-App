import React from 'react'

const Weather = ( {weatherData} ) => {
  return (
    <div >
       {weatherData.weather ? (
          <div className="w-[20rem] h-[10rem] bg-gray-600 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
            <div className="flex justify-between w-full">
              <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
                <div className="flex flex-col items-start justify-between h-full">
                  <div>
                    <p className="text-xs flex">
                      {new Date().toDateString()}
                    </p>
                    <p className="text-xl">
                      {weatherData.name},
                      {weatherData.sys.country}
                    </p>
                    <p className="text-xs flex justify-start">
                      {weatherData.weather[0].description}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold">
                        {weatherData.main.temp.toFixed()
                        }°C
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col">
                <div className="flex justify-center">
                  <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className="flex justify-center w-[4rem]"/>
                </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly my-4 mx-auto text-xs">
                  <div className="flex justify-between">
                    <p>Feels Like</p>
                    <p className="flex justify-end font-bold w-10">{weatherData.main.feels_like.toFixed()}°C</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Humidity</p>
                    <p className="flex justify-end  font-bold w-10">{weatherData.main.humidity}%</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Wind Speed</p>
                    <p className="flex justify-end font-bold w-10">{weatherData.wind.speed.toFixed()}KPH </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Pressure</p>
                    <p className="flex justify-end font-bold w-10">{weatherData.main.pressure}hPa </p>
                  </div>
                </div>
              ): null}
              </div>
            </div>
          </div>

       ): null}
    </div>
  )
}

export default Weather
