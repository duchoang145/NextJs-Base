import dayjs, { Dayjs } from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import customParseFormat from "dayjs/plugin/customParseFormat"
import isBetween from "dayjs/plugin/isBetween"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isToday from "dayjs/plugin/isToday"
import isTomorrow from "dayjs/plugin/isTomorrow"
import isYesterday from "dayjs/plugin/isYesterday"
import localizedFormat from "dayjs/plugin/localizedFormat"
import relativeTime from "dayjs/plugin/relativeTime"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import "dayjs/locale/en"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(isBetween)
dayjs.extend(isYesterday)
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(relativeTime)
dayjs.extend(isSameOrAfter)

dayjs.locale("en")

export {
  dayjs,
  Dayjs,
  utc,
  timezone,
  localizedFormat,
  advancedFormat,
  customParseFormat,
  isBetween,
  isYesterday,
  isToday,
  isTomorrow,
  relativeTime,
}
