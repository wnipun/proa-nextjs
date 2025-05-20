"use server"
export async function getVariables() {
  const apiBase = process.env.API_BASE || ""
  const variablesData = await fetch(`${apiBase}/variables`)

  return (await variablesData.json()) as IVariable[]
}
