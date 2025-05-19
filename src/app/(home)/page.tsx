import { Suspense } from "react";
import Map from "../components/map"

export default async function Home() {

    const apiBase = process.env.API_BASE || ''
    const data = await fetch(`${apiBase}/weather-stations`)
    const weatherStations = await data.json() as IWeatherStation[]
    

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Map weatherStations={weatherStations}/>
    </Suspense>
  )
}
