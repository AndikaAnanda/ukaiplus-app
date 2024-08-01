export const checkMeMiddleware = (req, res, next) => {
    if (req.params.user_id === 'me') {
        return next('route')
    }
    next()
}