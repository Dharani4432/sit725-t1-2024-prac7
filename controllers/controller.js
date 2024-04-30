const { addCard, getAllCards } = require("../models/tech");
// Function to create new card
const { getClient } = require('../dbconnection');
const createtech = async (req, res) => {
    try {
        const { title, path, subTitle, description } = req.body;
        const client = getClient();
        const collection = client.db().collection('tech');
        const result = await collection.insertOne({ title, path, subTitle, description });
        res.status(201).json({ message: ' created successfully', tech: result.ops[0] });
    } catch (error) {
        console.error('Error creating:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const remove = (req, res) => {
    let newProject = req.body;
    model.deletetech(newProject, (error, result) => {
        if (error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'project successfully removed'});
        }
    });
};
const getAlltech = async (req, res) => {
    try {
        const client = getClient();
        const collection = client.db().collection('tech');
        const techs = await collection.find({}).toArray();
        res.json(techs);
    } catch (error) {
        console.error('Error fetching :', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = { createtech, getAlltech, remove };