import { Suspense } from "react"
import Map from "../components/map"

export default async function Home() {
  const apiBase = process.env.API_BASE || ""
  const data = await fetch(`${apiBase}/weather-stations`)
  const weatherStations = (await data.json()) as IWeatherStation[]

  const variablesData = await fetch(`${apiBase}/variables`)
  const variables = (await variablesData.json()) as IVariable[]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Map weatherStations={weatherStations} variables={variables}/>
    </Suspense>
  )
}
