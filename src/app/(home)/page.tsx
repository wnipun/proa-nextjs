import { Suspense } from "react"
import Map from "../components/map"
import { getVariables } from "../lib/variables"

export default function Home() {
  const variables = getVariables()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Map variables={variables} />
    </Suspense>
  )
}
