import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.statusCode || 500;
    const error = err.error || 'InternalError';
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        error,
        message,

        ...(process.env.NODE_ENV === 'development' && { stack: err.stack, details: err.details}),
    });
};