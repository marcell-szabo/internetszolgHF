export default () => {
    return (req, res, next) => {
        return res.json(res.locals.json)
    }
}