export default (ToiletModel) => {
    return (req, res, next) => {
        ToiletModel.find({}, (err, toilets) => {
            if (err)
                return next(err)
            
            res.locals.json = toilets
            return next()
        })
    }
}