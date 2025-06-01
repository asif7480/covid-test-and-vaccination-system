export const errorHandler = (err, request, response, next) => {
    const statusCode = err.statusCode || 500

    response.status(statusCode).json({
        err: err.message,
        stack: err.stack
    })
}