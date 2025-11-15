import { createSuccessResponse } from '@/lib/create-response';
import { requestMiddleware } from "@/lib/api-utils";

// GET request - health check endpoint
export const GET = requestMiddleware(async () => {
  return createSuccessResponse({ status: 'ok' });
});
