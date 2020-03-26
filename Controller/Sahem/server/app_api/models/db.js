import mongoose from 'mongoose';
const dbURI = process.env.DB_URL;
// const dbURI = 'mongodb://localhost/sahem';
mongoose.set('useCreateIndex', true);


mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};