"use client"

import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps"

export default function Map() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || ""

  return (
    <div className="bg-amber-50 rounded-2xl h-[100%] overflow-hidden">
      <APIProvider apiKey={apiKey}>
        <GoogleMap
          style={{ width: "100%", height: "80vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  )
}
