import { createPostgrestClient } from "./postgrest";
import { validateEnv } from "./api-utils";

/**
 * Utility class for common CRUD operations with PostgREST
 */
export default class CrudOperations {
  constructor(private tableName: string) {}

  private get client() {
    return createPostgrestClient();
  }

  /**
   * Fetches multiple records with optional filtering, sorting, and pagination
   */
  async findMany(
    filters?: Record<string, any>,
    params?: {
      limit?: number;
      offset?: number;
      orderBy?: {
        column: string;
        direction: "asc" | "desc";
      };
    },
  ) {
    validateEnv();
    const { limit, offset, orderBy } = params || {};

    let query = this.client
      .from(this.tableName)
      .select("*")

    if (orderBy) {
      query = query.order(orderBy.column, {
        ascending: orderBy.direction === "asc",
      });
    }

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          query = query.eq(key, value);
        }
      });
    }

    if (limit && offset !== undefined) {
      query = query.range(offset, offset + limit - 1);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Failed to fetch ${this.tableName}: ${error.message}`);
    }

    return data;
  }

  /**
   * Fetches a single record by its ID
   */
  async findById(id: string | number) {
    validateEnv();

    const { data, error } = await this.client
      .from(this.tableName)
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null;
      }
      throw new Error(
        `Failed to fetch ${this.tableName} by id: ${error.message}`
      );
    }

    return data;
  }

  /**
   * Creates a new record in the table
   */
  async create(data: Record<string, any>) {
    validateEnv();
      
    const res = await this.client
      .from(this.tableName)
      .insert([data])
      .select()
      .single();

    const { data: result, error } = res;

    if (error) {
      throw new Error(`Failed to create ${this.tableName}: ${error.message}`);
    }

    return result;
  }

  /**
   * Updates an existing record by ID
   */
  async update(
    id: string | number,
    data: Record<string, any>
  ) {
    validateEnv();

    const { data: result, error } = await this.client
      .from(this.tableName)
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update ${this.tableName}: ${error.message}`);
    }

    return result;
  }

  /**
   * Deletes a record by ID
   */
  async delete(id: string | number) {
    validateEnv();

    const { error } = await this.client.from(this.tableName).delete().eq("id", id);

    if (error) {
      throw new Error(`Failed to delete ${this.tableName}: ${error.message}`);
    }

    return { id };
  }
}