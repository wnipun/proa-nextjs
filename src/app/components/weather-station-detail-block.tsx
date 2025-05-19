export default function WeatherStationDetailBlock({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <dl className="flex items-center gap-[0.25rem]">
      <dt className="font-bold">{title}:</dt>
      <dd>{value}</dd>
    </dl>
  )
}
