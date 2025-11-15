import CrudOperations from '@/lib/crud-operations';
import { createSuccessResponse, createErrorResponse } from '@/lib/create-response';
import { requestMiddleware, parseQueryParams, validateRequestBody } from "@/lib/api-utils";

// GET request - fetch data
export const GET = requestMiddleware(async (request) => {
  const { limit, offset, search } = parseQueryParams(request);
  // Create CRUD operations instance for examples table - The token is obtained from the parameters
  const examplesCrud = new CrudOperations("examples");
  // Build filter conditions
  const filters: Record<string, any> = {};
  if (search) {
    // Add search logic based on actual requirements
    // Note: PostgREST doesn't support complex search, handle at app layer
    filters.name = search; // Search by name field
  }
  const data = await examplesCrud.findMany(filters, { limit, offset });
  return createSuccessResponse(data);
});

// POST request - create data
export const POST = requestMiddleware(async (request) => {
  const body = await validateRequestBody(request);
  // Add specific data validation logic here
  // Example: check required fields, data format, etc.
  if (!body.name) {
    return createErrorResponse({
      errorMessage: "Name is required",
      status: 400,
    });
  }
  const examplesCrud = new CrudOperations("examples");
  const data = await examplesCrud.create({ ...body });
  return createSuccessResponse(data, 201);
});

// PUT request - update data
export const PUT = requestMiddleware(async (request) => {
  const { id } = parseQueryParams(request);

  if (!id) {
    return createErrorResponse({
      errorMessage: "Name is required",
      status: 400,
    });
  }
  const body = await validateRequestBody(request);
  const examplesCrud = new CrudOperations("examples");
  // Check if record exists
  const existing = await examplesCrud.findById(id);
  if (!existing) {
    return createErrorResponse({
      errorMessage: "Record not found",
      status: 400,
    });
  }
  const data = await examplesCrud.update(id, body);
  return createSuccessResponse(data);
});

// DELETE request - delete data
export const DELETE = requestMiddleware(async (request) => {
  const { id } = parseQueryParams(request);
  if (!id) {
    return createErrorResponse({
      errorMessage: "ID parameter is required",
      status: 400,
    });
  }
  const examplesCrud = new CrudOperations("examples");
  // Check if record exists
  const existing = await examplesCrud.findById(id);
  if (!existing) {
    return createErrorResponse({
      errorMessage: "Record not found",
      status: 400,
    });
  }
  const data = await examplesCrud.delete(id);
  return createSuccessResponse(data);
});
