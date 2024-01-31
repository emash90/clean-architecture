const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/post';
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;