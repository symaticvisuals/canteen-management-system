const dbName = 'Food-ordering';
const dbHost = 'localhost';
const dbPort = 27017;
module.exports = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}