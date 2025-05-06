export default function getCountries(lang = "en") {
  const A = 65
  const Z = 90
  const countryName = new Intl.DisplayNames([lang], { type: "region" })
  const countries: Record<string, string> = {}

  const uniqueNames = new Set()

  for (let i = A; i <= Z; ++i) {
    for (let j = A; j <= Z; ++j) {
      const code = String.fromCharCode(i) + String.fromCharCode(j)
      const name = countryName.of(code)
      if (name && code !== name && !uniqueNames.has(name)) {
        countries[code] = name
        uniqueNames.add(name)
      }
    }
  }
  return countries
}
