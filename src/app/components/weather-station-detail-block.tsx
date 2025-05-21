import { RootState } from "../../../stores/store"
import { useSelector } from "react-redux"
import dayjs from "dayjs"

export default function WeatherStationDetailBlock({
  title,
  value,
}: {
  title: string
  value: string
}) {
  // Get variables from Redux store
  const variables = useSelector((state: RootState) => state.variables.value)

  // Get variable that match the title only if available
  const { unit, long_name } = variables.filter(
    (variable) => variable.name === title
  )[0] ?? {
    unit: "",
    long_name: "",
  }

  // Format timestamp
  const formattedTimestamp =
    title === "timestamp" ? dayjs(value).format("YYYY-MM-DD HH:mm:ss") : value

  return (
    <dl className="flex items-center gap-[0.25rem]">
      {long_name && <dt className="font-bold capitalize">{long_name}:</dt>}
      {!long_name && <dt className="font-bold capitalize">{title}:</dt>}

      {unit && title !== "timestamp" && (
        <dd>
          {value} {unit}
        </dd>
      )}
      {!unit && title !== "timestamp" && <dd>{value}</dd>}
      {title === "timestamp" && <dd>{formattedTimestamp}</dd>}
    </dl>
  )
}
