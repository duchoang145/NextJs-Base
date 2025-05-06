export const calculatePercentage = (
  number1: number,
  number2: number,
  digitsAfterFloatingPoint = 2
): string => {
  if (number1 === 0 || number2 === 0) {
    return "0"
  }
  const percentage = (number1 / number2) * 100
  return percentage.toFixed(digitsAfterFloatingPoint)
}

export const convertNumberToPercent = (number: number) => {
  return `${Number(Math.abs(number).toFixed(2))}%`
}
