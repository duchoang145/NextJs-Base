import { dayjs } from "@/utils/dayjs"
import { type ClassValue, clsx } from "clsx"
import get from "lodash/get"
import { twMerge } from "tailwind-merge"

export const isValidEmail = (email: string): boolean => {
  const pattern: RegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/
  return pattern.test(email)
}

export const spreadDateRange = (dateRange: unknown) => {
  const dateRangeFrom = get(dateRange, "from", undefined)
  const dateRangeTo = get(dateRange, "to", undefined)

  const startDate = dateRangeFrom
    ? dayjs(dateRangeFrom).toISOString()
    : undefined
  const endDate = dateRangeTo ? dayjs(dateRangeTo).toISOString() : undefined

  return {
    startDate,
    endDate,
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getVariantOptionsFromVariant = (
  variant: string,
  VariantOptions: string[]
) => {
  // Split temp into parts
  const tempParts = new Set(variant.split("/").map((part) => part.trim()))

  // Find matching elements from VariantOptions
  return VariantOptions.filter((item) => {
    const itemParts = new Set(item.split("/").map((part) => part.trim()))
    return [...itemParts].every((part) => tempParts.has(part))
  })
}

export const createPathWithReferral = (
  basePath: string,
  referralCode?: string
) => {
  if (!referralCode) return basePath
  return `${basePath}?ref=${referralCode}`
}
