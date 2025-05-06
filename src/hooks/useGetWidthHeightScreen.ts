import { useEffect, useState } from "react"

export const SCREEN_SIZE: { xs: number; sm: number; md: number } = {
  xs: 480,
  sm: 640,
  md: 768,
}

const UseGetWidthHeightScreen = (
  isIframe = false,
  idIframe = "iframe-content-page-builder"
) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const iframe = isIframe
      ? document.querySelector<HTMLIFrameElement>(`#${idIframe}`)?.contentWindow
      : window

    if (!iframe) return

    const handleResize = () => {
      setWidth(iframe.innerWidth)
      setHeight(iframe.innerHeight)
    }
    handleResize()

    iframe.addEventListener("resize", handleResize)

    return () => {
      iframe.removeEventListener("resize", handleResize)
    }
  }, [isIframe, idIframe])

  return { width, height }
}

export default UseGetWidthHeightScreen
