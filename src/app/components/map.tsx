"use client"

import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps"
import MarkerWithInfoWindow from "./marker-with-info-window"
import { useDispatch, useSelector } from "react-redux"
import { setVariables } from "../../../stores/features/variables-slice"
import { RootState } from "../../../stores/store"
import { useEffect } from "react"

export default function Map({
  variables,
}: {
  variables: Promise<IVariable[]>
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || ""

  // Get all weather stations from Redux store
  const allWeatherStations = useSelector(
    (state: RootState) => state.weatherStations.value
  )

  // Fetch variables when component mount and set it to Redux store
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchVariables() {
      const resolvedVariables = await variables
      dispatch(setVariables(resolvedVariables))
    }
    fetchVariables()
  }, [variables, dispatch])

  // Create marker components for each weather station
  const markers = allWeatherStations.map((weatherStation) => (
    <MarkerWithInfoWindow
      key={weatherStation.id}
      position={{
        lat: Number(weatherStation.latitude),
        lng: Number(weatherStation.longitude),
      }}
      weatherStation={weatherStation}
    />
  ))

  return (
    <div className="bg-amber-50 rounded-2xl h-[100%] overflow-hidden">
      <APIProvider apiKey={apiKey}>
        <GoogleMap
          style={{ width: "100%", height: "80vh" }}
          defaultCenter={{ lat: -25.2744, lng: 133.7751 }}
          defaultZoom={4}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={mapId}
        >
          {markers}
        </GoogleMap>
      </APIProvider>
    </div>
  )
}
