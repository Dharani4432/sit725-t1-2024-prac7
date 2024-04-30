const { getClient } = require("../dbconnection");

const getCollection = () => {
    const client = getClient();
    return client.db().collection('tech');
};
const addCard = async (newCard) => {
    try {
        const collection = getCollection();
        const result = await collection.insertOne(newCard);
        return result;
    } catch (error) {
        throw error;
    }
};
const deletetech =  async(newCard) => {
    try{
    const collection = getCollection();
    const del_result = await collection.deleteOne(newCard);
    return del_result;
    } catch(error){
        throw error;
    }

}
const getAllCards = async () => {
    try {
        const collection = getCollection();
        const cards = await collection.find({}).toArray();
        return cards;
    } catch (error) {
        throw error;
    }
};
module.exports = { addCard, deletetech, getAllCards };