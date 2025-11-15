/**
 * Creates a JSON success response with custom structure
 */
export function createSuccessResponse<T>(
  data: T,
  status: number = 200
): Response {
  return new Response(
    JSON.stringify({
      success: true,
      data,
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

/**
 * Creates a JSON error response with custom structure
 */
export function createErrorResponse(params: {
  errorCode?: string;
  errorMessage: string;
  status?: number;
}): Response {
  const { errorCode, errorMessage, status = 500 } = params;
  return new Response(
    JSON.stringify({
      success: false,
      errorCode,
      errorMessage,
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
