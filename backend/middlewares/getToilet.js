export default (ToiletModel) => {
    return (req, res, next) => {
        ToiletModel.findOne({_id: req.params.toiletid}, (err, toilet) => {
            if(err || !toilet) 
                return next(err ? err : 'hiba')
            
            res.locals.toilet = toilet
            return next()
        })
    }
}