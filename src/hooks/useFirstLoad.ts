import { useEffect, useState } from "react"

export function useFirstLoad() {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)
  useEffect(() => {
    setIsFirstLoad(false)
  }, [])
  return isFirstLoad
}
