const Bid = require('../models/Bid');
const AuctionItem = require('../models/Auction');

const bidService = {
    placeBid: async (auctionItemId, userId, amount) => {
        // Find the auction item to validate it exists
        const auctionItem = await AuctionItem.findById(auctionItemId);
        if (!auctionItem) {
            throw new Error('Auction item not found.');
        }

        // Check if the new bid is higher than the current highest bid
        const highestBid = await Bid.findOne({ auctionItem: auctionItemId }).sort({ amount: -1 });
        if (highestBid && amount <= highestBid.amount) {
            throw new Error('Bid must be higher than the current highest bid.');
        }

        // Create a new bid
        const bid = new Bid({
            auctionItem: auctionItemId,
            user: userId,
            amount,
        });
        await bid.save();

        return bid; // Return the newly created bid
    },

    getBidHistory: async (auctionItemId) => {
        return await Bid.find({ auctionItem: auctionItemId }).populate('user', 'username');
    },

    getCurrentHighestBid: async (auctionItemId) => {
        return await Bid.findOne({ auctionItem: auctionItemId }).sort({ amount: -1 }).populate('user', 'username');
    },
};

module.exports = bidService;
