const uri = 'mongodb+srv://SokhibjonDev:android106@cluster0.ruzzk.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(uri, () => {
            console.log('MongoDB connected');
        })
    } catch (error) {
        console.log(error);
    }
}