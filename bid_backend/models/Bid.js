const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    auctionItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AuctionItem',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Bid', bidSchema);
