import { Request, Response, NextFunction } from "express";
import { z } from "zod";

type RequestPart = "body" | "params" | "query";

export const validate =
  (schema: z.ZodType, property: RequestPart = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property]);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: "ValidationError",
        message: "Invalid request data",
        details: z.flattenError(result.error).fieldErrors,
      });
    }

    req.validated = {
      ...req.validated,
      [property]: result.data,
    };

    next();
  };
