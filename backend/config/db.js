import mongoose from 'mongoose' 

const CONN_STRING = process.env.CONN_STRING || 'mongodb://127.0.0.1:27018/laupqq'
console.log(`connection string: ${CONN_STRING}`)
mongoose.connect(CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true },(err) => { if(err) {console.log("databaseerror")}})

export default mongoose

