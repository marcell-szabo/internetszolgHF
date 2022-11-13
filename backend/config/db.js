import mongoose from 'mongoose' 

mongoose.connect('mongodb://127.0.0.1:27018/laupqq', { useNewUrlParser: true, useUnifiedTopology: true },(err) => { if(err) {console.log("databaseerror")}})

export default mongoose

