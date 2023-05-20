const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://tanujyadav9085:101ElJ3zQI1uBdHx@major-project.zs7r4tb.mongodb.net/Food-ordering', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db