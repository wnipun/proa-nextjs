"use client"

import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps"
import { useCallback, useState } from "react"
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

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      >
        <Image src={`/solar-icon.png`} alt={weatherStation.ws_name} width={30} height={30}/>
      </AdvancedMarker>

      {infoWindowShown && (
        <InfoWindow
          anchor={marker}
          onClose={handleClose}
          headerContent={
            <h2 className="font-bold uppercase">{weatherStation.ws_name}</h2>
          }
        >
          <WeatherStationDetailBlock title="Site" value={weatherStation.site} />
          <WeatherStationDetailBlock
            title="Portfolio"
            value={weatherStation.portfolio}
          />
        </InfoWindow>
      )}
    </>
  )
}
