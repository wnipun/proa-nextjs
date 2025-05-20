import { RootState } from "../../../stores/store"
import { useSelector } from "react-redux"

export default function WeatherStationDetailBlock({
  title,
  value,
}: {
  title: string
  value: string
}) {
  const variables = useSelector((state: RootState) => state.variables.value)
  const { unit, long_name } = variables.filter(
    (variable) => variable.name === title
  )[0] ?? {
    unit: "",
    long_name: "",
  }
  // console.log(t)

  return (
    <dl className="flex items-center gap-[0.25rem]">
      {long_name && <dt className="font-bold capitalize">{long_name}:</dt>}
      {!long_name && <dt className="font-bold capitalize">{title}:</dt>}

      {unit && title !== 'timestamp' && <dd>{value} {unit}</dd>}
      {!unit && title !== 'timestamp' && <dd>{value}</dd>}
      {title === 'timestamp' && <dd>{value}</dd>}
    </dl>
  )
}
