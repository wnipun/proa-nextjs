"use client"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../../../stores/features/filter-slice"
import { RootState } from "../../../../stores/store"
import { getWeatherStations } from "../../lib/weather-stations"
import { setWeatherStations } from "../../../../stores/features/weather-stations-slice"
import styles from './sidebar.module.css'

export default function Sidebar() {
  const dispatch = useDispatch()

  // Set filter value to Redux store on change
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value))
  }

  // Set filter value
  const filter = useSelector((state: RootState) => state.filter.value)

  // Fetch weather stations on component mount or filter change
  useEffect(() => {
    async function fetchWeatherStations() {
      const weatherStations = await getWeatherStations(filter)
      dispatch(setWeatherStations(weatherStations))
    }
    fetchWeatherStations()
  }, [filter, dispatch])

  return (
    <aside className={styles.sidebar}>
      <h2>Filters</h2>
      <select onChange={handleChange} name="states" className="text-sm">
        <option value="">All</option>
        <option value="VIC">VIC</option>
        <option value="NSW">NSW</option>
        <option value="SA">SA</option>
        <option value="QLD">QLD</option>
      </select>
    </aside>
  )
}
