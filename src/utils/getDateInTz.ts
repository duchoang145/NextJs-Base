function getDateInTimezone(date: Date, timeZone: string) {
  // Using a locale of 'sv' formats as an ISO date, e.g. yyyy-MM-dd HH:mm.
  const timeInTimeZone = date.toLocaleString("sv", { timeZone })
  // Pass this to the Date constructor
  return new Date(timeInTimeZone)
}

export default getDateInTimezone
