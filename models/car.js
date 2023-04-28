const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carName: {
        type: String,
        minLength: 1,
        maxLength: 25
    },
    carcolor: String,
    carcount: {
        type: Number,
        min: 1,
        max: 20
    }
})
module.exports = mongoose.model("Car",
carSchema)