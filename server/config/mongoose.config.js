const mongoose = require('mongoose')

const db = 'Sports'

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connection Complete: ${db.toUpperCase()}`))
.catch((err) => console.log(`DENIED: ${db.toUpperCase()}, ${err}`))