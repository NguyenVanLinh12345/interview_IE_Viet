import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('access'); // { name: 'access', value: '' }

    const { pathname } = request.nextUrl; // Lấy pathname từ URL

    if (pathname.startsWith('/auth/')) {
        if (accessToken) {
            if (pathname.includes('/employee')) {
                return NextResponse.redirect(new URL('/employee', request.url));
            }
            if (pathname.includes('/owner')) {
                return NextResponse.redirect(new URL('/owner', request.url));
            }
        }
        return NextResponse.next();
    }

    if (pathname.startsWith('/employee/') || pathname.startsWith('/owner/')) {
        if (!accessToken) {
            const loginPath = pathname.startsWith('/employee/') ? '/auth/employee' : '/auth/owner';
            return NextResponse.redirect(new URL(loginPath, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/employee/:path*', '/owner/:path*', '/auth/:path*'],
}