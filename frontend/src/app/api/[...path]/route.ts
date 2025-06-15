import { NextRequest, NextResponse } from "next/server";

const backendAPI = ''
async function handler(path: string, method: string, accessToken: string, body?: any) {
    const response = await fetch(`${backendAPI}${path}`, {
        method: method,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': `application/json`
        },
        ...((method !== 'GET' && body) ? { body: body } : {})
    })
}

export async function GET(request: NextRequest) {
    const accessToken = request.cookies.get('access')?.value;
    const { pathname } = request.nextUrl;

    console.log(request.method, request.body);
    console.log('access', accessToken);
    console.log('pathname', pathname);

    return NextResponse.json({
        data: 'oke-nha'
    }, { status: 200 });
}

export async function POST(request: NextRequest) {
    const accessToken = request.cookies.get('access');
    const { pathname } = request.nextUrl;

    console.log(request.method, request.body);
    console.log('access', accessToken);
    console.log('pathname', pathname);

    return NextResponse.json({
        data: 'oke-nha'
    }, { status: 200 });
}

export async function PUT(request: NextRequest) {
    const accessToken = request.cookies.get('access');
    const { pathname } = request.nextUrl;

    console.log(request.method, request.body);
    console.log('access', accessToken);
    console.log('pathname', pathname);

    return NextResponse.json({
        data: 'oke-nha'
    }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
    const accessToken = request.cookies.get('access');
    const { pathname } = request.nextUrl;

    console.log(request.method, request.body);
    console.log('access', accessToken);
    console.log('pathname', pathname);

    return NextResponse.json({
        data: 'oke-nha'
    }, { status: 200 });
}