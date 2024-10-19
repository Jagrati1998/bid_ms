const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startingBid: { type: Number, required: true },
    endDate: { type: Date, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Auction = mongoose.model('Auction', auctionSchema);
module.exports = Auction;
