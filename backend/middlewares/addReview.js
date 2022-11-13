export default (ToiletModel) => {
    return (req, res, next) => {
        if (typeof res.locals.toilet === 'undefined')
            return next(err)

        res.locals.toilet.ratings.push({'username': req.body.username, 'date': req.body.date, 'stars': req.body.stars, 'content': req.body.content})
        if (req.body.username == '' || 
        req.body.date == '' ||
        req.body.content == '') {
            res.locals.json = 'not updated'
            return next()
        }
        
        res.locals.toilet.save((err, toilet) => {
            if (err) 
                return next(err)
            res.locals.json = toilet._id
            return next()
        })
    }
}