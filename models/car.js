const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carName: String,
    carcolor: String,
    carcount: Number
})
module.exports = mongoose.model("Car",
carSchema)