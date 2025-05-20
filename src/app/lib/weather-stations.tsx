"use server"
export async function getWeatherStations(filter: string) {
  const apiBase = process.env.API_BASE || ""

  const data = await fetch(`${apiBase}/weather-stations/by-state`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      state: filter,
    }),
  })

  return (await data.json()) as IWeatherStation[]
}
