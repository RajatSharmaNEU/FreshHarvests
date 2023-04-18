const Store = require("../models/storeModel");

const storeController = {
    'getAll': async (req, res) => {
        const storeItems = await Store.find();
        if (storeItems.length === 0) {
            res.status(204).send(storeItems);
        } else {
            res.status(200).send(storeItems);
        }
    },
    'addList': async (req, res) => {
        const {name, items} = req.body;
        try {
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
        } catch (err) {
            res.status(err.status);
            res.json({message: err.message, success: false});
        }
    },
}
module.exports = storeController;