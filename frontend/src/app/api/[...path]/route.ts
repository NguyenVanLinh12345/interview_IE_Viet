import { NextRequest, NextResponse } from "next/server";

async function handler(path: string, method: string, accessToken: string, body?: any) {
    const response = await fetch(`${process.env.SERVER_API}${path}`, {
        method: method,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': `application/json`
        },
        ...(
            (method !== 'GET' && body)
                ? {
                    body: body,
                    duplex: 'half'
                }
                : {}
        )
    })
    return await response.json();
}

export async function GET(request: NextRequest) {
    const accessToken = request.cookies.get('access')?.value;
    const { pathname } = request.nextUrl;

    const response = await handler(pathname, 'GET', accessToken ?? '');
    return NextResponse.json({
        data: response
    }, { status: 200 });
}

export async function POST(request: NextRequest) {
    const accessToken = request.cookies.get('access')?.value;
    const { pathname } = request.nextUrl;

    const response = await handler(pathname, 'POST', accessToken ?? '', request.body);
    return NextResponse.json({
        data: response
    }, { status: 200 });
}

export async function PUT(request: NextRequest) {
    const accessToken = request.cookies.get('access')?.value;
    const { pathname } = request.nextUrl;

    const response = await handler(pathname, 'PUT', accessToken ?? '', request.body);
    return NextResponse.json({
        data: response
    }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
    const accessToken = request.cookies.get('access')?.value;
    const { pathname } = request.nextUrl;

    const response = await handler(pathname, 'DELETE', accessToken ?? '', request.body);
    return NextResponse.json({
        data: response
    }, { status: 200 });
}