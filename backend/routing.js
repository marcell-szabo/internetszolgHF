import ToiletModel from './models/toilet.js'
import saveToilet from './middlewares/saveToilet.js'
import response from './middlewares/response.js'
import getToilets from './middlewares/getToilets.js'
import getToilet from './middlewares/getToilet.js'
import delToilet from './middlewares/delToilet.js'
import addReview from './middlewares/addReview.js'

export default function (app) {

    app.post('/wc/add', saveToilet(ToiletModel), response())
    app.get('/wc/get/all', getToilets(ToiletModel), response())
    app.get('/wc/del/:toiletid', getToilet(ToiletModel), delToilet(ToiletModel), response())
    app.post('/wc/edit/:toiletid', getToilet(ToiletModel), saveToilet(ToiletModel), response())
    app.post('/wc/rate/:toiletid', getToilet(ToiletModel), addReview(ToiletModel), response())
}