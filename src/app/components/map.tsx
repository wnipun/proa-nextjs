"use client"

import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps"
import MarkerWithInfoWindow from "./marker-with-info-window"
import { useDispatch } from "react-redux"
import { setVariables } from "../../../stores/features/variables-slice"

export default function Map({
  weatherStations,
  variables,
}: {
  weatherStations: IWeatherStation[]
  variables: IVariable[]
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || ""

  const dispatch = useDispatch()
  dispatch(setVariables(variables))

  const markers = weatherStations.map((weatherStation) => (
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
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
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
