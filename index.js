const mongoString = "mongodb+srv://admin:kvITNXOIsb0rLKhl@cluster0kvITNXOIsb0rLKhl.qtyrl5o.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');


const client = new MongoClient(mongoString);

async function main() {
    
    try {
        await client.connect();
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }

}

main();