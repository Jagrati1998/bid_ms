const bidService = require('../services/bidService');

const bidController = {
    placeBid: async (req, res) => {
        const { auctionItemId, amount } = req.body;

        try {
            const bid = await bidService.placeBid(auctionItemId, req.user._id, amount);
            res.status(201).json({ message: 'Bid placed successfully.', bid });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getBidHistory: async (req, res) => {
        const { auctionItemId } = req.params;

        try {
            const bids = await bidService.getBidHistory(auctionItemId);
            res.json(bids);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCurrentHighestBid: async (req, res) => {
        const { auctionItemId } = req.params;

        try {
            const highestBid = await bidService.getCurrentHighestBid(auctionItemId);
            res.json(highestBid || { message: 'No bids placed yet.' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = bidController;
