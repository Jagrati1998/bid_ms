const auctionService = require('../services/auctionService');

const auctionController = {
    createAuction: async (req, res) => {
        try {
            const { title, description, startingBid, endDate } = req.body;
            const auction = await auctionService.createAuction(title, description, startingBid, endDate, req.user.id);
            res.status(201).json(auction);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getAllAuctions: async (req, res) => {
        try {
            const auctions = await auctionService.getAllAuctions();
            res.json(auctions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateAuction: async (req, res) => {
        try {
            const auctionId = req.params.id;
            const auction = await auctionService.updateAuction(auctionId, req.body);
            res.json(auction);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteAuction: async (req, res) => {
        try {
            const auctionId = req.params.id;
            await auctionService.deleteAuction(auctionId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = auctionController;
