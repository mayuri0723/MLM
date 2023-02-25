import mongoose from 'mongoose';

/**
 * Method that connects our MongoDB database.
 */
const connectDB = async () => {
try {

        const atlasURI = `mongodb+srv://root:root@cluster1.8utxkxi.mongodb.net/mlm?retryWrites=true&w=majority`;
        const conn = await mongoose.connect(atlasURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB
