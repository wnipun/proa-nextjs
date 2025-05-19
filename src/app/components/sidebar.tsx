export default function Sidebar() {
  return (
    <aside className="bg-amber-50 p-[1rem] min-w-[15%] rounded-2xl">
      <h2 className="font-bold text-lg">Filters</h2>
      <select name="states" className="text-sm">
        <option value="VIC">VIC</option>
        <option value="NSW">NSW</option>
        <option value="SA">SA</option>
        <option value="QLD">QLD</option>
      </select>
    </aside>
  )
}
