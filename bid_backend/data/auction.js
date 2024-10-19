const mongoose = require('mongoose');

  auctionData = [
    {
        title: 'Antique Vase',
        description: 'A beautiful antique vase from the 19th century.',
        startingBid: 100,
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    },
    {
        title: 'Vintage Car',
        description: 'A well-maintained vintage car from the 1950s.',
        startingBid: 5000,
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    },
    {
        title: 'Luxury Watch',
        description: 'A high-end luxury watch in excellent condition.',
        startingBid: 2000,
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    },
    {
        title: 'Luxur223y Watch',
        description: 'A high-end luxury watch in excellent condition.',
        startingBid: 2000,
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    },
    {
        title: 'Lux222ury Watch',
        description: 'A high-end luxury watch in excellent condition.',
        startingBid: 2000,
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    },
    {
        title: 'Luxury Watch',
        description: 'A high-end luxury watch in excellent condition.',
        startingBid: 2000,
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    },
    {
        title: 'Lu232423423xury Watch',
        description: 'A high-end luxury watch in excellent condition.',
        startingBid: 2000,
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    },
    {
        title: 'Luxury Watch',
        description: 'A high-end luxury watch in excellent condition.',
        startingBid: 2000,
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        creator: new mongoose.Types.ObjectId() // Placeholder ObjectId
    }
];

