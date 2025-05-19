import { Suspense } from "react";
import Map from "../components/map"

export default async function Home() {

    const data = await fetch('http://localhost:3000/weather-stations')
    const weatherStations = await data.json() as IWeatherStation[]
    

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Map weatherStations={weatherStations}/>
    </Suspense>
  )
}
