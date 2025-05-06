export const isValidNumber = (value?: string | number): boolean => {
  return (
    value != null && value !== "" && !Number.isNaN(Number(value.toString()))
  )
}
export const numberWithCommas = (num: string | number): string => {
  if (typeof num !== "string" && typeof num !== "number") return "0"
  const parts = num.toString().split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts.join(".")
}

export const formatNumber = (num: number | string, decimal = 2): string => {
  if (typeof num !== "string" && typeof num !== "number") return "0"
  return Number.parseFloat(num.toString())
    .toFixed(decimal)
    .replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1")
}

export const roundedNumber = (num: number, decimal = 2): string => {
  if (typeof num !== "string" && typeof num !== "number") return "0"

  return Number(num).toLocaleString("en-US", {
    maximumFractionDigits: decimal,
  })
}

const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"] as const

/**
 * Formats a number with SI suffix (k, M, G, etc.)
 * @param num - The number to format
 * @returns Formatted string with appropriate suffix
 * @example
 * formatNumberWithSuffix(1234) // returns "1.2k"
 * formatNumberWithSuffix(1000000) // returns "1.0M"
 */
export const formatNumberWithSuffix = (num: number, decimal = 1): string => {
  if (!Number.isFinite(num)) return "0"

  // Handle zero case
  if (num === 0) return "0"

  // Get the tier (determines SI symbol)
  const tier = Math.min(
    Math.floor(Math.log10(Math.abs(num)) / 3),
    SI_SYMBOL.length - 1
  )

  // If less than 1000, return without suffix
  if (tier < 1) return num.toString()

  const suffix = SI_SYMBOL[tier]
  const scale = 10 ** (tier * 3)
  const scaled = num / scale

  // Format number and add suffix
  return `${roundedNumber(+scaled.toFixed(decimal))}${suffix}`
}
