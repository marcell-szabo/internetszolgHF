export default (ToiletModel) => {
    return (req, res, next) => {
        if(typeof res.locals.toilet === 'undefined')
            return next()

        res.locals.toilet.remove((err, toilet) => {            
            if(err)
                return next(err)
            res.locals.json = toilet['_id']
            return next()
        })
    }
}