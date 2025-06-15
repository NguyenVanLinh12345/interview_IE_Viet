import { cookies } from 'next/headers';

export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { token } = body;

    if (token) {
        cookies().set(
            'access',
            token,
            {
                httpOnly: true,
                secure: true
            }
        );
    }

    const response = new Response(null, {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });

    return response;
}