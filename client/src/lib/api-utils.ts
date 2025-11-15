import { NextRequest } from "next/server";
import { createErrorResponse } from "./create-response";

/**
 * Validates that required PostgREST environment variables are set
 */
export function validateEnv(): void {
  const requiredVars = [
    "POSTGREST_URL",
    "POSTGREST_SCHEMA",
    "POSTGREST_API_KEY",
  ];
  const missing = requiredVars.filter((varName) => !process.env[varName]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}

/**
 * Parses common query parameters from a request URL
 */
export function parseQueryParams(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  return {
    limit: parseInt(searchParams.get("limit") || "10"),
    offset: parseInt(searchParams.get("offset") || "0"),
    id: searchParams.get("id"),
    search: searchParams.get("search"),
  };
}

/**
 * Validates and parses JSON request body with error handling
 */
export async function validateRequestBody(request: NextRequest): Promise<any> {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      throw new Error("Invalid request body");
    }

    return body;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("Invalid JSON in request body");
    }
    throw error;
  }
}

/**
 * Higher-order function Verify token
 */
export function requestMiddleware(
  handler: (request: NextRequest) => Promise<Response>
) {
  return async (request: NextRequest): Promise<Response> => {
    try {
      return await handler(request);
    }
    catch (error: unknown) {
      // Pass through Response objects as-is
      if (error instanceof Response) {
        return error;
      }

      const anyError = error as any;
      const errorMessage: string =
        typeof anyError?.message === "string"
          ? anyError.message
          : "Request failed";
      const status: number =
        typeof anyError?.status === "number"
          ? anyError.status
          : typeof anyError?.statusCode === "number"
          ? anyError.statusCode
          : 500;
      const errorCode: string | undefined =
        typeof anyError?.code === "string" ? anyError.code : undefined;

      return createErrorResponse({
        errorCode,
        errorMessage,
        status,
      });
    }
  };
}
