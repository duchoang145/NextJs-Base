import { setCookie } from 'cookies-next'
import type { NextRequest } from 'next/server'
import { NextResponse, userAgent } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|umami|.well-known|[\\w-]+\\.\\w+).*)'
  ]
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl
  const res = NextResponse.next()

  const { device } = userAgent(req)
  const isMobile = device.type === 'mobile'

  setCookie('isMobile', isMobile, { res, req })

  const response = NextResponse.rewrite(url)
  response.cookies.set('isMobile', isMobile?.toString())
  return response
}
