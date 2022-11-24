export default (ToiletModel) => {

    return (req, res, next) => {
        if (typeof res.locals.toilet === 'undefined')
            res.locals.toilet = new ToiletModel()
            
        console.log(req.body)
        res.locals.toilet.longitude = req.body.longitude
        res.locals.toilet.latitude = req.body.latitude
        res.locals.toilet.name = req.body.name
        res.locals.toilet.opening_hours = req.body.opening_hours
        res.locals.toilet.ratings = req.body.ratings
        res.locals.toilet.isfree = req.body.isfree
        res.locals.toilet.price = req.body.price
        
        if(req.body.longitude == '' ||
        req.body.latitude == '' ||
        req.body.name == '')
            return next()

        res.locals.toilet.save((err, doc) => {
            if (err) {
                return next(err)
            }
            res.locals.json = doc['_id']
            return next()
        })

    }
}