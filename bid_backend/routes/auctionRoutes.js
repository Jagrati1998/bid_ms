const express = require('express');
const auctionController = require('../controllers/auctionController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, auctionController.createAuction);
router.get('/', auctionController.getAllAuctions);
router.put('/:id', authMiddleware, auctionController.updateAuction);
router.delete('/:id', authMiddleware, auctionController.deleteAuction);

module.exports = router;
