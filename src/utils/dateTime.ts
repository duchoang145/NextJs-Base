export const getDate = (
  date?: number | string | Date,
  changeType?: boolean
) => {
  const today = new Date(date || new Date())
  const day = String(today.getDate()).padStart(2, "0")
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const year = today.getFullYear()

  const formattedDate = `${day}/${month}/${year}`
  const formattedDate2 = `${year}/${month}/${day}`

  return changeType ? formattedDate2 : formattedDate
}
