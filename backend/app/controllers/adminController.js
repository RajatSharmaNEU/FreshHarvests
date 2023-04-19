const Store = require("../models/storeModel");
const csvtojson = require("csvtojson");

const adminController = {
    'uploadGroceryItems': async (req, res) => {
        try {
            // Convert CSV to JSON
            const name = 'freshHarvest';
            const items = await csvtojson().fromFile(req.file.path);
            const existingList = await Store.findOne({name});
            if (existingList) {
                await Store.findOneAndUpdate({name, items});
                res.send({
                    success: true,
                    status: 201,
                    message: "Store items updated successfully.",
                })
            } else {
                const store = new Store({name, items});
                await store.save({name, items});
                res.send({
                    success: true,
                    status: 201,
                    message: "Store items added successfully.",
                })
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = adminController;