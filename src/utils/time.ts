import { dayjs } from "@/utils/dayjs"

export const generate24HourFormat = (): string[] => {
  const hoursInDay: number = 24
  const timeFormatOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: true,
  }

  const timeSlots: string[] = []

  for (let hour = 0; hour < hoursInDay; hour++) {
    const date = new Date()
    date.setHours(hour)
    const timeSlot = date.toLocaleTimeString("en-US", timeFormatOptions)
    timeSlots.push(timeSlot)
  }

  return timeSlots
}

export const getMinuteToday = (timezone: string) => {
  const now = dayjs().tz(timezone)

  // Lấy giờ và phút hiện tại
  const hours = now.hour()
  const minutes = now.minute()

  // Tính tổng số phút từ đầu ngày
  const totalMinutes = hours * 60 + minutes

  return totalMinutes
}

export const formatTime = (time?: Date | string | number) => {
  return new Date(time || new Date())
    .toISOString()
    .slice(0, 19)
    .replace("T", " ")
}
