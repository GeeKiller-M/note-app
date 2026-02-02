export class AppError extends Error {
    statusCode: number;
    error: string;
    details?: unknown;

    constructor(
        message: string,
        statusCode: 500,
        error = 'InternalError',
        details?: unknown
    
    ) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.details = details;
    }
}