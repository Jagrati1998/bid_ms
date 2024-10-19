const Auction = require('../models/Auction');

const auctionService = {
    createAuction: async (title, description, startingBid, endDate, creator) => {
        const auction = new Auction({ title, description, startingBid, endDate, creator });
        return await auction.save();
    },

    getAllAuctions: async () => {
        return await Auction.find().populate('creator', 'username');
    },

    updateAuction: async (auctionId, updateData) => {
        return await Auction.findByIdAndUpdate(auctionId, updateData, { new: true });
    },

    deleteAuction: async (auctionId) => {
        return await Auction.findByIdAndDelete(auctionId);
    }
};

module.exports = auctionService;
