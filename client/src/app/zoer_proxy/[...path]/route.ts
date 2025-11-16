import { NextRequest, NextResponse } from "next/server";

const POSTGREST_API_KEY = process.env.POSTGREST_API_KEY || "";
const NEXT_PUBLIC_ZOER_HOST = process.env.NEXT_PUBLIC_ZOER_HOST || "https://zoer.ai";
const proxy_path = 'zoer_proxy'

export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}

export async function PUT(request: NextRequest) {
  return handleRequest(request);
}

export async function DELETE(request: NextRequest) {
  return handleRequest(request);
}

export async function PATCH(request: NextRequest) {
  return handleRequest(request);
}

async function handleRequest(request: NextRequest) {
  const url = request.nextUrl;
  const pathSegments = url.pathname.replace(`/${proxy_path}`, "").split("/").filter(Boolean);
  try {
    const targetPath = "/" + pathSegments.join("/");

    const targetUrl = `${NEXT_PUBLIC_ZOER_HOST}${targetPath}${url.search}`;

    const headers = new Headers();

    request.headers.forEach((value, key) => {
      headers.set(key, value);
    });


    headers.set("x-zoer-auth", `${POSTGREST_API_KEY}`);
    headers.set("Postgrest-API-Key", `${POSTGREST_API_KEY}`);
    headers.delete("Authorization");

    const host = NEXT_PUBLIC_ZOER_HOST.split("://")[1];
    if (host) {
      headers.set("Host", host);
    }

    let body: BodyInit | undefined;
    if (["POST", "PUT", "PATCH"].includes(request.method)) {
      body = await request.arrayBuffer();
    }

    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body,
    });

    const responseHeaders = new Headers();
    response.headers.forEach((value, key) => {
      responseHeaders.set(key, value);
    });

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
