export function handleErrors(response: Response) {
    console.log(response);
    if (!response.ok) {
        throw Error('Error');
    }
    return response;
}

export function getAuthHeader() {
    let headers = new Headers();
    if (localStorage.getItem('token') !== null) {
        headers.append('Authorization', `Bearer ${JSON.parse(localStorage.getItem('token') as string) || ''}`);
    }
    return headers;
}

export function getHeaders() {
    let headers = getAuthHeader();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
}

function getPDFHeaders() {
    let headers = getAuthHeader();
    headers.append('Accept', 'application/pdf');
    headers.append('Content-Type', 'application/pdf');
    return headers;
}

export async function PDFGET(url: string) {
    return await (await fetch(url, { headers: getPDFHeaders(), credentials: 'include', method: 'GET' }).then(handleErrors)).blob().catch(handleErrors);
}

export async function GET(url: string, body?: string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined, headers?: Headers | string[][] | Record<string, string> | undefined) {
    return await (await fetch(url, { body: body, headers: headers || getHeaders(), credentials: 'include', method: 'GET' }).then(handleErrors)).json().catch(handleErrors);
}

export async function POST(url: string, body?: string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined, headers?: Headers | string[][] | Record<string, string> | undefined) {
    return await (await fetch(url, { body: body, headers: headers || getHeaders(), credentials: 'include', method: 'POST' }).then(handleErrors)).json().catch(handleErrors);
}

export async function PUT(url: string, body?: string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined, headers?: Headers | string[][] | Record<string, string> | undefined) {
    return await (await fetch(url, { body: body, headers: headers || getHeaders(), credentials: 'include', method: 'PUT' }).then(handleErrors)).json().catch(handleErrors);
}

export async function DELETE(url: string, body?: string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined, headers?: Headers | string[][] | Record<string, string> | undefined) {
    return await (await fetch(url, { body: body, headers: headers || getHeaders(), credentials: 'include', method: 'DELETE' }).then(handleErrors)).json().catch(handleErrors);
}
