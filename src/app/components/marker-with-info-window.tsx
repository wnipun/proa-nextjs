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
  const [markerRef, marker] = useAdvancedMarkerRef()
  const [infoWindowShown, setInfoWindowShown] = useState(false)

  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  )

  const handleClose = useCallback(() => setInfoWindowShown(false), [])

  const data =
    weatherStation.data.map((data) => {
      const { id, weather_station_id, ...rest } = data
      return Object.entries(rest)
    }) ?? []

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
