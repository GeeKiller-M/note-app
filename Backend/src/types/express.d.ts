import { z } from "zod";

declare global {
  namespace Express {
    interface Request {
      validated?: {
        body?: any;
        params?: any;
        query?: any;
      };
    }
  }
}