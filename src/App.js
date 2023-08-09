import TopButton from './components/TopButton';
import Forcast from './components/Forcast';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import { useState, useEffect } from 'react';
import Hourly from './components/Hourly';
import Input from './components/Input';

function App() {
  const [data, setData] = useState(null)
  const [unit, setUnit] = useState("")
  const [querry, setQuerry] = useState("delhi")

  const fetchWeather = async (querry) => {
    const resp = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0703366db24547fc909202038232707&q=${querry}&days=5&aqi=no&alerts=no`)
    const responseData = await resp.json()
    return responseData;
  };
  useEffect(() => {
    async function fetchedData() {
      let newData = await fetchWeather(querry)
      await setData(newData)
      setUnit("C")
    }
    fetchedData()
  }, [querry])

  if (data) {
    var { current, forecast, location } = data

  } else {
    return
  }

  return (
    data && <div className=" max-w-screen-lg mx-auto py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-500">
      <TopButton setQuerry={setQuerry} />
      <Input setUnit={setUnit} setQuerry={setQuerry} />
      <TimeAndLocation location={location} />
      <TempAndDetails data={current} unit={unit} forecast={forecast} />
      <Forcast title='Daily Forcast' unit={unit} forecast={forecast} />
      <Hourly title='Hourly Forcast' unit={unit} forecast={forecast} />
    </div>
  );
}

export default App;
