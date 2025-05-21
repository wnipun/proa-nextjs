"use client"

import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps"
import React, { useCallback, useState } from "react"
import WeatherStationDetailBlock from "./weather-station-detail-block"
import Image from "next/image"

export default function MarkerWithInfoWindow({
  position,
  weatherStation,
}: {
  position: { lat: number; lng: number }
  weatherStation: IWeatherStation
}) {
  // Reference for the marker and its instance
  const [markerRef, marker] = useAdvancedMarkerRef()

  // State to control visibility of the info window
  const [infoWindowShown, setInfoWindowShown] = useState(false)

  // Toggle info window on marker click
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  )

  // Close info window handler
  const handleClose = useCallback(() => setInfoWindowShown(false), [])

  // Extract weather station data
  const data =
    weatherStation.data.map((data) => {
      return Object.entries({...data, id: '', weather_station_id: ''})
    }) ?? []

  // Prepare data, use the first data entry if available
  let dataEntries: React.ReactElement[] = []
  if (data.length) {
    dataEntries = data[0]
      .filter((entry) => entry[1])
      .map((entry) => (
        <WeatherStationDetailBlock
          key={entry[0]}
          title={entry[0]}
          value={entry[1]}
        />
      ))
  }

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      >
        <Image
          src={`/solar-icon.png`}
          alt={weatherStation.ws_name}
          width={30}
          height={30}
        />
      </AdvancedMarker>

      {infoWindowShown && (
        <InfoWindow
          anchor={marker}
          onClose={handleClose}
          headerContent={
            <h2 className="font-bold uppercase">{weatherStation.ws_name}</h2>
          }
          className="space-y-[0.5rem]"
        >
          <WeatherStationDetailBlock title="Site" value={weatherStation.site} />
          <WeatherStationDetailBlock
            title="Portfolio"
            value={weatherStation.portfolio}
          />
          {dataEntries}
        </InfoWindow>
      )}
    </>
  )
}
