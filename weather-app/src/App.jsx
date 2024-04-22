import './App.css'
import Axios from 'axios'
import { useState } from 'react'
import Weather from './components/Weather'

function App() {

  const [ data, setData ] = useState({})
  const [ location, setLocation] = useState("")

  const API_KEY = "ab9ec1d191fefda968263ca546fa087c"
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&limit=3&appid=${API_KEY}`

  const searchLocation = (event) => {
    if(event.key === "Enter") {
      Axios.get(url)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation("")
    }
  }
  
  return (
      <div className="w-full h-full relative">
        <div className="text-center p-4">
          <input 
          type="text" 
          className="text-center w-[15rem] h-[2rem] text-lg rounded-3xl border border-gray-200 
          text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 
          shadow-md"
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation} />
      </div>
      <Weather weatherData={data} />
      </div>
     
  )
}

export default App
