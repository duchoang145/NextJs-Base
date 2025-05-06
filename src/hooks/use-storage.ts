import { useCallback, useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(
    key,
    defaultValue,
    typeof window !== "undefined" ? window.localStorage : null
  )
}

export function useSessionStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(
    key,
    defaultValue,
    typeof window !== "undefined" ? window.sessionStorage : null
  )
}

function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: Storage | null
): [T | null, React.Dispatch<React.SetStateAction<T | null>>, () => void] {
  const [value, setValue] = useState<T | null>(() => {
    if (storageObject) {
      const jsonValue = storageObject.getItem(key)
      if (jsonValue !== null) return JSON.parse(jsonValue)
    }

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)()
    }

    return defaultValue
  })

  useEffect(() => {
    if (storageObject) {
      if (value === undefined) return storageObject.removeItem(key)
      storageObject.setItem(key, JSON.stringify(value))
    }
  }, [key, value, storageObject])

  const remove = useCallback(() => {
    setValue(null)
  }, [])

  return [value, setValue, remove]
}
