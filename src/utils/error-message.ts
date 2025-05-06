export const required = ({
  field,
  message,
}: {
  field?: string
  message?: string
}) => {
  if (message) return message
  return `${field ? field : "This field"} is required`
}

export const minLength = ({
  field,
  length,
  message,
}: {
  field?: string
  length?: number
  message?: string
}) => {
  if (message) return message
  return `${field ? field : "This field"} must be at least ${length} characters`
}

export const maxLength = ({
  field,
  length,
  message,
}: {
  field?: string
  length?: number
  message?: string
}) => {
  if (message) return message
  return `${field ? field : "This field"} must be at most ${length} characters`
}

export const invalidEmailMessage = ({ message }: { message?: string }) => {
  if (message) return message
  return "Invalid email format"
}

export const password = ({
  field,
  message,
}: {
  field?: string
  message?: string
}) => {
  if (message) return message
  return `${field ? field : "This field"} must be a valid password`
}

export const min = ({
  min,
  field,
  message,
}: {
  min: number
  field?: string
  message?: string
}) => {
  if (message) return message
  return `${field ? field : "This field"} must be at least ${min}`
}

export const max = ({
  max,
  field,
  message,
}: {
  max: number
  field?: string
  message?: string
}) => {
  if (message) return message
  return `${field ? field : "This field"} must be at most ${max}`
}
