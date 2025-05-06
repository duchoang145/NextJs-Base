import { useState } from "react"
import { message } from "../utils/message"

type SuccessCallback<P> = (response?: P) => void
type ErrorCallback = (error?: unknown) => void

export type AsyncReturnType<
  T extends (...args: unknown[]) => Promise<unknown>,
> = T extends (...args: unknown[]) => Promise<infer R> ? R : unknown

export function useApiRequest<T extends Iterable<unknown>, P>() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function makeApiRequest({
    context,
    method,
    params,
    successMessage,
    errorMessage,
    successCallback,
    errorCallback,
  }: {
    context: unknown
    method: string
    params?: T
    successMessage?: string
    errorMessage?: string
    successCallback?: SuccessCallback<P>
    errorCallback?: ErrorCallback
  }): Promise<P> {
    setIsLoading(true)
    let response: P | unknown = null
    try {
      response = await (
        context as Record<string, (...args: unknown[]) => Promise<unknown>>
      )[method](...(params ?? []))
      if (successCallback) {
        successCallback(response as P)
      }
      if (successMessage) {
        message(successMessage, "success")()
      }
    } catch (error) {
      console.error(error)
      if (errorCallback) {
        errorCallback(error)
      }
      if (errorMessage) {
        message(errorMessage, "error")()
      }
    } finally {
      setIsLoading(false)
    }
    return response as P
  }

  return {
    isLoading,
    makeApiRequest,
  }
}
