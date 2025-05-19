"use client"

import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps"

export default function Map({
  weatherStations=[],
}: {
  weatherStations: IWeatherStation[]
}) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || ""

  const markers = weatherStations.map((weatherStation) => (
    <Marker
      key={weatherStation.id}
      position={{
        lat: Number(weatherStation.latitude),
        lng: Number(weatherStation.longitude),
      }}
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
        >
          {markers}
        </GoogleMap>
      </APIProvider>
    </div>
  )
}
