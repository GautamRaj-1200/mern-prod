import { Response } from "express";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

export const errorHandler = (err: unknown, res: Response): Response => {
  console.error(err);

  if (err instanceof ApiError) {
    return err.toResponse(process.env.NODE_ENV !== "production").send(res);
  }

  const message = err instanceof Error ? err.message : "An unexpected error occurred";
  return ApiResponse.error(message).send(res);
};
