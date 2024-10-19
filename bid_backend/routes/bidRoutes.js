const express = require('express');
const bidController = require('../controllers/bidController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/place', authMiddleware, bidController.placeBid);
router.get('/:auctionItemId/history', bidController.getBidHistory);
router.get('/:auctionItemId/highest', bidController.getCurrentHighestBid);

module.exports = router;
