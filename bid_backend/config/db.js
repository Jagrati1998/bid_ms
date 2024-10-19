// auction.js
const dotenv = require('dotenv');

// dbConfig.js
const mongoose = require('mongoose');
const Auction = require('../models/Auction'); // Assuming you have an Auction model

// MongoDB connection string
const dbUri = 'mongodb://localhost:27017/auctiondb';

// Sample auction data to be seeded
const auctionData = [
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
        title: 'Luxury Watch',
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
        title: 'Luxury Watch',
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
        title: 'Luxury Watch',
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
];

// Function to seed auction data
const seedAuctions = async () => {
    try {
        // Check if there are already auctions in the database
        const existingAuctions = await Auction.countDocuments();
        if (existingAuctions > 0) {
            console.log('Auction data already exists, skipping seeding.');
            return;
        }

        // Insert auction data
        const result = await Auction.insertMany(auctionData);
        console.log('Auctions inserted:', result);
    } catch (error) {
        console.error('Error inserting auctions:', error);
    }
};

// Function to connect to MongoDB and optionally seed data
const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Check if we should seed auction data based on environment variable
        const shouldSeed = process.env.SEED_AUCTIONS === 'true';
        if (shouldSeed) {
            await seedAuctions();
            console.log('Auction data seeded');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
