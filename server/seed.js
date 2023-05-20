const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb+srv://tanujyadav9085:101ElJ3zQI1uBdHx@major-project.zs7r4tb.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("Food-ordering").collection("products");
        const categoriesCollection = client.db("Food-ordering").collection("categories");

        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/Food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/Food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/Food-ordering-app/3_iawvqb.png',
        ]

        let products = [];
        for (let i = 0; i < 10; i += 1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();