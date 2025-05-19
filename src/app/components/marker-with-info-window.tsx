"use client"

import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps"
import { useCallback, useState } from "react"

export default function MarkerWithInfoWindow({
  position,
  
}: {
  position: { lat: number; lng: number }
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
      />

      {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          <h2>text content</h2>
          <p>more text</p>
        </InfoWindow>
      )}
    </>
  )
}
